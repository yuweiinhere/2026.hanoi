const ITINERARY_DATA = [
    {
        day: "DAY 01",
        date: "4/3 FRI",
        items: [
            { tag: "Flight", title: "14:40 台北起飛 (BR385)", info: "17:50 抵達河內機場" },
            { trans: "🚗 Grab 車程約 50 分鐘 (機場 → Airbnb)" },
            { tag: "Hotel", title: "Airbnb Checking", info: "營業時間：24 小時開放", map: "https://maps.app.goo.gl/uTFU78BKnRNVMJ1S8?g_st=ipc" },
            { trans: "🚶 步行約 8 分鐘" },
            { 
                tag: "Food", title: "Luk Lak Vietnamese Restaurant", info: "營業時間：07:00 - 23:00", map: "https://maps.app.goo.gl/wJyH9jtY3DxXNRha8?g_st=ipc",
                menu: ["Cá Lăng nướng (炭烤鱸魚 | Grilled Fish)", "Thịt kho tẩu (焦糖燉肉 | Caramelized Pork)", "Bún chả Luk Lak (特色烤肉米線)"]
            }
        ]
    },
    {
        day: "DAY 02",
        date: "4/4 SAT",
        items: [
            { trans: "🚗 Grab 車程約 9 分鐘" },
            { tag: "Food", title: "Bánh Mì P (早午餐)", info: "營業時間：07:00 - 21:00", map: "https://maps.app.goo.gl/WeP2fsRk5CgLQzYu6?g_st=ipc" },

            { trans: "🚗 Grab 車程約 10 分鐘" },

            { tag: "History", title: "Lăng Chủ tịch Hồ Chí Minh (胡志明陵寢)", info: "開放時間：07:30 - 11:00", map: "https://maps.app.goo.gl/Kv2BVqDGxFGrGGgw7?g_st=ipc" },

            { trans: "🚶 步行約 15 分鐘" },

            { tag: "History", title: "Hoàng thành Thăng Long (昇龍皇城)", info: "開放時間：08:00 - 17:00", map: "https://maps.app.goo.gl/CnaPvw4FvM3cLESH9?g_st=ipc" },

            { trans: "🚶 步行約 12 分鐘" },

            { tag: "Food", title: "Tầm vị (米其林一星)", info: "營業時間：11:30–14:00, 18:00–21:00", map: "https://maps.app.goo.gl/m7fMkMtN4hhn8epG7?g_st=ipc" },

            { trans: "🚶 步行約 10 分鐘" },

            { tag: "Sight", title: "Phố Đi Bộ Đường Tàu (火車街)", info: "建議拍照時間：15:00", map: "https://maps.app.goo.gl/uViLWReR5QLe3v2FA?g_st=ipc" },

            { trans: "🚶 步行約 6 分鐘" },

            { tag: "Shop", title: "Líu Lô Arts Hàng Da", info: "小店", map: "https://maps.app.goo.gl/AndMDdJQVid79sMo6" },
            { tag: "Shop", title: "Líu Lô Arts Chân Cầm", info: "小店", map: "https://maps.app.goo.gl/Hq8qtg2GZBCw7tKNA" },
            { tag: "Shop", title: "Gói Gém Cafe, Souvenirs & Local Art Store", info: "小店", map: "https://maps.app.goo.gl/wcGvKfvF8P2vsfZW7" },

            { trans: "🚶 步行約 2 分鐘" },

            { 
                tag: "Food", title: "選項一: Bun Cha Dac Kim", info: "營業時間：9:00 - 21:30", map: "https://maps.app.goo.gl/zLRbKW2rKwQmJo1y5",
                menu: ["Bún chả (烤肉米線)", "Nem rán (炸春捲)"]
            },
            { 
                tag: "Food", title: "選項二: Pizza 4P's", info: "營業時間：10:30 - 23:00", map: "https://maps.app.goo.gl/ffL1qjnyJuLjU7RJA?g_st=ipc",
                menu: ["Burrata Cheese Pizza", "Crab Tomato Pasta"]
            },
            { 
                tag: "Food", title: "選項三: Pho 10 Ly Quoc Su", info: "營業時間：6:00 - 22:00", map: "https://maps.app.goo.gl/g7AwhVq3XD6Kyxmj6",
                menu: ["Ban nam gau (除了牛菲力吃不到 其他牛都吃的到)"]
            },
            { 
                tag: "Food", title: "選項四: Tung's Kitchen", info: "營業時間：10:00 - 22:30", map: "https://maps.app.goo.gl/NQHdAQZuZyG61VYh6",
                menu: ["湄公河煎蛋餅"]
            }
        ]
    },
    {
        day: "DAY 03",
        date: "4/5 SUN",
        items: [
            { tag: "Trip", title: "下龍灣一日遊 (飯店接送)", info: "08:00 開始" },
            { trans: "🚌 往返車程約 5 小時" },
            { tag: "Trip", title: "返抵河內 Airbnb", info: "約 21:00 結束" }
        ]
    },
    {
        day: "DAY 04",
        date: "4/6 MON",
        items: [
            { trans: "🚗 Grab 車程約 10 分鐘" },
            
            { 
                tag: "Food", title: "Bánh mì Mama", info: "營業時間：08:00 - 19:00", map: "https://maps.app.goo.gl/NuNL3DujhQnRUyuw6?g_st=ipc",
            },

            { trans: "🚶 步行約 10 分鐘" },

            { tag: "Sight", title: "Di tích Nhà tù Hỏa Lò (火爐監獄)", info: "開放時間：08:00 - 17:00", map: "https://maps.app.goo.gl/qFAvN4zGck4t1eY96?g_st=ipc" },

            { trans: "🚶 步行約 10 分鐘" },

            { tag: "Sight", title: "Nhà thờ Lớn Hà Nội (聖若瑟主教座堂)", info: "開放時間：08:00-11:00, 14:00-20:00", map: "https://maps.app.goo.gl/x3gG4LrL58zqAx298?g_st=ipc" },
 
            { trans: "🚶 步行約 3 分鐘" },

            { 
                tag: "Food", title: "選項一: Bun Cha Dac Kim", info: "營業時間：9:00 - 21:30", map: "https://maps.app.goo.gl/zLRbKW2rKwQmJo1y5",
                menu: ["Bún chả (烤肉米線)", "Nem rán (炸春捲)"]
            },
            { 
                tag: "Food", title: "選項二: Pizza 4P's", info: "營業時間：10:30 - 23:00", map: "https://maps.app.goo.gl/ffL1qjnyJuLjU7RJA?g_st=ipc",
                menu: ["Burrata Cheese Pizza", "Crab Tomato Pasta"]
            },
            { 
                tag: "Food", title: "選項三: Pho 10 Ly Quoc Su", info: "營業時間：6:00 - 22:00", map: "https://maps.app.goo.gl/g7AwhVq3XD6Kyxmj6",
                menu: ["Ban nam gau (除了牛菲力吃不到 其他牛都吃的到)"]
            },
            { 
                tag: "Food", title: "選項四: Tung's Kitchen", info: "營業時間：10:00 - 22:30", map: "https://maps.app.goo.gl/NQHdAQZuZyG61VYh6",
                menu: ["湄公河煎蛋餅"]
            },

            { tag: "Sight", title: "三十六古街", info: "營業時間：07:00 - 21:00", map: "https://maps.app.goo.gl/oAHK4TxgprisW4hG7" },

            { trans: "🚶 步行約 6 分鐘" },

            { tag: "Sight", title: "Chợ Đồng Xuân (同春市場)", info: "營業時間：07:00 - 18:00", map: "https://maps.app.goo.gl/8WS3RCZQ9MPWeWVn9?g_st=ipc" },

            { 
                tag: "Food", title: "甜點: Chè Dung 95", info: "營業時間：8:30 - 23:30", map: "https://maps.app.goo.gl/5NTRFbAWNZWDQ9TU9"
            },

            { trans: "🚶 步行約 10 分鐘" },
            { 
                tag: "Food", title: "雞蛋咖啡始祖: Cà Phê Giảng", info: "營業時間：07:00 - 22:00", map: "https://maps.app.goo.gl/FE5HmPoDRVA6RY7w7?g_st=ipc",
                menu: ["Cà phê trứng (雞蛋咖啡 | Egg Coffee)", "Chè (越式甜湯 | Sweet Soup)"]
            },
            { tag: "Bar", title: "Binh Minh Jazz Club", info: "表演時間：21:00 - 23:00", map: "https://maps.app.goo.gl/deGyysh9jKRC3na98?g_st=ipc" }
        ]
    },
    {
        day: "DAY 05",
        date: "4/7 TUE",
        items: [
            { tag: "Last", title: "最後購買 Bánh Mì", info: "預計 09:00" },
            { trans: "🚗 Grab 車程約 50 分鐘" },
            { tag: "Airport", title: "抵達河內機場", info: "13:05 起飛 (BR398)" }
        ]
    }
];

const BACKUP_LIST = {
    massage: [
        { 
            name: "La Belle Vie Spa", 
            info: "營業時間：09:00 - 22:30", 
            map: "https://maps.app.goo.gl/PzS2LqNPrrKzPzS8", 
            menu: ["Traditional Vietnamese Massage (越式傳統按摩)", "Hot Stone Therapy (熱石療癒)", "Foot Reflexology (足底按摩)"] 
        },
        { 
            name: "Midori Spa", 
            info: "營業時間：09:00 - 23:00", 
            map: "https://maps.app.goo.gl/L6Y9S4T8Z9X2PzS8", 
            menu: ["Deep Tissue Massage (深層組織按摩)", "Aromatherapy (香氛精油)", "Thai Massage (泰式按摩)"] 
        }
    ],
    bars: [
        { 
            name: "The Haflington", 
            info: "營業時間：15:00 - 01:00", 
            map: "https://maps.app.goo.gl/VqS2LqNPrrKzPzS7", 
            menu: [
                "Classic Martini (經典馬丁尼)", 
                "The Fossil (招牌化石調酒)", 
                "Truffle Fries (松露薯條)", 
                "Cheese Platter (精選起司拼盤)"
            ] 
        },
        { 
            name: "The Alchemist", 
            info: "營業時間：18:30 - 01:00", 
            map: "https://maps.app.goo.gl/L6Y9S4T8Z9X2PzS6", 
            menu: [
                "Signature Alchemy Cocktails (煉金術系列調酒)", 
                "Whisky Sour (威士忌酸酒)", 
                "Beef Jerky (特製牛肉乾)", 
                "Mixed Nuts & Olives (綜合堅果與橄欖)"
            ] 
        }
    ]
};