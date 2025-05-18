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
            messages = [{ type: 'text', text: `สวัสดีค้าบบบบบ ${userId}` }];
            delete sessions[userId];
        } else if (userMessage === 'foodwaste กับ foodloss ต่างกันอย่างไร') {              
            messages = [
                { 
                    type: 'text', 
                    text: `Foodwaste และ Foodloss แตกต่างกันในแง่ของต้นเหตุและสถานที่เกิดขึ้น:
        
        1. Foodloss: เกิดขึ้นในระหว่างกระบวนการผลิต การเก็บเกี่ยว การแปรรูป หรือการขนส่งอาหาร โดยทั่วไปมักเกิดก่อนที่อาหารจะไปถึงผู้บริโภค เช่น ผลผลิตเสียหายในฟาร์ม การเก็บเกี่ยวไม่ทันเวลา หรือการจัดการโลจิสติกส์ที่ไม่ดี
        2. Foodwaste: เกิดขึ้นในระดับผู้บริโภคหรือปลายทาง เช่น การทิ้งอาหารที่ยังบริโภคได้เพราะหมดอายุ (ตามฉลาก) หรือการเตรียมอาหารในปริมาณมากเกินไปจนเหลือทิ้ง
        `
                }
            ];           
            delete sessions[userId];
        }else if (userMessage === 'ยกเลิกเชื่อมต่อบัญชี') {
    let connection;
    try {
        connection = await createConnection({
            host: HOST,
            user: USER,
            password: PASSWORD,
            database: DB
        });

        const connected = 0;
        const user_lineID = null;

        await connection.execute(
            'UPDATE MEMBERS SET user_line = ?, line_connected = ? WHERE user_line = ?;',
            [user_lineID, connected, userId]
        );

        messages = [{ type: 'text', text: 'ยกเลิกเชื่อมต่อบัญชีแล้ว' }];
    } catch (error) {
        console.error('Database error:', error.message, error.stack);
        messages = [{ type: 'text', text: 'เกิดข้อผิดพลาดในการยกเลิกเชื่อมต่อบัญชี' }];
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}
        else if (userMessage === 'เทสอาหาร') {
            const res = await fetch(foodapi);
            const recipe = await res.json();
            messages = [
                { type: 'text', text: `${recipe[0].title}` }
            ];
            delete sessions[userId];
        } else if (userMessage === 'เช็คตู้เย็น') {
            sessions[userId] = { flow: 'Fridge', step: 0, data: {} };
            messages = await handleStepMessageFridge(userId, userMsg);
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
            } else if (flow === 'Fridge') {
                messages = await handleStepMessageFridge(userId, userMsg);
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
                    messages = [{ type: 'text', text: `สวัสดีคุณ ${userData.fname} ${userData.lname} \nกรุณากรอกรหัสผ่าน:` }];
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
           // session.step = 3;
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
                        session.step = 3;
                        const flexMessage = createUserProfileFlex(userData);
                        messages = [flexMessage];
                        //delete sessions[userId]; 
        
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
        case 3: {
            //session.data.userid = userMsg;
            //session.step = 2;
            try {
                const connection = await createConnection({
                    host: HOST,
                    user: USER,
                    password: PASSWORD,
                    database: DB
                });
                
                if (userMsg === "เชื่อมบัญชี") {
                    const connected = 1;
                    await connection.execute(
                    'UPDATE MEMBERS SET user_line = ?, line_connected = ? WHERE id = ?;',
                    [userId,connected,session.data.userid]
                );
                const [updatedResults] = await connection.execute(
                    'SELECT id, phone_number, password, fname, lname, user_line, line_connected FROM MEMBERS WHERE id = ?',
                    [session.data.userid]
                );
                    const userData = updatedResults[0];
                    const flexMessage = createUserProfileFlex(userData);
                    messages = [flexMessage];
                } else {
                    messages = [{ type: 'text', text: 'ไม่ได้เชื่อมบัญชี/อัพเดตข้อมูลใดๆ' }];
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
            const connection = await createConnection({
                    host: HOST,
                    user: USER,
                    password: PASSWORD,
                    database: DB
                });
        
            const [results] = await connection.execute(
                    'SELECT id, phone_number, password, fname, lname, user_line, line_connected FROM MEMBERS WHERE user_line = ?',
                    [userId]
                );
            if(results.length > 0){
                const userData = results[0];
                const flexMessage = createUserProfileFlex(userData);
                messages = [flexMessage];
                sessions[userId] = { flow: 'User', step: 3, data: {} };
            }else{
                messages = [{ type: 'text', text: `เข้าสู่ระบบ? กรอกไอดีผู้ใช้ของคุณ!` }];
                sessions[userId] = { flow: 'User', step: 1, data: {} };
            }
            
            break;
    }

    return messages;
}
async function handleStepMessageFridge(userId, userMsg) {
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
                    messages = [{ type: 'text', text: `สวัสดีคุณ ${userData.fname} ${userData.lname} เพื่อดูตู้เย็นของคุณ กรุณากรอกรหัสผ่าน:` }];
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

                const [food] = await connection.execute(
                    'SELECT id, material, exp, image, price, type FROM fridge WHERE owner = ?',
                    [session.data.userid]
                );

                const [foodCountResult] = await connection.execute(
                    'SELECT COUNT(*) AS count FROM fridge WHERE owner = ?',
                    [session.data.userid]
                );

                const foodCount = foodCountResult[0]?.count || 0;
        
                if (results.length > 0) {
                    const userData = results[0];
                    const foodFridge = food[0];
        
                    if (session.data.passwordAttempt === undefined) {
                        session.data.passwordAttempt = 5;
                    }
        
                    if (passwordInput.toLowerCase() === 'exit') {
                        messages = [{ type: 'text', text: '❌ ขออภัย ลงชื่อเข้าใช้ไม่สำเร็จ' }];
                        delete sessions[userId];
        
                    } else if (userData.password === passwordInput) {
                        if (foodCount == 1){
                            messages = [
                                {type: 'text', text: `คุณมีอาหาร ${foodCount} อย่างเก็บไว้บนตู้เย็น` },
                                { type: 'text', text: `ชื่อวัตถุดิบ: ${food[0].material} \nวันหมดอายุ: ${food[0].exp} \nภาพ: ${food[0].image} \nประเภท: ${food[0].type} ` },
                                {
                                    type: 'image',
                                    originalContentUrl: food[0].image, 
                                    previewImageUrl: food[0].image  
                                }
                            ];
                        }else if(foodCount == 2){
                            messages = [
                                {type: 'text', text: `คุณมีอาหาร ${foodCount} อย่างเก็บไว้บนตู้เย็น` },
                                { type: 'text', text: `ชื่อวัตถุดิบ: ${food[0].material} \nวันหมดอายุ: ${food[0].exp} \nภาพ: ${food[0].image} \nประเภท: ${food[0].type} ` },
                                {
                                    type: 'image',
                                    originalContentUrl: food[0].image, 
                                    previewImageUrl: food[0].image  
                                },
                                { type: 'text', text: `ชื่อวัตถุดิบ: ${food[1].material} \nวันหมดอายุ: ${food[1].exp} \nภาพ: ${food[1].image} \nประเภท: ${food[1].type} ` },
                                {
                                    type: 'image',
                                    originalContentUrl: food[1].image, 
                                    previewImageUrl: food[1].image  
                                }
                            ];
                        }
                        
                        
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
            messages = [{ type: 'text', text: `ดูอาหารในตู้เย็น? กรอกไอดีผู้ใช้ของคุณ!` }];
            sessions[userId] = { flow: 'Fridge', step: 1, data: {} };
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
