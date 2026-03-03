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
            { 
                tag: "Food", title: "Bánh Mì 25 (早餐)", info: "營業時間：07:00 - 21:00", map: "https://maps.app.goo.gl/NuNL3DujhQnRUyuw6?g_st=ipc",
                menu: ["Bánh mì thập cẩm (綜合口味法包)", "Bánh mì bò sốt vang (紅酒燉牛肉)"]
            },
            { trans: "🚗 Grab 車程約 12 分鐘" },
            { tag: "History", title: "Lăng Chủ tịch Hồ Chí Minh (胡志明陵寢)", info: "開放時間：07:30 - 11:00", map: "https://maps.app.goo.gl/Kv2BVqDGxFGrGGgw7?g_st=ipc" },
            { trans: "🚶 步行約 15 分鐘" },
            { tag: "History", title: "Hoàng thành Thăng Long (昇龍皇城)", info: "開放時間：08:00 - 17:00", map: "https://maps.app.goo.gl/CnaPvw4FvM3cLESH9?g_st=ipc" },
            { trans: "🚗 Grab 車程約 10 分鐘" },
            { tag: "Sight", title: "Nhà thờ Lớn Hà Nội (聖若瑟主教座堂)", info: "開放時間：08:00-11:00, 14:00-20:00", map: "https://maps.app.goo.gl/x3gG4LrL58zqAx298?g_st=ipc" },
            { trans: "🚶 步行約 10 分鐘" },
            { tag: "Sight", title: "Di tích Nhà tù Hỏa Lò (火爐監獄)", info: "開放時間：08:00 - 17:00", map: "https://maps.app.goo.gl/qFAvN4zGck4t1eY96?g_st=ipc" },
            { trans: "🚶 步行約 6 分鐘" },
            { 
                tag: "Michelin", isOption: "選項一", title: "Phở Gia Truyền Bát Đàn (牛肉河粉)", info: "營業時間：06:00-11:30, 18:00-20:30", map: "https://maps.app.goo.gl/xA9S8GGZBQqLTYDv8?g_st=ipc",
                menu: ["Phở tái (生牛肉河粉 | Rare Beef Pho)", "Quẩy (油條 | Fried Dough)"]
            },
            { 
                tag: "Michelin", isOption: "選項二", title: "Bún Chả Đắc Kim (烤豬肉米線)", info: "營業時間：09:00 - 21:00", map: "https://maps.app.goo.gl/7xR2kkr3ZS2ygM3g7?g_st=ipc",
                menu: ["Bún chả (烤肉米線 | Grilled Pork)", "Nem cua bể (蟹肉炸春捲)"]
            },
            { trans: "🚶 步行約 8 分鐘" },
            { tag: "Shop", title: "文創小店 Líu Lô Arts Hàng Da", info: "營業時間：10:00 - 20:00", map: "https://maps.app.goo.gl/wk62BSXHWaZa69Tu7?g_st=ipc" },
            { trans: "🚶 步行約 5 分鐘" },
            { tag: "Money", title: "換錢地點 (金店)", info: "營業時間：08:30 - 19:00", map: "https://maps.app.goo.gl/NPdeDQ5FfXCzZx457?g_st=ipc" },
            { trans: "🚶 步行約 10 分鐘" },
            { tag: "Sight", title: "Chợ Đồng Xuân (同春市場)", info: "營業時間：07:00 - 18:00", map: "https://maps.app.goo.gl/8WS3RCZQ9MPWeWVn9?g_st=ipc" },
            { trans: "🚶 步行約 10 分鐘" },
            { 
                tag: "Food", title: "吃甜點 & Cà Phê Giảng (雞蛋咖啡始祖)", info: "營業時間：07:00 - 22:00", map: "https://maps.app.goo.gl/FE5HmPoDRVA6RY7w7?g_st=ipc",
                menu: ["Cà phê trứng (雞蛋咖啡 | Egg Coffee)", "Chè (越式甜湯 | Sweet Soup)"]
            },
            { trans: "🚶 步行約 12 分鐘" },
            { 
                tag: "Food", title: "Pizza 4P's", info: "營業時間：10:00 - 23:00", map: "https://maps.app.goo.gl/ffL1qjnyJuLjU7RJA?g_st=ipc",
                menu: ["Burrata Cheese Pizza", "Crab Tomato Pasta"]
            },
            { trans: "🚗 Grab 車程約 8 分鐘" },
            { tag: "Bar", title: "Binh Minh Jazz Club", info: "表演時間：21:00 - 23:00", map: "https://maps.app.goo.gl/deGyysh9jKRC3na98?g_st=ipc" }
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
            { tag: "Food", title: "Bánh Mì P (早午餐)", info: "營業時間：07:00 - 21:00", map: "https://maps.app.goo.gl/WeP2fsRk5CgLQzYu6?g_st=ipc" },
            { trans: "🚗 Grab 車程約 10 分鐘" },
            { tag: "Sight", title: "Phố Đi Bộ Đường Tàu (火車街)", info: "建議拍照時間：15:00", map: "https://maps.app.goo.gl/uViLWReR5QLe3v2FA?g_st=ipc" },
            { trans: "🚗 Grab 車程約 8 分鐘" },
            { tag: "Michelin", title: "GIA (米其林一星)", info: "營業時間：11:30–14:00, 18:00–21:00", map: "https://maps.app.goo.gl/m7fMkMtN4hhn8epG7?g_st=ipc" },
            { trans: "🚗 Grab 車程約 15 分鐘" },
            { tag: "Sight", title: "西湖 / 還劍湖 散步", info: "全日開放" },
            { trans: "🚗 Grab 車程約 12 分鐘" },
            { 
                tag: "Food", title: "Tung's Kitchen (晚餐)", info: "營業時間：10:00 - 22:30", map: "https://maps.app.goo.gl/Zft4UbLsHDj2AYwM6?g_st=ipc",
                menu: ["Bún chả (烤肉米線)", "Nem rán (炸春捲)"]
            },
            { trans: "🚶 步行約 10 分鐘" },
            { tag: "Arch", title: "河內郵局 & UNIQLO", info: "營業時間至 22:00", map: "https://maps.app.goo.gl/3piw2RRiXQmRNL2v8?g_st=ipc" }
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