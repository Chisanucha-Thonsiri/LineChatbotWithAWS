import { createConnection } from 'mysql2/promise';

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DB = process.env.DB;

export const handler = async (event) => {
  const pushMessage = async (foodExpSoon, connection) => {
    try {
      const [rows] = await connection.execute(
        'SELECT user_line FROM MEMBERS WHERE id = ?;', [foodExpSoon.owner]
      );

      const ownerID = rows.length > 0 ? rows[0].user_line : null;

      if (!ownerID) {
        console.warn(`⚠️ Skipping notification: ownerID is null for material ${foodExpSoon.material}`);
        return;
      }

      const body = {
  to: ownerID,
  messages: [
    {
      type: "flex",
      altText: "🔔 แจ้งเตือนอาหารใกล้หมดอายุ",
      contents: {
  "type": "bubble",
  "size": "micro",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "{{🔔}} \nอาหารใกล้หมดอายุ",
        "weight": "bold",
        "size": "sm",
        "wrap": true,
        "align": "center"
      }
    ]
  },
  "hero": {
    "type": "image",
    "url": foodExpSoon.image,
    "size": "full",
    "aspectMode": "cover",
    "aspectRatio": "320:213"
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "ชื่ออาหาร:",
                "wrap": true,
                "size": "xs",
                "flex": 0,
                "weight": "bold",
                "decoration": "underline"
              },
              {
                "type": "text",
                "text": `${foodExpSoon.material}`,
                "wrap": true,
                "size": "xs",
                "flex": 5,
                "color": "#000754"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "spacing": "sm",
            "contents": [
              {
                "type": "text",
                "text": "ข้อมูลวันหมดอายุ:",
                "wrap": true,
                "size": "xs",
                "flex": 0,
                "weight": "bold",
                "decoration": "underline"
              },
              {
                "type": "text",
                "text": `${foodExpSoon.exp}`,
                "wrap": true,
                "size": "xs",
                "flex": 5,
                "color": "#540016"
              }
            ]
          }
        ]
      }
    ],
    "spacing": "sm",
    "paddingAll": "13px"
  },
  "styles": {
    "header": {
      "backgroundColor": "#fff8c2"
    }
  }
}
    }
  ]
};




      const res = await fetch('https://api.line.me/v2/bot/message/push', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
        },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const error = await res.text();
        console.error(`❌ Push failed for ${ownerID}:`, error);
      } else {
        console.log(`✅ Push message success for ${ownerID}!`);
      }
    } catch (error) {
      console.error(`Error in pushMessage for ${foodExpSoon.material}:`, error.message, error.stack);
    }
  };

  let connection;
  try {
    connection = await createConnection({
      host: HOST,
      user: USER,
      password: PASSWORD,
      database: DB
    });

    const [foodExpSoonList] = await connection.execute(
      'SELECT * FROM fridge WHERE exp BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 3 DAY);'
    );

    await Promise.all(foodExpSoonList.map(foodExpSoon => pushMessage(foodExpSoon, connection)));
  } catch (error) {
    console.error('Database error:', error.message, error.stack);
  } finally {
    if (connection) {
      await connection.end();
    }
  }

  return { statusCode: 200, body: JSON.stringify({ message: 'Success' }) };
};
