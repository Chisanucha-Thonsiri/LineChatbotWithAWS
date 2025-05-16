export const handler = async (event) => {
  const userId = process.env.userIDTEST; 
  const messageText = 'สวัสดี! อาหารจะบูดแล้วพี่ชาย!!';

  const pushMessage = async (userId, text) => {
    const body = {
      to: userId,
      messages: [{
        type: 'text',
        text
      }]
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
      console.error('Push failed:', error);
    } else {
      console.log('Push message success!');
    }
  };

  await pushMessage(userId, messageText);
};
