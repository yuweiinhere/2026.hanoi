// 4/3 - 4/7 河內精準行程資料：Day 2 早餐先行版 [越南文 | 中文 | 英文]
const ITINERARY_DATA = [
    {
        day: "DAY 01",
        date: "4/3 FRI",
        route: "https://www.google.com/maps/dir/Hanoi+Airbnb/4/3+Dinner+Place",
        items: [
            { tag: "Flight", title: "14:40 台北起飛 (BR385)", info: "17:50 抵達河內機場", map: "" },
            { trans: "🚗 Grab 車程約 50 分鐘 (機場 → Airbnb)" },
            { tag: "Hotel", title: "Airbnb Checking", info: "24 小時開放", map: "https://maps.app.goo.gl/uTFU78BKnRNVMJ1S8?g_st=ipc" },
            { trans: "🚶 步行約 5-8 分鐘" },
            { 
                tag: "Food", title: "Luk Lak Vietnamese Restaurant", info: "07:00 - 23:00", map: "https://maps.app.goo.gl/wJyH9jtY3DxXNRha8?g_st=ipc",
                menu: [
                    "Cá Lăng nướng (炭烤鱸魚 | Grilled Lang Fish)",
                    "Thịt kho tẩu (焦糖燉肉 | Caramelized Pork)",
                    "Bún chả Luk Lak (特色烤肉米線 | Luk Lak Signature Bun Cha)"
                ]
            }
        ]
    },
    {
        day: "DAY 02",
        date: "4/4 SAT",
        route: "https://www.google.com/maps/dir/?api=1&origin=21.0315,105.8523&destination=21.0300,105.8500&waypoints=21.0380,105.8480%7C21.0250,105.8460%7C21.0280,105.8520%7C21.0330,105.8500",
        items: [
            { 
                tag: "Food", title: "Bánh Mì 25 (先吃早餐)", info: "07:00 - 21:00", map: "https://maps.app.goo.gl/NuNL3DujhQnRUyuw6?g_st=ipc",
                menu: [
                    "Bánh mì thập cẩm (綜合口味法包 | Mixed Baguette)",
                    "Bánh mì bò sốt vang (紅酒燉牛肉配麵包 | Beef Stew with Baguette)",
                    "Sinh tố bơ (酪梨奶昔 | Avocado Smoothie)"
                ]
            },
            { trans: "🚗 Grab 車程約 10 分鐘" },
            { tag: "History", title: "Lăng Chủ tịch Hồ Chí Minh (胡志明陵寢)", info: "07:30 - 11:00 (最後入場 10:15)", map: "https://maps.app.goo.gl/Kv2BVqDGxFGrGGgw7?g_st=ipc" },
            { trans: "🚶 步行約 10-15 分鐘" },
            { tag: "History", title: "Hoàng thành Thăng Long (昇龍皇城)", info: "08:00 - 17:00", map: "https://maps.app.goo.gl/CnaPvw4FvM3cLESH9?g_st=ipc" },
            { trans: "🚗 Grab 車程約 8-10 分鐘返回教堂區" },
            { tag: "Sight", title: "Nhà thờ Lớn Hà Nội (聖若瑟主教座堂)", info: "08:00-11:00, 14:00-20:00", map: "https://maps.app.goo.gl/x3gG4LrL58zqAx298?g_st=ipc" },
            { tag: "Sight", title: "Di tích Nhà tù Hỏa Lò (火爐監獄)", info: "08:00 - 17:00", map: "https://maps.app.goo.gl/qFAvN4zGck4t1eY96?g_st=ipc" },
            { 
                tag: "Michelin", title: "Phở Gia Truyền Bát Đàn (牛肉河粉)", info: "06:00-11:30, 18:00-20:30", map: "https://maps.app.goo.gl/xA9S8GGZBQqLTYDv8?g_st=ipc",
                menu: ["Phở tái (生牛肉河粉 | Rare Beef Pho)", "Quẩy (油條 | Deep-fried Dough Stick)"]
            },
            { 
                tag: "Michelin", title: "Bún Chả Đắc Kim (烤豬肉米線)", info: "09:00 - 21:00", map: "https://maps.app.goo.gl/7xR2kkr3ZS2ygM3g7?g_st=ipc",
                menu: ["Bún chả (烤肉米線 | Grilled Pork with Noodles)", "Nem cua bể (蟹肉炸春捲 | Crab Spring Rolls)"]
            },
            { tag: "Shop", title: "逛街小店 (34, 35, 36)", info: "約 10:00 - 20:00", map: "https://maps.app.goo.gl/wk62BSXHWaZa69Tu7?g_st=ipc" },
            { tag: "Money", title: "換錢地點", info: "08:30 - 19:00", map: "https://maps.app.goo.gl/NPdeDQ5FfXCzZx457?g_st=ipc" },
            { tag: "Sight", title: "Phố cổ Hà Nội (36古街) & Chợ Đồng Xuân (同春市場)", info: "市場至 18:00", map: "https://maps.app.goo.gl/8WS3RCZQ9MPWeWVn9?g_st=ipc" },
            { 
                tag: "Food", title: "吃甜點 & Cà Phê Giảng (雞蛋咖啡始祖)", info: "07:00 - 22:00", map: "https://maps.app.goo.gl/FE5HmPoDRVA6RY7w7?g_st=ipc",
                menu: ["Cà phê trứng (雞蛋咖啡 | Egg Coffee)", "Chè (越式什錦甜湯 | Vietnamese Sweet Soup)"]
            },
            { 
                tag: "Food", title: "Pizza 4P's", info: "10:00 - 23:00", map: "https://maps.app.goo.gl/ffL1qjnyJuLjU7RJA?g_st=ipc",
                menu: ["Burrata Pizza (布拉塔起司披薩)", "Crab Pasta (螃蟹番茄奶油麵)"]
            },
            { 
                tag: "Bar", title: "Binh Minh Jazz Club", info: "表演 21:00 - 23:00", map: "https://maps.app.goo.gl/deGyysh9jKRC3na98?g_st=ipc",
                menu: ["Classic Cocktails (經典調酒)"]
            }
        ]
    },
    {
        day: "DAY 03",
        date: "4/5 SUN",
        items: [
            { tag: "Trip", title: "下龍灣一日遊", info: "08:00 - 21:00", map: "" }
        ]
    },
    {
        day: "DAY 04",
        date: "4/6 MON",
        route: "https://www.google.com/maps/dir/?api=1&origin=21.0315,105.8523&destination=21.0250,105.8580&waypoints=21.0350,105.8400%7C21.0360,105.8340%7C21.0300,105.8430",
        items: [
            { 
                tag: "Food", title: "Bánh Mì P", info: "07:00 - 21:00", map: "https://maps.app.goo.gl/WeP2fsRk5CgLQzYu6?g_st=ipc",
                menu: ["Bánh mì nướng (烤法包 | Toasted Banh Mi)"]
            },
            { trans: "🚗 Grab 車程約 10 分鐘" },
            { tag: "Sight", title: "Phố Đi Bộ Đường Tàu (火車街)", info: "建議下午拍照光線佳", map: "https://maps.app.goo.gl/uViLWReR5QLe3v2FA?g_st=ipc" },
            { 
                tag: "Michelin", title: "GIA (米其林一星)", info: "11:30–14:00, 18:00–21:00", map: "https://maps.app.goo.gl/m7fMkMtN4hhn8epG7?g_st=ipc",
                menu: ["Tasting Menu (主廚推薦套餐)"]
            },
            { tag: "Sight", title: "到處逛逛 (西湖/還劍湖)", info: "全日開放", map: "" },
            { 
                tag: "Food", title: "Tung's Kitchen", info: "10:00 - 22:30", map: "https://maps.app.goo.gl/Zft4UbLsHDj2AYwM6?g_st=ipc",
                menu: ["Bún chả (烤肉米線 | Bun Cha)", "Nem rán (炸春捲 | Fried Spring Rolls)"]
            },
            { tag: "Arch", title: "Bưu điện Hà Nội (河內郵局) & UNIQLO", info: "UNIQLO 至 22:00", map: "https://maps.app.goo.gl/3piw2RRiXQmRNL2v8?g_st=ipc" }
        ]
    },
    {
        day: "DAY 05",
        date: "4/7 TUE",
        items: [
            { tag: "Last", title: "最後買一波法國麵包", info: "09:00 購餐", map: "" },
            { tag: "Airport", title: "出發前往機場", info: "10:00 出門", map: "" },
            { tag: "Flight", title: "13:05 返程 (BR398)", info: "15:55 抵達台北", map: "" }
        ]
    }
];

const BACKUP_LIST = {
    massage: [
        { name: "La Belle Vie Spa", info: "09:00 - 22:30", map: "https://maps.app.goo.gl/enMqdw2oDVZ6pUjB8?g_st=ipc", menu: ["Massage Đá Nóng (熱石按摩 | Hot Stone)"] },
        { name: "Midori Spa", info: "09:00 - 23:00", map: "https://maps.app.goo.gl/uF3UocM5yLqYgbdb7?g_st=ipc", menu: ["Massage Mô Sâu (深層按摩 | Deep Tissue)"] }
    ],
    bars: [
        { name: "The Haflington", info: "15:00 - 01:00", map: "https://maps.app.goo.gl/Mfe77Zk7yZ2iXHLq6?g_st=ipc", menu: ["Gin & Tonic (琴通寧)"] },
        { name: "The Alchemist", info: "18:30 - 01:00", map: "https://maps.app.goo.gl/ZyvYCuaoDcF6EV2X8?g_st=ipc", menu: ["Earl Grey Sour (伯爵茶酸調酒)"] }
    ]
};