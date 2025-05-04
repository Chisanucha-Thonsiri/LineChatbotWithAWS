export function createCarousel(recipt){
    return {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "size": "micro",
          "hero": {
            "type": "image",
            "url": `${recipt[0].image}`,
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
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "เมนู #1",
                        "wrap": true,
                        "color": "#8c8c8c",
                        "size": "xs",
                        "flex": 5
                      }
                    ]
                  }
                ]
              },
              {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${recipt[0].title}`,
                      "size": "sm",
                      "weight": "bold",
                      "wrap": true
                    }
                  ],
                  "height": "40px"
                },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "ดูวิธีทำ",
                  "uri": "http://linecorp.com/"
                },
                "style": "primary",
                "height": "sm",
                "color": "#1707f2",
                "margin": "10px"
              }
            ],
            "spacing": "sm",
            "paddingAll": "13px"
          }
        },
        {
          "type": "bubble",
          "size": "micro",
          "hero": {
            "type": "image",
            "url": `${recipt[1].image}`,
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
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "เมนู #2",
                        "wrap": true,
                        "color": "#8c8c8c",
                        "size": "xs",
                        "flex": 5
                      }
                    ]
                  }
                ]
              },
              {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${recipt[1].title}`,
                      "size": "sm",
                      "weight": "bold",
                      "wrap": true
                    }
                  ],
                  "height": "40px"
                },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "ดูวิธีทำ",
                  "uri": "http://linecorp.com/"
                },
                "style": "primary",
                "height": "sm",
                "color": "#1707f2",
                "margin": "10px"
              }
            ],
            "spacing": "sm",
            "paddingAll": "13px"
          }
        },
        {
          "type": "bubble",
          "size": "micro",
          "hero": {
            "type": "image",
            "url": `${recipt[2].image}`,
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
                    "layout": "baseline",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "เมนู #3",
                        "wrap": true,
                        "color": "#8c8c8c",
                        "size": "xs",
                        "flex": 5
                      }
                    ]
                  }
                ]
              },
              {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${recipt[2].title}`,
                      "size": "sm",
                      "weight": "bold",
                      "wrap": true
                    }
                  ],
                  "height": "40px"
                },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "ดูวิธีทำ",
                  "uri": "http://linecorp.com/"
                },
                "style": "primary",
                "height": "sm",
                "color": "#1707f2",
                "margin": "10px"
              }
            ],
            "spacing": "sm",
            "paddingAll": "13px"
          }
        }
      ]
    }
  }  