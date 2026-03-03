// 4/3 - 4/7 河內行程：包含住宿點出發路線、營業時間、步行預估
const ITINERARY_DATA = [
    {
        day: "DAY 01",
        date: "4/3 FRI",
        // 路線：住宿點 -> 晚餐
        route: "https://www.google.com/maps/dir/?api=1&origin=21.0315,105.8523&destination=21.0305,105.8533&waypoints=21.0315,105.8523",
        items: [
            { tag: "Flight", title: "14:40 台北起飛 (BR385)", info: "17:50 抵達河內內排機場", map: "" },
            { trans: "🚗 車程約 50 分鐘 (Grab 約 30-40萬 VND)" },
            { tag: "Hotel", title: "20:00 Airbnb Check-in", info: "辦理入住", map: "https://maps.app.goo.gl/uTFU78BKnRNVMJ1S8?g_st=ipc" },
            { trans: "🚶 步行約 5 分鐘" },
            { tag: "Food", title: "20:30 越式晚餐", info: "營業時間：10:00 - 22:00", map: "https://maps.app.goo.gl/wJyH9jtY3DxXNRha8?g_st=ipc" }
        ]
    },
    {
        day: "DAY 02",
        date: "4/4 SAT",
        // 路線：住宿點 -> Banh Mi 25 -> 火爐監獄 -> 大教堂 -> 午餐 -> 換錢 -> 36古街 -> Pizza 4P -> 酒吧
        route: "https://www.google.com/maps/dir/?api=1&origin=21.0315,105.8523&destination=21.0300,105.8500&waypoints=21.0380,105.8480%7C21.0250,105.8460%7C21.0280,105.8520%7C21.0330,105.8500",
        items: [
            { tag: "Food", title: "09:00 Banh Mi 25 法國麵包", info: "營業時間：07:00 - 21:00", map: "https://maps.app.goo.gl/NuNL3DujhQnRUyuw6?g_st=ipc" },
            { trans: "🚶 步行約 12 分鐘" },
            { tag: "Sight", title: "10:30 火爐監獄", info: "營業時間：08:00 - 17:00", map: "https://maps.app.goo.gl/qFAvN4zGck4t1eY96?g_st=ipc" },
            { trans: "🚶 步行約 8 分鐘" },
            { tag: "Sight", title: "11:30 聖若瑟主教座堂", info: "大教堂拍照點", map: "https://maps.app.goo.gl/x3gG4LrL58zqAx298?g_st=ipc" },
            { trans: "🚶 步行約 5 分鐘" },
            { tag: "Michelin", title: "12:30 午餐：米其林必比登河粉/烤豬肉米線", info: "河粉至 22:00 / 米線至 21:00", map: "https://maps.app.goo.gl/xA9S8GGZBQqLTYDv8?g_st=ipc" },
            { trans: "🚶 步行巡禮與換錢" },
            { tag: "Shop", title: "14:30 換錢與小店逛街", info: "建議 17:00 前完成換錢", map: "https://maps.app.goo.gl/NPdeDQ5FfXCzZx457?g_st=ipc" },
            { tag: "History", title: "16:00 36古街 & 同春市場", info: "市場至 18:00 / 雞蛋咖啡至 22:00", map: "https://maps.app.goo.gl/Y1tYv2k2s2k6h3Jk7?g_st=ipc" },
            { trans: "🚶 步行約 10 分鐘" },
            { tag: "Food", title: "18:30 晚餐：Pizza 4P's", info: "營業時間：10:00 - 23:00 (建議預約)", map: "https://maps.app.goo.gl/ffL1qjnyJuLjU7RJA?g_st=ipc" },
            { trans: "🚗 車程約 10 分鐘" },
            { tag: "Jazz", title: "21:00 Binh Minh Jazz Club", info: "表演：21:00 - 23:00", map: "https://maps.app.goo.gl/deGyysh9jKRC3na98?g_st=ipc" },
            { tag: "Bar", title: "23:00 酒吧：The Alchemist", info: "營業時間：18:30 - 01:00", map: "https://maps.app.goo.gl/ZyvYCuaoDcF6EV2X8?g_st=ipc" }
        ]
    },
    {
        day: "DAY 03",
        date: "4/5 SUN",
        items: [
            { tag: "Trip", title: "08:00 下龍灣一日遊出發", info: "預計 21:00 返回飯店", map: "" }
        ]
    },
    {
        day: "DAY 04",
        date: "4/6 MON",
        // 路線：住宿點 -> 昇龍皇城 -> 胡志明陵寢 -> 米其林午餐 -> 火車街 -> 郵局 -> UNIQLO
        route: "https://www.google.com/maps/dir/?api=1&origin=21.0315,105.8523&destination=21.0250,105.8580&waypoints=21.0350,105.8400%7C21.0360,105.8340%7C21.0300,105.8430",
        items: [
            { tag: "Food", title: "09:00 法國麵包早餐", info: "Banh Mi P (營業至 21:00)", map: "https://maps.app.goo.gl/WeP2fsRk5CgLQzYu6?g_st=ipc" },
            { trans: "🚗 車程約 10 分鐘" },
            { tag: "History", title: "10:30 昇龍皇城遺址", info: "營業時間：08:00 - 17:00", map: "https://maps.app.goo.gl/CnaPvw4FvM3cLESH9?g_st=ipc" },
            { trans: "🚶 步行約 10 分鐘" },
            { tag: "History", title: "11:30 胡志明陵寢", info: "週一僅開放外部參觀", map: "https://maps.app.goo.gl/Kv2BVqDGxFGrGGgw7?g_st=ipc" },
            { trans: "🚗 車程約 8 分鐘" },
            { tag: "Michelin", title: "13:30 米其林一星午餐：GIA", info: "需提前預約 (營業至 21:00)", map: "https://maps.app.goo.gl/m7fMkMtN4hhn8epG7?g_st=ipc" },
            { trans: "🚗 車程約 10 分鐘" },
            { tag: "Sight", title: "15:30 河內火車街", info: "熱門景觀點", map: "https://maps.app.goo.gl/uViLWReR5QLe3v2FA?g_st=ipc" },
            { trans: "🚗 車程至湖畔" },
            { tag: "Arch", title: "19:00 郵局 & UNIQLO", info: "郵局至 18:00 / UNIQLO 至 22:00", map: "https://maps.app.goo.gl/3piw2RRiXQmRNL2v8?g_st=ipc" }
        ]
    },
    {
        day: "DAY 05",
        date: "4/7 TUE",
        items: [
            { tag: "Last", title: "09:00 購買最後一份法國麵包", info: "準備前往機場", map: "" },
            { tag: "Flight", title: "13:05 返程起飛 (BR398)", info: "15:55 抵達台北", map: "" }
        ]
    }
];

const BACKUP_LIST = {
    massage: [
        { name: "La Belle Vie Spa", time: "09:00 - 22:30", map: "https://maps.app.goo.gl/enMqdw2oDVZ6pUjB8?g_st=ipc" },
        { name: "Midori Spa", time: "09:00 - 23:00", map: "https://maps.app.goo.gl/uF3UocM5yLqYgbdb7?g_st=ipc" },
        { name: "Serene Spa", time: "09:00 - 23:00", map: "https://maps.app.goo.gl/mjPPHfAA36YX8N6y5?g_st=ipc" }
    ],
    bars: [
        { name: "The Haflington", time: "15:00 - 01:00", map: "https://maps.app.goo.gl/Mfe77Zk7yZ2iXHLq6?g_st=ipc" },
        { name: "Kumquat Tree Snug", time: "19:00 - 02:00", map: "https://maps.app.goo.gl/QgJo4VF7utrHzgPz5?g_st=ipc" },
        { name: "The Alchemist", time: "18:30 - 01:00", map: "https://maps.app.goo.gl/3z2tWkvZiNYjbL7P9?g_st=ipc" }
    ]
};
