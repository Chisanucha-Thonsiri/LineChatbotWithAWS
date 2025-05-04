import https from 'https';
import { createConnection } from 'mysql2/promise';
import { createCarousel } from './Resource/foodcarousel1.mjs';
import { createUserProfileFlex } from './Resource/profileFlex.mjs';
const sessions = {}; 
const flex1 = process.env.FoodFlex;
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DB = process.env.DB;
const SpoonAPIKEY= process.env.SpoonAPIKEY;
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
        }else if (userMessage === 'เทสอาหาร') {
            const res = await fetch(foodapi);
            const recipe = await res.json();
            messages = [
                { type: 'text', text: `${recipe[0].title}` }
            ];
            delete sessions[userId];
        } else if (userMessage === 'เช็คตู้เย็น') {
            messages = [
                {
                    type: "flex",
                    altText: "ตู้เย็นของฉัน",
                    contents: JSON.parse(flex1)
                },
                {
                    type: "text",
                    text: "ใครเค้าใส่ไว้ในตู้เย็นกันพี่ชาย... 🙏"
                }
            ];
            delete sessions[userId];
        } else if (userMessage === 'ล็อคอิน') {
            sessions[userId] = { flow: 'User', step: 0, data: {} };
            messages = await handleStepMessageUser(userId, userMsg);
        } else if (userMessage === 'เทสสเตป') {
            sessions[userId] = { flow: 'stepMessage', step: 0, data: {} };
            messages = handleStepMessage(userId, userMsg);
        } else if (userMessage === 'เทสพิซซ่า') {
            sessions[userId] = { flow: 'pizza', step: 0, data: {} };
            messages = handleStepMessagePizza(userId, userMsg);
        } else if (userMessage === 'แนะนำเมนูอาหาร') {
            sessions[userId] = { flow: 'getRecipt', step: 0, data: {} };
            messages = await handleStepMessageRecipt(userId, userMsg);
        } else if (sessions[userId]?.flow) {
            const flow = sessions[userId].flow;
            if (flow === 'stepMessage') {
                messages = handleStepMessage(userId, userMsg);
            }else if (flow === 'pizza') {
                messages = handleStepMessagePizza(userId, userMsg);
            }else if (flow === 'getRecipt') {
                messages = await handleStepMessageRecipt(userId, userMsg);
            } else if (flow === 'User') {
                messages = await handleStepMessageUser(userId, userMsg);
            } 
            else {
                messages = [{ type: 'text', text: `I don't know how to handle that flow.` }];
            }
        } else {
            messages = [{ type: 'text', text: `I didn't understand your message: ${userMsg}` }];
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

async function handleStepMessageUser(userId, userMsg) {
    const session = sessions[userId];
    let messages = [];

    switch (session.step) {
        case 1: {
            session.data.userid = userMsg;
            session.step = 2;
            try {
                const connection = await createConnection({
                    host: HOST,
                    user: USER,
                    password: PASSWORD,
                    database: DB
                });
                const [results] = await connection.execute(
                    'SELECT fname, lname FROM MEMBERS WHERE id = ?',
                    [session.data.userid]
                );

                if (results.length > 0) {
                    const userData = results[0];
                    messages = [{ type: 'text', text: `สวัสดีคุณ ${userData.fname} ${userData.lname} กรุณากรอกรหัสผ่าน:` }];
                } else {
                    messages = [{ type: 'text', text: 'ไม่พบผู้ใช้ที่มีรหัสนี้ในระบบ กรุณาลองใหม่อีกครั้ง' }];
                    delete sessions[userId];
                }
                await connection.end();
            } catch (error) {
                console.error('Database error:', error);
                messages = [{ type: 'text', text: 'เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล' }];
                delete sessions[userId];
            }
            break;
        }

        case 2: {
            const passwordInput = userMsg;
            try {
                const connection = await createConnection({
                    host: HOST,
                    user: USER,
                    password: PASSWORD,
                    database: DB
                });
        
                const [results] = await connection.execute(
                    'SELECT id, phone_number, password, fname, lname, user_line, line_connected FROM MEMBERS WHERE id = ?',
                    [session.data.userid]
                );
        
                if (results.length > 0) {
                    const userData = results[0];
        
                    if (session.data.passwordAttempt === undefined) {
                        session.data.passwordAttempt = 5;
                    }
        
                    if (passwordInput.toLowerCase() === 'exit') {
                        messages = [{ type: 'text', text: '❌ ขออภัย ลงชื่อเข้าใช้ไม่สำเร็จ' }];
                        delete sessions[userId];
        
                    } else if (userData.password === passwordInput) {
                        const flexMessage = createUserProfileFlex(userData);
                        messages = [flexMessage];
                        delete sessions[userId]; 
        
                    } else {
                        session.data.passwordAttempt -= 1;
        
                        if (session.data.passwordAttempt <= 0) {
                            messages = [{ type: 'text', text: '❌ ขออภัย ลงชื่อเข้าใช้ไม่สำเร็จ (พยายามเกินจำนวนครั้งที่กำหนด)' }];
                            delete sessions[userId];
                        } else {
                            messages = [{
                                type: 'text',
                                text: `❌ รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง\n(พิมพ์ Exit เพื่อออก เหลือโอกาสกรอกอีก ${session.data.passwordAttempt} ครั้ง)`
                            }];
                        }
                    }
        
                } else {
                    messages = [{ type: 'text', text: 'ไม่พบผู้ใช้ที่มีรหัสนี้ในระบบ' }];
                    delete sessions[userId];
                }
        
                await connection.end();
            } catch (error) {
                console.error('Database error:', error);
                messages = [{ type: 'text', text: 'เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล' }];
                delete sessions[userId];
            }
            break;
        }
        
        default:
            messages = [{ type: 'text', text: `เข้าสู่ระบบ? กรอกไอดีผู้ใช้ของคุณ!` }];
            sessions[userId] = { flow: 'User', step: 1, data: {} };
            break;
    }

    return messages;
}
async function handleStepMessageRecipt(userId, userMsg) {
    const session = sessions[userId];
    let messages = [];

    switch (session.step) {
        case 1:
            session.data.ingredient = userMsg;
            session.step = 2;
            const key = SpoonAPIKEY;
            const foodapi = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${session.data.ingredient}&number=3&apiKey=${key}`;
            const res = await fetch(foodapi);
            const recipt = await res.json();
            const foodcarousel = createCarousel(recipt);
              messages = [
                {
                  type: "flex",
                  altText: "เมนูอาหารที่แนะนำ",
                  contents: foodcarousel
                }
              ];
              
            delete sessions[userId];
            break;
        default:
            messages = [{ type: 'text', text: `สวัสดีพิมพ์ข้อมูลวัตถุดิบที่มีได้เลย! (Ex.Egg, Lettuce)` }];
            sessions[userId] = { flow: 'getRecipt', step: 1, data: {} };
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
