import https from 'https';

const sessions = {}; 
const flex1 = process.env.FoodFlex; //Configure Environment Variable in Lambda Function

export const handler = async (event) => {
    try {
        const eventObj = event.events?.[0];
        if (!eventObj?.replyToken || !eventObj?.message?.text) {
            throw new Error('Invalid event structure');
        }
        const userId = eventObj.source?.userId;
        const userMsg = eventObj.message.text.trim();
        const userMessage = userMsg.toLowerCase();
        let messages = [];
        if (userMessage === 'สวัสดี') {
            messages = [{ type: 'text', text: 'สวัสดีค้าบบบบบ' }];
            delete sessions[userId];
        } else if (userMessage === 'ขอไอดีตัวเอง') {
            messages = [
                { type: 'text', text: `นี่คือไอดีผู้ใช้ของคุณ: ${userId}` },
                { type: 'text', text: `ตอนนี้คุณสามารถใช้ระบบต่าง ๆ ของเราได้แล้วแหละ` }
            ];
            delete sessions[userId];
        } else if (userMessage === 'เช็คตู้เย็น') {
            messages = [
                {
                    type: "flex",
                    altText: "ตู้เย็นของฉัน",
                    contents: JSON.parse(flex1)
                }
            ];
            delete sessions[userId];
        } else if (userMessage === 'เทสสเตป') {
            sessions[userId] = { flow: 'stepMessage', step: 0, data: {} };
            messages = handleStepMessage(userId, userMsg);
        } else if (userMessage === 'เทสพิซซ่า') {
            sessions[userId] = { flow: 'pizza', step: 0, data: {} };
            messages = handleStepMessagePizza(userId, userMsg);
        } else if (sessions[userId]?.flow) {
            const flow = sessions[userId].flow;
            if (flow === 'stepMessage') {
                messages = handleStepMessage(userId, userMsg);
            }else if (flow === 'pizza') {
                messages = handleStepMessagePizza(userId, userMsg);
            } else {
                messages = [{ type: 'text', text: `I don't know how to handle that flow.` }];
            }
        } else {
            messages = [{ type: 'text', text: `ข้อความที่คุณพิมพ์เข้ามา: ${userMsg} ขณะนี้ทางเรายังไม่เข้าใจต้องขออภัยด้วยนะครับ` }];
        }

        const post_data = JSON.stringify({
            replyToken: eventObj.replyToken,
            messages
        });

        await makeRequest(post_data);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully!' }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to process request' }),
        };
    }
};

function handleStepMessage(userId, userMsg) {
    const session = sessions[userId];
    let messages = [];

    switch (session.step) {
        case 1:
            session.data.name = userMsg;
            session.step = 2;
            messages = [{ type: 'text', text: `ยินดีที่ได้รู้จักนะ, ${session.data.name}! อายุเท่าไหร่หล่ะ?` }];
            break;
        case 2:
            session.data.age = userMsg;
            messages = [{
                type: 'text',
                text: `อ๋าา คุณอายุ ${session.data.age} ปีแล้ว!. ยินดีที่ได้รู้จักนะ ${session.data.name}! เราเป็นเพื่อนกันแล้วนะ`
            }];
            delete sessions[userId]; 
            break;
        default:
            messages = [{ type: 'text', text: `มาเริ่มกันเลย! คุณชื่ออะไร?` }];
            sessions[userId] = { flow: 'stepMessage', step: 1, data: {} };
            break;
    }

    return messages;
}

function handleStepMessagePizza(userId, userMsg) {
    const session = sessions[userId];
    let messages = [];

    switch (session.step) {
        case 1:
            session.data.name = userMsg;
            session.step = 2;
            messages = [{ type: 'text', text: `คุณสั่ง: ${session.data.name}! เอากี่ถาดดี?` }];
            break;
        case 2:
            session.data.amount = userMsg;
            messages = [{
                type: 'text',
                text: `คุณสั่ง ${session.data.amount} นะ. ออเดอร์  ${session.data.name} กำลังจัดเตรียมหล่ะ!`
            }];
            delete sessions[userId]; 
            break;
        default:
            messages = [{ type: 'text', text: `สั่งพิซซ่าหรอ เอาไรดีหล่ะ?` }];
            sessions[userId] = { flow: 'pizza', step: 1, data: {} };
            break;
    }

    return messages;
}

async function makeRequest(post_data) {
    const token = process.env.LINE_BOT_TOKEN;
    if (!token) {
        throw new Error('LINE_BOT_TOKEN is not set');
    }

    const options = {
        host: 'api.line.me',
        path: '/v2/bot/message/reply',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(post_data),
            'Authorization': `Bearer ${token}`,
        },
    };

    return new Promise((resolve, reject) => {
        const request = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(data);
                } else {
                    reject(new Error(`HTTP Error: ${res.statusCode} - ${data}`));
                }
            });
        });

        request.on('error', (error) => reject(error));
        request.write(post_data);
        request.end();
    });
}
