export function createCarouselFridge(food,count){
  const noIMG = "https://maibood.s3.us-east-1.amazonaws.com/NoImage.png";
  if(count == 1){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  } ;
  }
  else if(count == 2){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  } ;
  }else if(count == 3){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[2].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[2].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[2].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[2].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  };
  }else if(count == 4){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[2].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[2].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[2].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[2].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[3].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[3].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[3].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[3].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  };
  }else if(count == 5){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[2].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[2].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[2].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[2].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[3].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[3].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[3].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[3].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[4].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[4].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[4].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[4].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  };
  }else if(count == 6){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[2].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[2].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[2].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[2].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[3].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[3].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[3].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[3].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[4].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[4].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[4].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[4].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[5].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[5].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[5].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[5].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  }
;
  }else if(count == 7){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[2].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[2].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[2].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[2].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[3].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[3].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[3].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[3].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[4].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[4].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[4].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[4].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[5].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[5].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[5].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[5].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[6].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[6].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[6].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[6].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  };
  }else if(count == 8){
    return  {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[2].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[2].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[2].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[2].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[3].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[3].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[3].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[3].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[4].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[4].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[4].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[4].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[5].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[5].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[5].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[5].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[6].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[6].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[6].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[6].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[7].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[7].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[7].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[7].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  };
  }else if(count == 9){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[2].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[2].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[2].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[2].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[3].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[3].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[3].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[3].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[4].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[4].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[4].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[4].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[5].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[5].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[5].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[5].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[6].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[6].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[6].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[6].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[7].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[7].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[7].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[7].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[8].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[8].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[8].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[8].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  };
  }else if(count == 10){
    return {
    "type": "carousel",
    "contents": [
      {
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[0].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[0].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[0].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[0].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[1].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[1].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[1].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[1].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[2].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[2].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[2].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[2].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[3].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[3].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[3].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[3].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[4].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[4].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[4].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[4].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[5].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[5].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[5].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[5].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[6].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[6].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[6].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[6].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[7].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[7].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[7].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[7].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[8].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[8].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[8].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[8].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
},
{
"type": "bubble",
"size": "micro",
"header": {
  "type": "box",
  "layout": "vertical",
  "contents": [
    {
      "type": "text",
      "text": `${food[9].material}`,
      "weight": "bold",
      "size": "sm",
      "wrap": true,
      "align": "center"
    }
  ]
},
"hero": {
  "type": "image",
  "url": food[9].image || noIMG,
  "size": "full",
  "aspectMode": "fit",
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
              "text": "สถานะ:",
              "wrap": true,
              "size": "xs",
              "flex": 0,
              "weight": "bold",
              "decoration": "underline"
            },
            {
              "type": "text",
              "text": food[9].is_store ? "กำลังแบ่งปัน" : "อยู่ในตู้เย็น",
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
              "text": thaiDate(food[9].exp),
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
    "backgroundColor": "#f2fffa"
  },
  "hero": {
    "backgroundColor": "#cfcdc7"
  },
  "body": {
    "backgroundColor": "#f2fffa"
  }
}
}
    ]
  };
  }
}  
function thaiDate(d){
  const date = new Date(d);
    const thDate = new Intl.DateTimeFormat('th-TH', {
year: 'numeric',
month: 'long',
day: 'numeric'
}).format(date); 
return thDate
}