export function createUserProfileFlex(userData) {
    const isConnected = !!userData.user_line;
  
    return {
      type: "flex",
      altText: "เข้าสู่ระบบสำเร็จ",
      contents: {
        type: "bubble",
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "text",
                      text: "Login สำเร็จ!",
                      weight: "bold",
                      color: "#1DB446",
                      size: "md"
                    }
                  ],
                  width: "105px"
                },
                {
                  type: "text",
                  text: `#${userData.id || "ไม่พบไอดี"}`,
                  color: "#a3a3a3",
                  weight: "bold",
                  size: "md"
                }
              ],
              height: "20px"
            },
            {
              type: "separator",
              margin: "sm"
            },
            {
              type: "box",
              layout: "vertical",
              margin: "xxl",
              spacing: "sm",
              contents: [
                {
                  type: "text",
                  text: "ข้อมูลโปรไฟล์ 👤",
                  size: "md",
                  color: "#120099",
                  weight: "bold"
                },
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "box",
                      layout: "horizontal",
                      contents: [
                        {
                          type: "text",
                          text: "ชื่อ: ",
                          size: "sm",
                          weight: "bold"
                        }
                      ],
                      width: "30px"
                    },
                    {
                      type: "text",
                      text: userData.fname || "-",
                      size: "sm",
                      color: "#111111"
                    },
                    {
                      type: "box",
                      layout: "vertical",
                      contents: []
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "box",
                      layout: "horizontal",
                      contents: [
                        {
                          type: "text",
                          text: "นามสกุล: ",
                          size: "sm",
                          weight: "bold"
                        }
                      ],
                      width: "65px"
                    },
                    {
                      type: "text",
                      text: userData.lname || "-",
                      size: "sm",
                      color: "#111111"
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "box",
                      layout: "horizontal",
                      contents: [
                        {
                          type: "text",
                          text: "เบอร์โทรศัพท์: ",
                          size: "sm",
                          weight: "bold"
                        }
                      ],
                      width: "95px"
                    },
                    {
                      type: "text",
                      text: userData.phone_number || "-",
                      size: "sm",
                      color: "#111111"
                    }
                  ]
                },
                {
                  type: "separator",
                  margin: "xxl"
                },
                {
                  type: "box",
                  layout: "horizontal",
                  margin: "xxl",
                  contents: [
                    {
                      type: "text",
                      text: "การเชื่อมต่อไลน์ 📱",
                      size: "md",
                      color: "#120099",
                      weight: "bold"
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "box",
                      layout: "horizontal",
                      contents: [
                        {
                          type: "text",
                          text: "สถานะ: ",
                          size: "sm",
                          weight: "bold"
                        }
                      ],
                      width: "55px"
                    },
                    {
                      type: "text",
                      text: isConnected ? "เชื่อมต่อแล้ว" : "ยังไม่ได้เชื่อมต่อ",
                      size: "sm",
                      color: isConnected ? "#1DB446" : "#ab0000"
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "horizontal",
                  contents: [
                    {
                      type: "box",
                      layout: "horizontal",
                      contents: [
                        {
                          type: "text",
                          text: "ไอดีห้องแชท:",
                          size: "sm",
                          weight: "bold"
                        }
                      ],
                      width: "95px"
                    },
                    {
                      type: "text",
                      text: userData.user_line || "ยังไม่ได้เชื่อมต่อ",
                      size: "sm",
                      color: isConnected ? "#111111" : "#ab0000"
                    }
                  ]
                }
              ]
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
  "type": "button",
  "action": {
    "type": "message",
    "label": isConnected ? "ยกเลิกเชื่อม" : "เชื่อมต่อบัญชี",
    "text": isConnected ? "ยกเลิกเชื่อมต่อบัญชี" : "เชื่อมบัญชี"
  },
  "height": "sm",
  "color": isConnected ? "#ab0000" : "#1DB446",
  "gravity": "center",
  "style": "primary"
},
                {
                  type: "separator",
                  margin: "10px"
                },
                {
                  type: "button",
                  action: {
                    type: "uri",
                    label: "แก้ไขโปรไฟล์",
                    uri: "http://linecorp.com/"
                  },
                  height: "sm",
                  gravity: "center",
                  style: "secondary"
                }
              ],
              margin: "10px"
            }
          ]
        },
        styles: {
          footer: {
            separator: true
          }
        }
      }
    };
  }
  