// ========================================
// FitTrack India - Food & Exercise Database
// ========================================

const INDIAN_FOODS = [
    // BREAKFAST
    { id: "F001", name: "Idly", category: "Breakfast", serving: 1, unit: "piece", cal: 58, protein: 1.7, carbs: 11.2, fat: 0.6, fiber: 0.8, veg: true },
    { id: "F002", name: "Plain Dosa", category: "Breakfast", serving: 1, unit: "piece", cal: 120, protein: 2.6, carbs: 18, fat: 4.5, fiber: 0.9, veg: true },
    { id: "F003", name: "Masala Dosa", category: "Breakfast", serving: 1, unit: "piece", cal: 206, protein: 4.2, carbs: 26, fat: 9.5, fiber: 2.1, veg: true },
    { id: "F004", name: "Vada (Medu)", category: "Breakfast", serving: 1, unit: "piece", cal: 97, protein: 3.2, carbs: 10, fat: 5.2, fiber: 0.6, veg: true },
    { id: "F005", name: "Upma", category: "Breakfast", serving: 1, unit: "cup", cal: 165, protein: 4.5, carbs: 28, fat: 4.2, fiber: 1.8, veg: true },
    { id: "F006", name: "Poha", category: "Breakfast", serving: 1, unit: "cup", cal: 158, protein: 3.8, carbs: 32, fat: 2.5, fiber: 1.2, veg: true },
    { id: "F007", name: "Pongal", category: "Breakfast", serving: 1, unit: "cup", cal: 215, protein: 5.2, carbs: 35, fat: 6.5, fiber: 1.5, veg: true },
    { id: "F008", name: "Uttapam", category: "Breakfast", serving: 1, unit: "piece", cal: 180, protein: 4.8, carbs: 28, fat: 5.5, fiber: 1.8, veg: true },
    { id: "F009", name: "Appam", category: "Breakfast", serving: 1, unit: "piece", cal: 85, protein: 1.8, carbs: 16, fat: 1.5, fiber: 0.5, veg: true },
    { id: "F010", name: "Puttu", category: "Breakfast", serving: 1, unit: "cylinder", cal: 145, protein: 3.2, carbs: 28, fat: 2.8, fiber: 2.5, veg: true },
    { id: "F011", name: "Paratha (Plain)", category: "Breakfast", serving: 1, unit: "piece", cal: 150, protein: 3.5, carbs: 22, fat: 5.5, fiber: 1.5, veg: true },
    { id: "F012", name: "Aloo Paratha", category: "Breakfast", serving: 1, unit: "piece", cal: 210, protein: 4.5, carbs: 28, fat: 9.5, fiber: 2.2, veg: true },
    { id: "F013", name: "Gobi Paratha", category: "Breakfast", serving: 1, unit: "piece", cal: 185, protein: 4.2, carbs: 26, fat: 7.5, fiber: 2.5, veg: true },
    { id: "F014", name: "Paneer Paratha", category: "Breakfast", serving: 1, unit: "piece", cal: 250, protein: 8.5, carbs: 25, fat: 13, fiber: 1.8, veg: true },
    { id: "F015", name: "Chole Bhature", category: "Breakfast", serving: 1, unit: "plate", cal: 450, protein: 14, carbs: 55, fat: 20, fiber: 8, veg: true },

    // MAIN COURSE - RICE
    { id: "F016", name: "White Rice", category: "Main", serving: 1, unit: "cup", cal: 206, protein: 4.3, carbs: 45, fat: 0.4, fiber: 0.6, veg: true },
    { id: "F017", name: "Brown Rice", category: "Main", serving: 1, unit: "cup", cal: 216, protein: 5, carbs: 44, fat: 1.8, fiber: 3.5, veg: true },
    { id: "F018", name: "Jeera Rice", category: "Main", serving: 1, unit: "cup", cal: 235, protein: 4.8, carbs: 46, fat: 3.5, fiber: 1.2, veg: true },
    { id: "F019", name: "Veg Biryani", category: "Main", serving: 1, unit: "cup", cal: 285, protein: 6.5, carbs: 48, fat: 8.5, fiber: 2.8, veg: true },
    { id: "F020", name: "Chicken Biryani", category: "Main", serving: 1, unit: "cup", cal: 320, protein: 15.5, carbs: 42, fat: 11.5, fiber: 1.5, veg: false },
    { id: "F021", name: "Mutton Biryani", category: "Main", serving: 1, unit: "cup", cal: 365, protein: 18.5, carbs: 42, fat: 14.5, fiber: 1.5, veg: false },
    { id: "F022", name: "Lemon Rice", category: "Main", serving: 1, unit: "cup", cal: 225, protein: 4.5, carbs: 44, fat: 4.2, fiber: 1.2, veg: true },
    { id: "F023", name: "Curd Rice", category: "Main", serving: 1, unit: "cup", cal: 198, protein: 6.5, carbs: 35, fat: 4.5, fiber: 0.8, veg: true },
    { id: "F024", name: "Tamarind Rice", category: "Main", serving: 1, unit: "cup", cal: 245, protein: 4.5, carbs: 48, fat: 5.2, fiber: 1.5, veg: true },
    { id: "F025", name: "Coconut Rice", category: "Main", serving: 1, unit: "cup", cal: 268, protein: 4.8, carbs: 44, fat: 8.5, fiber: 2.2, veg: true },

    // MAIN COURSE - ROTIS
    { id: "F026", name: "Chapati", category: "Main", serving: 1, unit: "piece", cal: 71, protein: 2.5, carbs: 14, fat: 0.9, fiber: 1.2, veg: true },
    { id: "F027", name: "Roti", category: "Main", serving: 1, unit: "piece", cal: 62, protein: 2.2, carbs: 12, fat: 0.8, fiber: 1.1, veg: true },
    { id: "F028", name: "Naan", category: "Main", serving: 1, unit: "piece", cal: 262, protein: 8.5, carbs: 45, fat: 5.5, fiber: 1.8, veg: true },
    { id: "F029", name: "Butter Naan", category: "Main", serving: 1, unit: "piece", cal: 310, protein: 8.8, carbs: 46, fat: 10.5, fiber: 1.8, veg: true },
    { id: "F030", name: "Garlic Naan", category: "Main", serving: 1, unit: "piece", cal: 295, protein: 8.5, carbs: 47, fat: 8.5, fiber: 2, veg: true },
    { id: "F031", name: "Puri", category: "Main", serving: 1, unit: "piece", cal: 75, protein: 1.5, carbs: 9, fat: 3.5, fiber: 0.5, veg: true },
    { id: "F032", name: "Bhatura", category: "Main", serving: 1, unit: "piece", cal: 180, protein: 4.2, carbs: 25, fat: 7.5, fiber: 0.8, veg: true },
    { id: "F033", name: "Kulcha", category: "Main", serving: 1, unit: "piece", cal: 195, protein: 5.5, carbs: 32, fat: 5, fiber: 1.2, veg: true },

    // CURRIES - VEG
    { id: "F034", name: "Sambar", category: "Curry", serving: 1, unit: "cup", cal: 120, protein: 5.5, carbs: 18, fat: 3.5, fiber: 4.2, veg: true },
    { id: "F035", name: "Rasam", category: "Curry", serving: 1, unit: "cup", cal: 45, protein: 1.5, carbs: 8, fat: 1.2, fiber: 1.5, veg: true },
    { id: "F036", name: "Dal Tadka", category: "Curry", serving: 1, unit: "cup", cal: 165, protein: 8.5, carbs: 22, fat: 5.5, fiber: 5, veg: true },
    { id: "F037", name: "Dal Makhani", category: "Curry", serving: 1, unit: "cup", cal: 285, protein: 10.5, carbs: 28, fat: 15.5, fiber: 6.5, veg: true },
    { id: "F038", name: "Rajma", category: "Curry", serving: 1, unit: "cup", cal: 210, protein: 12.5, carbs: 32, fat: 4.5, fiber: 8.5, veg: true },
    { id: "F039", name: "Chole", category: "Curry", serving: 1, unit: "cup", cal: 225, protein: 11.5, carbs: 34, fat: 5.5, fiber: 9, veg: true },
    { id: "F040", name: "Paneer Butter Masala", category: "Curry", serving: 1, unit: "cup", cal: 385, protein: 14.5, carbs: 18, fat: 28.5, fiber: 2.5, veg: true },
    { id: "F041", name: "Palak Paneer", category: "Curry", serving: 1, unit: "cup", cal: 295, protein: 15.5, carbs: 12, fat: 22.5, fiber: 4.5, veg: true },
    { id: "F042", name: "Shahi Paneer", category: "Curry", serving: 1, unit: "cup", cal: 365, protein: 14.5, carbs: 16, fat: 28.5, fiber: 2.2, veg: true },
    { id: "F043", name: "Kadai Paneer", category: "Curry", serving: 1, unit: "cup", cal: 320, protein: 15, carbs: 14, fat: 24.5, fiber: 3, veg: true },
    { id: "F044", name: "Matar Paneer", category: "Curry", serving: 1, unit: "cup", cal: 285, protein: 13.5, carbs: 16, fat: 20.5, fiber: 4.5, veg: true },
    { id: "F045", name: "Aloo Gobi", category: "Curry", serving: 1, unit: "cup", cal: 145, protein: 3.5, carbs: 18, fat: 7.5, fiber: 3.8, veg: true },
    { id: "F046", name: "Baingan Bharta", category: "Curry", serving: 1, unit: "cup", cal: 125, protein: 2.5, carbs: 12, fat: 8.5, fiber: 4.5, veg: true },
    { id: "F047", name: "Bhindi Masala", category: "Curry", serving: 1, unit: "cup", cal: 135, protein: 3, carbs: 14, fat: 8, fiber: 4.2, veg: true },
    { id: "F048", name: "Mixed Veg Curry", category: "Curry", serving: 1, unit: "cup", cal: 155, protein: 4.5, carbs: 16, fat: 8.5, fiber: 4.8, veg: true },
    { id: "F049", name: "Aloo Matar", category: "Curry", serving: 1, unit: "cup", cal: 165, protein: 5, carbs: 22, fat: 6.5, fiber: 4, veg: true },
    { id: "F050", name: "Malai Kofta", category: "Curry", serving: 1, unit: "cup", cal: 380, protein: 10, carbs: 25, fat: 28, fiber: 3, veg: true },

    // CURRIES - NON-VEG
    { id: "F051", name: "Butter Chicken", category: "Curry", serving: 1, unit: "cup", cal: 385, protein: 28.5, carbs: 12, fat: 26.5, fiber: 1.8, veg: false },
    { id: "F052", name: "Chicken Curry", category: "Curry", serving: 1, unit: "cup", cal: 285, protein: 25.5, carbs: 8, fat: 18.5, fiber: 1.5, veg: false },
    { id: "F053", name: "Kadai Chicken", category: "Curry", serving: 1, unit: "cup", cal: 310, protein: 26, carbs: 10, fat: 20, fiber: 2, veg: false },
    { id: "F054", name: "Chicken Tikka Masala", category: "Curry", serving: 1, unit: "cup", cal: 340, protein: 28, carbs: 14, fat: 20, fiber: 2.5, veg: false },
    { id: "F055", name: "Mutton Curry", category: "Curry", serving: 1, unit: "cup", cal: 350, protein: 28, carbs: 8, fat: 24, fiber: 1.5, veg: false },
    { id: "F056", name: "Rogan Josh", category: "Curry", serving: 1, unit: "cup", cal: 380, protein: 30, carbs: 10, fat: 26, fiber: 2, veg: false },
    { id: "F057", name: "Fish Curry", category: "Curry", serving: 1, unit: "cup", cal: 245, protein: 22, carbs: 8, fat: 14, fiber: 1.5, veg: false },
    { id: "F058", name: "Egg Curry", category: "Curry", serving: 1, unit: "cup", cal: 220, protein: 14, carbs: 10, fat: 15, fiber: 2, veg: false },
    { id: "F059", name: "Prawn Curry", category: "Curry", serving: 1, unit: "cup", cal: 235, protein: 24, carbs: 8, fat: 12, fiber: 1.5, veg: false },

    // STARTERS
    { id: "F060", name: "Chicken 65", category: "Starter", serving: 100, unit: "g", cal: 245, protein: 22.5, carbs: 12, fat: 12.5, fiber: 0.8, veg: false },
    { id: "F061", name: "Chicken Tikka", category: "Starter", serving: 100, unit: "g", cal: 195, protein: 28.5, carbs: 4, fat: 8.5, fiber: 0.5, veg: false },
    { id: "F062", name: "Tandoori Chicken", category: "Starter", serving: 1, unit: "piece", cal: 165, protein: 24.5, carbs: 2, fat: 7.5, fiber: 0.3, veg: false },
    { id: "F063", name: "Paneer Tikka", category: "Starter", serving: 100, unit: "g", cal: 265, protein: 16, carbs: 8, fat: 20, fiber: 1, veg: true },
    { id: "F064", name: "Seekh Kebab", category: "Starter", serving: 1, unit: "piece", cal: 85, protein: 8, carbs: 2, fat: 5, fiber: 0.3, veg: false },
    { id: "F065", name: "Samosa", category: "Starter", serving: 1, unit: "piece", cal: 150, protein: 3, carbs: 18, fat: 8, fiber: 1.5, veg: true },
    { id: "F066", name: "Pakora", category: "Starter", serving: 100, unit: "g", cal: 220, protein: 5, carbs: 22, fat: 13, fiber: 2, veg: true },
    { id: "F067", name: "Onion Bhaji", category: "Starter", serving: 1, unit: "piece", cal: 65, protein: 1.5, carbs: 7, fat: 4, fiber: 0.8, veg: true },
    { id: "F068", name: "Aloo Tikki", category: "Starter", serving: 1, unit: "piece", cal: 120, protein: 2.5, carbs: 18, fat: 5, fiber: 1.5, veg: true },
    { id: "F069", name: "Hara Bhara Kebab", category: "Starter", serving: 1, unit: "piece", cal: 75, protein: 3, carbs: 10, fat: 3, fiber: 1.5, veg: true },
    { id: "F070", name: "Dahi Kebab", category: "Starter", serving: 1, unit: "piece", cal: 85, protein: 4, carbs: 8, fat: 4.5, fiber: 0.5, veg: true },

    // SNACKS
    { id: "F071", name: "Pav Bhaji", category: "Snack", serving: 1, unit: "plate", cal: 380, protein: 10, carbs: 52, fat: 16, fiber: 6, veg: true },
    { id: "F072", name: "Vada Pav", category: "Snack", serving: 1, unit: "piece", cal: 290, protein: 6.5, carbs: 38, fat: 13, fiber: 2.5, veg: true },
    { id: "F073", name: "Misal Pav", category: "Snack", serving: 1, unit: "plate", cal: 420, protein: 15, carbs: 55, fat: 18, fiber: 8, veg: true },
    { id: "F074", name: "Bhel Puri", category: "Snack", serving: 1, unit: "plate", cal: 180, protein: 4, carbs: 32, fat: 5, fiber: 3, veg: true },
    { id: "F075", name: "Sev Puri", category: "Snack", serving: 1, unit: "plate", cal: 220, protein: 4.5, carbs: 28, fat: 10, fiber: 2.5, veg: true },
    { id: "F076", name: "Pani Puri", category: "Snack", serving: 6, unit: "pieces", cal: 180, protein: 4, carbs: 30, fat: 5, fiber: 2, veg: true },
    { id: "F077", name: "Dahi Puri", category: "Snack", serving: 1, unit: "plate", cal: 250, protein: 6, carbs: 35, fat: 10, fiber: 2.5, veg: true },
    { id: "F078", name: "Kachori", category: "Snack", serving: 1, unit: "piece", cal: 185, protein: 4, carbs: 22, fat: 10, fiber: 2, veg: true },
    { id: "F079", name: "Dabeli", category: "Snack", serving: 1, unit: "piece", cal: 250, protein: 5, carbs: 35, fat: 10, fiber: 3, veg: true },
    { id: "F080", name: "Dhokla", category: "Snack", serving: 100, unit: "g", cal: 160, protein: 6, carbs: 25, fat: 4.5, fiber: 1.5, veg: true },

    // SOUTH INDIAN
    { id: "F081", name: "Pesarattu", category: "Breakfast", serving: 1, unit: "piece", cal: 145, protein: 6, carbs: 22, fat: 4, fiber: 3, veg: true },
    { id: "F082", name: "Bisi Bele Bath", category: "Main", serving: 1, unit: "cup", cal: 265, protein: 8, carbs: 42, fat: 7.5, fiber: 4, veg: true },
    { id: "F083", name: "Chettinad Chicken", category: "Curry", serving: 1, unit: "cup", cal: 320, protein: 26, carbs: 10, fat: 21, fiber: 2, veg: false },
    { id: "F084", name: "Aviyal", category: "Curry", serving: 1, unit: "cup", cal: 145, protein: 3.5, carbs: 12, fat: 10, fiber: 4, veg: true },
    { id: "F085", name: "Kootu", category: "Curry", serving: 1, unit: "cup", cal: 135, protein: 6, carbs: 16, fat: 5.5, fiber: 5, veg: true },

    // DESSERTS
    { id: "F086", name: "Gulab Jamun", category: "Dessert", serving: 1, unit: "piece", cal: 150, protein: 2.5, carbs: 24, fat: 6, fiber: 0.2, veg: true },
    { id: "F087", name: "Rasgulla", category: "Dessert", serving: 1, unit: "piece", cal: 110, protein: 2.5, carbs: 22, fat: 2, fiber: 0, veg: true },
    { id: "F088", name: "Jalebi", category: "Dessert", serving: 1, unit: "piece", cal: 150, protein: 1.5, carbs: 28, fat: 5, fiber: 0.2, veg: true },
    { id: "F089", name: "Kheer", category: "Dessert", serving: 1, unit: "cup", cal: 220, protein: 6, carbs: 38, fat: 6, fiber: 0.5, veg: true },
    { id: "F090", name: "Halwa", category: "Dessert", serving: 100, unit: "g", cal: 285, protein: 4, carbs: 45, fat: 12, fiber: 1, veg: true },
    { id: "F091", name: "Laddu", category: "Dessert", serving: 1, unit: "piece", cal: 180, protein: 3, carbs: 28, fat: 8, fiber: 1, veg: true },
    { id: "F092", name: "Barfi", category: "Dessert", serving: 1, unit: "piece", cal: 130, protein: 3, carbs: 18, fat: 6, fiber: 0.3, veg: true },
    { id: "F093", name: "Payasam", category: "Dessert", serving: 1, unit: "cup", cal: 250, protein: 5.5, carbs: 42, fat: 8, fiber: 1, veg: true },
    { id: "F094", name: "Mysore Pak", category: "Dessert", serving: 1, unit: "piece", cal: 200, protein: 3, carbs: 22, fat: 12, fiber: 0.5, veg: true },
    { id: "F095", name: "Rasmalai", category: "Dessert", serving: 1, unit: "piece", cal: 175, protein: 4, carbs: 25, fat: 7, fiber: 0, veg: true },

    // BEVERAGES
    { id: "F096", name: "Masala Chai", category: "Beverage", serving: 1, unit: "cup", cal: 85, protein: 2.5, carbs: 12, fat: 3, fiber: 0, veg: true },
    { id: "F097", name: "Filter Coffee", category: "Beverage", serving: 1, unit: "cup", cal: 95, protein: 2.5, carbs: 10, fat: 4.5, fiber: 0, veg: true },
    { id: "F098", name: "Lassi (Sweet)", category: "Beverage", serving: 1, unit: "glass", cal: 180, protein: 6, carbs: 28, fat: 5.5, fiber: 0, veg: true },
    { id: "F099", name: "Lassi (Salted)", category: "Beverage", serving: 1, unit: "glass", cal: 95, protein: 5, carbs: 8, fat: 5, fiber: 0, veg: true },
    { id: "F100", name: "Mango Lassi", category: "Beverage", serving: 1, unit: "glass", cal: 220, protein: 6, carbs: 38, fat: 5.5, fiber: 1, veg: true },
    { id: "F101", name: "Buttermilk", category: "Beverage", serving: 1, unit: "glass", cal: 45, protein: 3, carbs: 5, fat: 1.5, fiber: 0, veg: true },
    { id: "F102", name: "Nimbu Pani", category: "Beverage", serving: 1, unit: "glass", cal: 45, protein: 0.2, carbs: 12, fat: 0, fiber: 0, veg: true },
    { id: "F103", name: "Aam Panna", category: "Beverage", serving: 1, unit: "glass", cal: 85, protein: 0.5, carbs: 20, fat: 0.2, fiber: 0.5, veg: true },
    { id: "F104", name: "Jaljeera", category: "Beverage", serving: 1, unit: "glass", cal: 35, protein: 0.5, carbs: 8, fat: 0.2, fiber: 0.3, veg: true },
    { id: "F105", name: "Sugarcane Juice", category: "Beverage", serving: 1, unit: "glass", cal: 120, protein: 0.5, carbs: 30, fat: 0, fiber: 0, veg: true },

    // BREADS
    { id: "F106", name: "White Bread", category: "Breakfast", serving: 1, unit: "slice", cal: 79, protein: 2.7, carbs: 15, fat: 1, fiber: 0.6, veg: true },
    { id: "F107", name: "Brown Bread", category: "Breakfast", serving: 1, unit: "slice", cal: 73, protein: 3.5, carbs: 12, fat: 1.1, fiber: 1.9, veg: true },
    { id: "F108", name: "Multigrain Bread", category: "Breakfast", serving: 1, unit: "slice", cal: 75, protein: 4, carbs: 12, fat: 1.5, fiber: 2, veg: true },
    { id: "F109", name: "Bread Toast", category: "Breakfast", serving: 1, unit: "slice", cal: 85, protein: 2.8, carbs: 15, fat: 1.5, fiber: 0.6, veg: true },
    { id: "F110", name: "Bread with Butter", category: "Breakfast", serving: 1, unit: "slice", cal: 150, protein: 2.8, carbs: 15, fat: 8, fiber: 0.6, veg: true },
    { id: "F111", name: "Bread with Jam", category: "Breakfast", serving: 1, unit: "slice", cal: 130, protein: 2.5, carbs: 26, fat: 1, fiber: 0.6, veg: true },
    { id: "F112", name: "Bread Omelette", category: "Breakfast", serving: 1, unit: "plate", cal: 280, protein: 14, carbs: 22, fat: 16, fiber: 1, veg: false },
    { id: "F113", name: "Sandwich (Veg)", category: "Snack", serving: 1, unit: "piece", cal: 250, protein: 8, carbs: 32, fat: 10, fiber: 3, veg: true },
    { id: "F114", name: "Grilled Sandwich", category: "Snack", serving: 1, unit: "piece", cal: 320, protein: 12, carbs: 35, fat: 15, fiber: 2.5, veg: true },
    { id: "F115", name: "Cheese Sandwich", category: "Snack", serving: 1, unit: "piece", cal: 350, protein: 14, carbs: 32, fat: 18, fiber: 2, veg: true },

    // DAIRY PRODUCTS
    { id: "F116", name: "Butter", category: "Dairy", serving: 1, unit: "tbsp", cal: 102, protein: 0.1, carbs: 0, fat: 11.5, fiber: 0, veg: true },
    { id: "F117", name: "Ghee", category: "Dairy", serving: 1, unit: "tbsp", cal: 112, protein: 0, carbs: 0, fat: 12.7, fiber: 0, veg: true },
    { id: "F118", name: "Cheese (Processed)", category: "Dairy", serving: 1, unit: "slice", cal: 70, protein: 4, carbs: 1.5, fat: 5.5, fiber: 0, veg: true },
    { id: "F119", name: "Cheese (Cheddar)", category: "Dairy", serving: 30, unit: "g", cal: 120, protein: 7, carbs: 0.4, fat: 10, fiber: 0, veg: true },
    { id: "F120", name: "Paneer", category: "Dairy", serving: 100, unit: "g", cal: 265, protein: 18, carbs: 3, fat: 21, fiber: 0, veg: true },
    { id: "F121", name: "Milk (Full Cream)", category: "Dairy", serving: 1, unit: "glass", cal: 150, protein: 8, carbs: 12, fat: 8, fiber: 0, veg: true },
    { id: "F122", name: "Milk (Toned)", category: "Dairy", serving: 1, unit: "glass", cal: 120, protein: 7, carbs: 12, fat: 5, fiber: 0, veg: true },
    { id: "F123", name: "Milk (Skimmed)", category: "Dairy", serving: 1, unit: "glass", cal: 80, protein: 8, carbs: 12, fat: 0.5, fiber: 0, veg: true },
    { id: "F124", name: "Curd/Yogurt", category: "Dairy", serving: 1, unit: "cup", cal: 100, protein: 6, carbs: 8, fat: 5, fiber: 0, veg: true },
    { id: "F125", name: "Greek Yogurt", category: "Dairy", serving: 1, unit: "cup", cal: 130, protein: 15, carbs: 8, fat: 4, fiber: 0, veg: true },
    { id: "F126", name: "Cream", category: "Dairy", serving: 1, unit: "tbsp", cal: 52, protein: 0.4, carbs: 0.5, fat: 5.5, fiber: 0, veg: true },
    { id: "F127", name: "Cottage Cheese", category: "Dairy", serving: 100, unit: "g", cal: 98, protein: 11, carbs: 3, fat: 4, fiber: 0, veg: true },

    // PORRIDGES & KANJI
    { id: "F128", name: "Ragi Kanji", category: "Breakfast", serving: 1, unit: "cup", cal: 85, protein: 2.5, carbs: 18, fat: 0.5, fiber: 3, veg: true },
    { id: "F129", name: "Ragi Malt", category: "Beverage", serving: 1, unit: "glass", cal: 120, protein: 3, carbs: 24, fat: 1, fiber: 3.5, veg: true },
    { id: "F130", name: "Keerai Kanji", category: "Breakfast", serving: 1, unit: "cup", cal: 75, protein: 3, carbs: 14, fat: 0.8, fiber: 2.5, veg: true },
    { id: "F131", name: "Rice Kanji", category: "Breakfast", serving: 1, unit: "cup", cal: 90, protein: 2, carbs: 20, fat: 0.3, fiber: 0.5, veg: true },
    { id: "F132", name: "Kambu Kanji", category: "Breakfast", serving: 1, unit: "cup", cal: 95, protein: 3, carbs: 20, fat: 1, fiber: 2.5, veg: true },
    { id: "F133", name: "Oats Porridge", category: "Breakfast", serving: 1, unit: "cup", cal: 145, protein: 5, carbs: 25, fat: 3, fiber: 4, veg: true },
    { id: "F134", name: "Oats with Milk", category: "Breakfast", serving: 1, unit: "bowl", cal: 220, protein: 9, carbs: 35, fat: 5, fiber: 4, veg: true },
    { id: "F135", name: "Daliya/Broken Wheat", category: "Breakfast", serving: 1, unit: "cup", cal: 140, protein: 5, carbs: 28, fat: 1, fiber: 5, veg: true },
    { id: "F136", name: "Semiya Upma", category: "Breakfast", serving: 1, unit: "cup", cal: 175, protein: 4, carbs: 32, fat: 4, fiber: 1.5, veg: true },
    { id: "F137", name: "Rava Upma", category: "Breakfast", serving: 1, unit: "cup", cal: 165, protein: 4.5, carbs: 28, fat: 4.2, fiber: 1.8, veg: true },
    { id: "F138", name: "Koozh (Ragi)", category: "Breakfast", serving: 1, unit: "glass", cal: 110, protein: 3, carbs: 22, fat: 1, fiber: 3, veg: true },
    { id: "F139", name: "Sathu Maavu Kanji", category: "Breakfast", serving: 1, unit: "cup", cal: 130, protein: 5, carbs: 24, fat: 2, fiber: 4, veg: true },

    // EGGS
    { id: "F140", name: "Boiled Egg", category: "Breakfast", serving: 1, unit: "piece", cal: 78, protein: 6, carbs: 0.6, fat: 5, fiber: 0, veg: false },
    { id: "F141", name: "Egg Omelette", category: "Breakfast", serving: 1, unit: "piece", cal: 154, protein: 10, carbs: 1, fat: 12, fiber: 0, veg: false },
    { id: "F142", name: "Egg Bhurji", category: "Breakfast", serving: 1, unit: "plate", cal: 180, protein: 12, carbs: 3, fat: 14, fiber: 0.5, veg: false },
    { id: "F143", name: "Fried Egg", category: "Breakfast", serving: 1, unit: "piece", cal: 90, protein: 6, carbs: 0.4, fat: 7, fiber: 0, veg: false },
    { id: "F144", name: "Egg Dosa", category: "Breakfast", serving: 1, unit: "piece", cal: 195, protein: 9, carbs: 18, fat: 10, fiber: 1, veg: false },
    { id: "F145", name: "Half Boil Egg", category: "Breakfast", serving: 1, unit: "piece", cal: 75, protein: 6, carbs: 0.5, fat: 5, fiber: 0, veg: false },

    // FRUITS
    { id: "F146", name: "Apple", category: "Fruit", serving: 1, unit: "medium", cal: 95, protein: 0.5, carbs: 25, fat: 0.3, fiber: 4.5, veg: true },
    { id: "F147", name: "Banana", category: "Fruit", serving: 1, unit: "medium", cal: 105, protein: 1.3, carbs: 27, fat: 0.4, fiber: 3, veg: true },
    { id: "F148", name: "Orange", category: "Fruit", serving: 1, unit: "medium", cal: 62, protein: 1.2, carbs: 15, fat: 0.2, fiber: 3, veg: true },
    { id: "F149", name: "Mango", category: "Fruit", serving: 1, unit: "cup", cal: 99, protein: 1.4, carbs: 25, fat: 0.6, fiber: 2.6, veg: true },
    { id: "F150", name: "Grapes", category: "Fruit", serving: 1, unit: "cup", cal: 62, protein: 0.6, carbs: 16, fat: 0.3, fiber: 0.8, veg: true },
    { id: "F151", name: "Watermelon", category: "Fruit", serving: 1, unit: "cup", cal: 46, protein: 0.9, carbs: 12, fat: 0.2, fiber: 0.6, veg: true },
    { id: "F152", name: "Papaya", category: "Fruit", serving: 1, unit: "cup", cal: 55, protein: 0.9, carbs: 14, fat: 0.2, fiber: 2.5, veg: true },
    { id: "F153", name: "Pomegranate", category: "Fruit", serving: 1, unit: "cup", cal: 145, protein: 3, carbs: 33, fat: 2, fiber: 7, veg: true },
    { id: "F154", name: "Guava", category: "Fruit", serving: 1, unit: "medium", cal: 68, protein: 2.5, carbs: 14, fat: 1, fiber: 5, veg: true },
    { id: "F155", name: "Pineapple", category: "Fruit", serving: 1, unit: "cup", cal: 82, protein: 0.9, carbs: 22, fat: 0.2, fiber: 2.3, veg: true },
    { id: "F156", name: "Sapota (Chikoo)", category: "Fruit", serving: 1, unit: "medium", cal: 83, protein: 0.4, carbs: 20, fat: 1.1, fiber: 5, veg: true },
    { id: "F157", name: "Jackfruit", category: "Fruit", serving: 1, unit: "cup", cal: 155, protein: 2.8, carbs: 38, fat: 1, fiber: 2.5, veg: true },
    { id: "F158", name: "Coconut (Fresh)", category: "Fruit", serving: 50, unit: "g", cal: 177, protein: 1.7, carbs: 7.5, fat: 17, fiber: 4.5, veg: true },
    { id: "F159", name: "Dates", category: "Fruit", serving: 2, unit: "pieces", cal: 66, protein: 0.4, carbs: 18, fat: 0, fiber: 1.6, veg: true },
    { id: "F160", name: "Dry Grapes (Raisins)", category: "Fruit", serving: 30, unit: "g", cal: 90, protein: 1, carbs: 24, fat: 0.1, fiber: 1.5, veg: true },

    // VEGETABLES (Raw/Cooked)
    { id: "F161", name: "Carrot (Raw)", category: "Vegetable", serving: 1, unit: "medium", cal: 25, protein: 0.6, carbs: 6, fat: 0.1, fiber: 1.7, veg: true },
    { id: "F162", name: "Cucumber", category: "Vegetable", serving: 1, unit: "medium", cal: 16, protein: 0.7, carbs: 4, fat: 0.1, fiber: 0.5, veg: true },
    { id: "F163", name: "Tomato", category: "Vegetable", serving: 1, unit: "medium", cal: 22, protein: 1.1, carbs: 5, fat: 0.2, fiber: 1.5, veg: true },
    { id: "F164", name: "Onion", category: "Vegetable", serving: 1, unit: "medium", cal: 44, protein: 1.2, carbs: 10, fat: 0.1, fiber: 2, veg: true },
    { id: "F165", name: "Potato (Boiled)", category: "Vegetable", serving: 1, unit: "medium", cal: 130, protein: 2.5, carbs: 30, fat: 0.1, fiber: 2.5, veg: true },
    { id: "F166", name: "Sweet Potato", category: "Vegetable", serving: 1, unit: "medium", cal: 112, protein: 2, carbs: 26, fat: 0.1, fiber: 4, veg: true },
    { id: "F167", name: "Spinach (Keerai)", category: "Vegetable", serving: 1, unit: "cup", cal: 23, protein: 3, carbs: 3.6, fat: 0.4, fiber: 2.2, veg: true },
    { id: "F168", name: "Cabbage", category: "Vegetable", serving: 1, unit: "cup", cal: 22, protein: 1.3, carbs: 5, fat: 0.1, fiber: 2.2, veg: true },
    { id: "F169", name: "Cauliflower", category: "Vegetable", serving: 1, unit: "cup", cal: 27, protein: 2, carbs: 5, fat: 0.3, fiber: 2, veg: true },
    { id: "F170", name: "Beans", category: "Vegetable", serving: 1, unit: "cup", cal: 31, protein: 1.8, carbs: 7, fat: 0.1, fiber: 2.7, veg: true },
    { id: "F171", name: "Beetroot", category: "Vegetable", serving: 1, unit: "medium", cal: 44, protein: 1.7, carbs: 10, fat: 0.2, fiber: 2, veg: true },
    { id: "F172", name: "Drumstick", category: "Vegetable", serving: 1, unit: "cup", cal: 37, protein: 2, carbs: 8, fat: 0.1, fiber: 2, veg: true },
    { id: "F173", name: "Brinjal/Eggplant", category: "Vegetable", serving: 1, unit: "cup", cal: 35, protein: 0.8, carbs: 9, fat: 0.2, fiber: 2.5, veg: true },
    { id: "F174", name: "Lady Finger (Bhindi)", category: "Vegetable", serving: 1, unit: "cup", cal: 33, protein: 1.9, carbs: 7, fat: 0.2, fiber: 3.2, veg: true },
    { id: "F175", name: "Bitter Gourd (Karela)", category: "Vegetable", serving: 1, unit: "cup", cal: 24, protein: 1, carbs: 5, fat: 0.2, fiber: 2.6, veg: true },

    // DRY FRUITS & NUTS
    { id: "F176", name: "Almonds", category: "Snack", serving: 10, unit: "pieces", cal: 70, protein: 2.6, carbs: 2.4, fat: 6, fiber: 1.4, veg: true },
    { id: "F177", name: "Cashews", category: "Snack", serving: 10, unit: "pieces", cal: 85, protein: 2.5, carbs: 5, fat: 7, fiber: 0.5, veg: true },
    { id: "F178", name: "Peanuts", category: "Snack", serving: 30, unit: "g", cal: 170, protein: 7, carbs: 5, fat: 14, fiber: 2.5, veg: true },
    { id: "F179", name: "Walnuts", category: "Snack", serving: 5, unit: "pieces", cal: 95, protein: 2, carbs: 2, fat: 9.5, fiber: 1, veg: true },
    { id: "F180", name: "Pistachios", category: "Snack", serving: 20, unit: "pieces", cal: 80, protein: 3, carbs: 4, fat: 6.5, fiber: 1.5, veg: true },

    // COMMON SOUTH INDIAN ITEMS
    { id: "F181", name: "Thayir Sadam (Curd Rice)", category: "Main", serving: 1, unit: "cup", cal: 200, protein: 7, carbs: 36, fat: 4.5, fiber: 1, veg: true },
    { id: "F182", name: "Poriyal (Veg Stir Fry)", category: "Curry", serving: 1, unit: "cup", cal: 95, protein: 2.5, carbs: 10, fat: 5.5, fiber: 3, veg: true },
    { id: "F183", name: "Kootu Curry", category: "Curry", serving: 1, unit: "cup", cal: 140, protein: 6, carbs: 18, fat: 5, fiber: 5, veg: true },
    { id: "F184", name: "Mor Kuzhambu", category: "Curry", serving: 1, unit: "cup", cal: 85, protein: 3, carbs: 10, fat: 3.5, fiber: 1.5, veg: true },
    { id: "F185", name: "Vathal Kuzhambu", category: "Curry", serving: 1, unit: "cup", cal: 110, protein: 2.5, carbs: 15, fat: 5, fiber: 2, veg: true },
    { id: "F186", name: "Keerai Masiyal", category: "Curry", serving: 1, unit: "cup", cal: 75, protein: 4, carbs: 8, fat: 3.5, fiber: 3.5, veg: true },
    { id: "F187", name: "Keerai Kootu", category: "Curry", serving: 1, unit: "cup", cal: 120, protein: 6, carbs: 14, fat: 4.5, fiber: 4, veg: true },
    { id: "F188", name: "Keerai Poriyal", category: "Curry", serving: 1, unit: "cup", cal: 85, protein: 3.5, carbs: 8, fat: 5, fiber: 3, veg: true },
    { id: "F189", name: "Thengai Chutney", category: "Curry", serving: 2, unit: "tbsp", cal: 55, protein: 1, carbs: 3, fat: 4.5, fiber: 1.5, veg: true },
    { id: "F190", name: "Tomato Chutney", category: "Curry", serving: 2, unit: "tbsp", cal: 40, protein: 0.5, carbs: 6, fat: 2, fiber: 0.8, veg: true },

    // MORE SNACKS & EVERYDAY ITEMS
    { id: "F191", name: "Murukku", category: "Snack", serving: 5, unit: "pieces", cal: 150, protein: 3, carbs: 18, fat: 8, fiber: 1, veg: true },
    { id: "F192", name: "Mixture", category: "Snack", serving: 50, unit: "g", cal: 260, protein: 6, carbs: 28, fat: 14, fiber: 3, veg: true },
    { id: "F193", name: "Banana Chips", category: "Snack", serving: 30, unit: "g", cal: 165, protein: 0.5, carbs: 18, fat: 10, fiber: 1.5, veg: true },
    { id: "F194", name: "Sundal", category: "Snack", serving: 1, unit: "cup", cal: 180, protein: 9, carbs: 28, fat: 4, fiber: 8, veg: true },
    { id: "F195", name: "Vadai (Ulundu)", category: "Snack", serving: 1, unit: "piece", cal: 105, protein: 4, carbs: 12, fat: 5.5, fiber: 1, veg: true },
    { id: "F196", name: "Bonda", category: "Snack", serving: 1, unit: "piece", cal: 125, protein: 2.5, carbs: 16, fat: 6, fiber: 1, veg: true },
    { id: "F197", name: "Bajji (Onion)", category: "Snack", serving: 2, unit: "pieces", cal: 120, protein: 2, carbs: 14, fat: 6.5, fiber: 1, veg: true },
    { id: "F198", name: "Papad", category: "Snack", serving: 1, unit: "piece", cal: 45, protein: 2, carbs: 6, fat: 1.5, fiber: 0.5, veg: true },
    { id: "F199", name: "Fryums", category: "Snack", serving: 10, unit: "pieces", cal: 110, protein: 0.5, carbs: 12, fat: 7, fiber: 0.2, veg: true },
    { id: "F200", name: "Thattai", category: "Snack", serving: 3, unit: "pieces", cal: 140, protein: 2.5, carbs: 16, fat: 8, fiber: 1, veg: true },

    // MILLETS & HEALTHY GRAINS
    { id: "F201", name: "Ragi Dosa", category: "Breakfast", serving: 1, unit: "piece", cal: 95, protein: 2.5, carbs: 18, fat: 1.5, fiber: 2, veg: true },
    { id: "F202", name: "Ragi Roti", category: "Main", serving: 1, unit: "piece", cal: 85, protein: 2.5, carbs: 17, fat: 1, fiber: 2.5, veg: true },
    { id: "F203", name: "Ragi Mudde", category: "Main", serving: 1, unit: "ball", cal: 110, protein: 3, carbs: 23, fat: 0.5, fiber: 3, veg: true },
    { id: "F204", name: "Kambu Dosa", category: "Breakfast", serving: 1, unit: "piece", cal: 100, protein: 3, carbs: 18, fat: 2, fiber: 2, veg: true },
    { id: "F205", name: "Thinai Rice", category: "Main", serving: 1, unit: "cup", cal: 190, protein: 5, carbs: 40, fat: 1.5, fiber: 3, veg: true },
    { id: "F206", name: "Varagu Rice", category: "Main", serving: 1, unit: "cup", cal: 185, protein: 4.5, carbs: 39, fat: 1, fiber: 3.5, veg: true },
    { id: "F207", name: "Samai Rice", category: "Main", serving: 1, unit: "cup", cal: 180, protein: 4, carbs: 38, fat: 1, fiber: 3, veg: true },
    { id: "F208", name: "Quinoa", category: "Main", serving: 1, unit: "cup", cal: 222, protein: 8, carbs: 39, fat: 3.5, fiber: 5, veg: true },

    // NON-VEG ADDITIONS
    { id: "F209", name: "Chicken Breast", category: "Main", serving: 100, unit: "g", cal: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, veg: false },
    { id: "F210", name: "Chicken Leg", category: "Main", serving: 1, unit: "piece", cal: 180, protein: 22, carbs: 0, fat: 9.5, fiber: 0, veg: false },
    { id: "F211", name: "Mutton (Cooked)", category: "Main", serving: 100, unit: "g", cal: 250, protein: 25, carbs: 0, fat: 16, fiber: 0, veg: false },
    { id: "F212", name: "Fish Fry", category: "Starter", serving: 1, unit: "piece", cal: 175, protein: 18, carbs: 8, fat: 8, fiber: 0.5, veg: false },
    { id: "F213", name: "Prawns", category: "Main", serving: 100, unit: "g", cal: 99, protein: 21, carbs: 0.2, fat: 1, fiber: 0, veg: false },
    { id: "F214", name: "Crab Curry", category: "Curry", serving: 1, unit: "cup", cal: 180, protein: 18, carbs: 8, fat: 9, fiber: 1.5, veg: false },
    { id: "F215", name: "Mutton Keema", category: "Curry", serving: 1, unit: "cup", cal: 280, protein: 22, carbs: 6, fat: 19, fiber: 1, veg: false },

    // FAST FOOD & STREET FOOD
    { id: "F216", name: "Maggi Noodles", category: "Snack", serving: 1, unit: "pack", cal: 380, protein: 8, carbs: 52, fat: 16, fiber: 2, veg: true },
    { id: "F217", name: "Fried Rice", category: "Main", serving: 1, unit: "plate", cal: 350, protein: 8, carbs: 55, fat: 12, fiber: 2.5, veg: true },
    { id: "F218", name: "Noodles", category: "Main", serving: 1, unit: "plate", cal: 320, protein: 7, carbs: 50, fat: 11, fiber: 2, veg: true },
    { id: "F219", name: "Momos (Veg)", category: "Snack", serving: 6, unit: "pieces", cal: 240, protein: 6, carbs: 36, fat: 8, fiber: 2.5, veg: true },
    { id: "F220", name: "Momos (Chicken)", category: "Snack", serving: 6, unit: "pieces", cal: 290, protein: 14, carbs: 32, fat: 12, fiber: 1.5, veg: false },
    { id: "F221", name: "Spring Roll", category: "Snack", serving: 2, unit: "pieces", cal: 220, protein: 5, carbs: 28, fat: 10, fiber: 2, veg: true },
    { id: "F222", name: "Manchurian (Dry)", category: "Starter", serving: 1, unit: "plate", cal: 280, protein: 6, carbs: 32, fat: 14, fiber: 3, veg: true },
    { id: "F223", name: "Gobi Manchurian", category: "Starter", serving: 1, unit: "plate", cal: 310, protein: 5, carbs: 38, fat: 16, fiber: 3.5, veg: true },
    { id: "F224", name: "Veg Manchow Soup", category: "Starter", serving: 1, unit: "bowl", cal: 120, protein: 3, carbs: 18, fat: 4, fiber: 2, veg: true },
    { id: "F225", name: "Hot & Sour Soup", category: "Starter", serving: 1, unit: "bowl", cal: 90, protein: 4, carbs: 12, fat: 3, fiber: 1.5, veg: true },

    // ========================================
    // GRILLED & TANDOORI ITEMS (Per 100g)
    // ========================================
    { id: "F226", name: "Grilled Chicken", category: "Main", serving: 100, unit: "g", cal: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, veg: false },
    { id: "F227", name: "Grilled Chicken Breast", category: "Main", serving: 100, unit: "g", cal: 155, protein: 32, carbs: 0, fat: 3.2, fiber: 0, veg: false },
    { id: "F228", name: "Grilled Chicken Thigh", category: "Main", serving: 100, unit: "g", cal: 185, protein: 26, carbs: 0, fat: 8.5, fiber: 0, veg: false },
    { id: "F229", name: "Tandoori Chicken", category: "Starter", serving: 100, unit: "g", cal: 195, protein: 28, carbs: 4, fat: 8, fiber: 0.5, veg: false },
    { id: "F230", name: "Tandoori Chicken Leg", category: "Starter", serving: 100, unit: "g", cal: 180, protein: 26, carbs: 3, fat: 7.5, fiber: 0.3, veg: false },
    { id: "F231", name: "Tandoori Chicken Wings", category: "Starter", serving: 100, unit: "g", cal: 210, protein: 24, carbs: 4, fat: 11, fiber: 0.3, veg: false },
    { id: "F232", name: "Tandoori Fish", category: "Starter", serving: 100, unit: "g", cal: 145, protein: 24, carbs: 3, fat: 4.5, fiber: 0.2, veg: false },
    { id: "F233", name: "Tandoori Prawns", category: "Starter", serving: 100, unit: "g", cal: 135, protein: 26, carbs: 3, fat: 2.5, fiber: 0.2, veg: false },
    { id: "F234", name: "Tandoori Paneer", category: "Starter", serving: 100, unit: "g", cal: 285, protein: 18, carbs: 6, fat: 21, fiber: 1, veg: true },
    { id: "F235", name: "Tandoori Mushroom", category: "Starter", serving: 100, unit: "g", cal: 85, protein: 4, carbs: 8, fat: 5, fiber: 2, veg: true },
    { id: "F236", name: "Tandoori Gobhi", category: "Starter", serving: 100, unit: "g", cal: 95, protein: 3, carbs: 10, fat: 5.5, fiber: 3, veg: true },
    { id: "F237", name: "Tandoori Aloo", category: "Starter", serving: 100, unit: "g", cal: 130, protein: 2.5, carbs: 22, fat: 4, fiber: 2.5, veg: true },
    { id: "F238", name: "Malai Tikka", category: "Starter", serving: 100, unit: "g", cal: 265, protein: 22, carbs: 5, fat: 18, fiber: 0.3, veg: false },
    { id: "F239", name: "Reshmi Kebab", category: "Starter", serving: 100, unit: "g", cal: 225, protein: 25, carbs: 4, fat: 12, fiber: 0.5, veg: false },
    { id: "F240", name: "Hariyali Chicken", category: "Starter", serving: 100, unit: "g", cal: 175, protein: 26, carbs: 4, fat: 6.5, fiber: 1, veg: false },
    { id: "F241", name: "Afghani Chicken", category: "Starter", serving: 100, unit: "g", cal: 245, protein: 24, carbs: 5, fat: 15, fiber: 0.3, veg: false },

    // ========================================
    // PANEER DISHES (Per 100g)
    // ========================================
    { id: "F242", name: "Paneer Butter Masala", category: "Curry", serving: 100, unit: "g", cal: 255, protein: 10, carbs: 12, fat: 19, fiber: 1.5, veg: true },
    { id: "F243", name: "Paneer Tikka Masala", category: "Curry", serving: 100, unit: "g", cal: 235, protein: 11, carbs: 10, fat: 17, fiber: 2, veg: true },
    { id: "F244", name: "Paneer Lababdar", category: "Curry", serving: 100, unit: "g", cal: 245, protein: 10, carbs: 11, fat: 18, fiber: 1.5, veg: true },
    { id: "F245", name: "Paneer Do Pyaza", category: "Curry", serving: 100, unit: "g", cal: 210, protein: 11, carbs: 9, fat: 14, fiber: 2, veg: true },
    { id: "F246", name: "Kadai Paneer", category: "Curry", serving: 100, unit: "g", cal: 220, protein: 10, carbs: 10, fat: 16, fiber: 2, veg: true },
    { id: "F247", name: "Paneer Bhurji", category: "Curry", serving: 100, unit: "g", cal: 235, protein: 14, carbs: 6, fat: 18, fiber: 1.5, veg: true },
    { id: "F248", name: "Paneer Korma", category: "Curry", serving: 100, unit: "g", cal: 265, protein: 10, carbs: 14, fat: 20, fiber: 1.5, veg: true },
    { id: "F249", name: "Paneer (Raw)", category: "Dairy", serving: 100, unit: "g", cal: 265, protein: 18, carbs: 3, fat: 21, fiber: 0, veg: true },
    { id: "F250", name: "Paneer (Low Fat)", category: "Dairy", serving: 100, unit: "g", cal: 180, protein: 20, carbs: 4, fat: 9, fiber: 0, veg: true },

    // ========================================
    // COMMON FOODS (Per 100g for Kitchen Scale)
    // ========================================
    { id: "F251", name: "White Rice (Cooked)", category: "Main", serving: 100, unit: "g", cal: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4, veg: true },
    { id: "F252", name: "Brown Rice (Cooked)", category: "Main", serving: 100, unit: "g", cal: 112, protein: 2.6, carbs: 24, fat: 0.9, fiber: 1.8, veg: true },
    { id: "F253", name: "Basmati Rice (Cooked)", category: "Main", serving: 100, unit: "g", cal: 121, protein: 2.5, carbs: 26, fat: 0.3, fiber: 0.4, veg: true },
    { id: "F254", name: "Biryani Rice", category: "Main", serving: 100, unit: "g", cal: 165, protein: 4, carbs: 28, fat: 4.5, fiber: 0.8, veg: true },
    { id: "F255", name: "Pulao Rice", category: "Main", serving: 100, unit: "g", cal: 145, protein: 3.5, carbs: 26, fat: 3, fiber: 0.6, veg: true },

    { id: "F256", name: "Dal (Cooked)", category: "Curry", serving: 100, unit: "g", cal: 105, protein: 6, carbs: 15, fat: 2.5, fiber: 4, veg: true },
    { id: "F257", name: "Sambar", category: "Curry", serving: 100, unit: "g", cal: 55, protein: 2.5, carbs: 8, fat: 1.5, fiber: 2, veg: true },
    { id: "F258", name: "Rasam", category: "Curry", serving: 100, unit: "g", cal: 25, protein: 0.8, carbs: 4, fat: 0.5, fiber: 0.8, veg: true },

    { id: "F259", name: "Chicken Curry", category: "Curry", serving: 100, unit: "g", cal: 155, protein: 14, carbs: 5, fat: 9, fiber: 1, veg: false },
    { id: "F260", name: "Butter Chicken", category: "Curry", serving: 100, unit: "g", cal: 195, protein: 14, carbs: 7, fat: 13, fiber: 1, veg: false },
    { id: "F261", name: "Chicken Korma", category: "Curry", serving: 100, unit: "g", cal: 185, protein: 13, carbs: 8, fat: 12, fiber: 1.2, veg: false },
    { id: "F262", name: "Mutton Curry", category: "Curry", serving: 100, unit: "g", cal: 185, protein: 15, carbs: 5, fat: 12, fiber: 1, veg: false },
    { id: "F263", name: "Fish Curry", category: "Curry", serving: 100, unit: "g", cal: 125, protein: 14, carbs: 4, fat: 6, fiber: 1, veg: false },
    { id: "F264", name: "Egg Curry", category: "Curry", serving: 100, unit: "g", cal: 145, protein: 9, carbs: 6, fat: 10, fiber: 1.2, veg: false },

    // ROTIS & BREADS (Per piece with gram weight)
    { id: "F265", name: "Chapati (30g)", category: "Main", serving: 1, unit: "piece", cal: 71, protein: 2.5, carbs: 14, fat: 0.9, fiber: 1.2, veg: true },
    { id: "F266", name: "Phulka (25g)", category: "Main", serving: 1, unit: "piece", cal: 55, protein: 2, carbs: 11, fat: 0.5, fiber: 1, veg: true },
    { id: "F267", name: "Tandoori Roti (40g)", category: "Main", serving: 1, unit: "piece", cal: 92, protein: 3, carbs: 18, fat: 0.8, fiber: 1.5, veg: true },
    { id: "F268", name: "Rumali Roti (35g)", category: "Main", serving: 1, unit: "piece", cal: 82, protein: 2.5, carbs: 16, fat: 0.8, fiber: 0.8, veg: true },
    { id: "F269", name: "Laccha Paratha (60g)", category: "Main", serving: 1, unit: "piece", cal: 185, protein: 4, carbs: 24, fat: 8, fiber: 1.5, veg: true },
    { id: "F270", name: "Missi Roti (50g)", category: "Main", serving: 1, unit: "piece", cal: 125, protein: 5, carbs: 20, fat: 2.5, fiber: 2.5, veg: true },

    // VEGETABLES (Per 100g Cooked)
    { id: "F271", name: "Aloo Sabzi", category: "Curry", serving: 100, unit: "g", cal: 115, protein: 2, carbs: 18, fat: 4.5, fiber: 2, veg: true },
    { id: "F272", name: "Gobi Sabzi", category: "Curry", serving: 100, unit: "g", cal: 75, protein: 2, carbs: 8, fat: 4, fiber: 2.5, veg: true },
    { id: "F273", name: "Bhindi Fry", category: "Curry", serving: 100, unit: "g", cal: 95, protein: 2, carbs: 10, fat: 5.5, fiber: 3, veg: true },
    { id: "F274", name: "Baingan Bharta", category: "Curry", serving: 100, unit: "g", cal: 85, protein: 1.5, carbs: 8, fat: 5.5, fiber: 3, veg: true },
    { id: "F275", name: "Mixed Veg Curry", category: "Curry", serving: 100, unit: "g", cal: 90, protein: 2.5, carbs: 10, fat: 5, fiber: 3, veg: true },
    { id: "F276", name: "Palak Sabzi", category: "Curry", serving: 100, unit: "g", cal: 65, protein: 3, carbs: 6, fat: 4, fiber: 2.5, veg: true },
    { id: "F277", name: "Lauki Sabzi", category: "Curry", serving: 100, unit: "g", cal: 55, protein: 1, carbs: 8, fat: 3, fiber: 1.5, veg: true },
    { id: "F278", name: "Tinda Sabzi", category: "Curry", serving: 100, unit: "g", cal: 60, protein: 1.5, carbs: 8, fat: 3, fiber: 2, veg: true },

    // SALADS & RAW ITEMS (Per 100g)
    { id: "F279", name: "Green Salad", category: "Vegetable", serving: 100, unit: "g", cal: 20, protein: 1.2, carbs: 4, fat: 0.2, fiber: 2, veg: true },
    { id: "F280", name: "Onion Salad", category: "Vegetable", serving: 100, unit: "g", cal: 44, protein: 1.2, carbs: 10, fat: 0.1, fiber: 2, veg: true },
    { id: "F281", name: "Cucumber Raita", category: "Dairy", serving: 100, unit: "g", cal: 55, protein: 3, carbs: 5, fat: 2.5, fiber: 0.5, veg: true },
    { id: "F282", name: "Boondi Raita", category: "Dairy", serving: 100, unit: "g", cal: 95, protein: 4, carbs: 10, fat: 4, fiber: 0.5, veg: true },
    { id: "F283", name: "Mix Veg Raita", category: "Dairy", serving: 100, unit: "g", cal: 65, protein: 3.5, carbs: 6, fat: 3, fiber: 1, veg: true },

    // CHUTNEYS & ACCOMPANIMENTS (Per 30g serving)
    { id: "F284", name: "Green Chutney (30g)", category: "Curry", serving: 30, unit: "g", cal: 25, protein: 1, carbs: 4, fat: 0.5, fiber: 1, veg: true },
    { id: "F285", name: "Tamarind Chutney (30g)", category: "Curry", serving: 30, unit: "g", cal: 45, protein: 0.3, carbs: 11, fat: 0.2, fiber: 0.5, veg: true },
    { id: "F286", name: "Coconut Chutney (30g)", category: "Curry", serving: 30, unit: "g", cal: 55, protein: 1, carbs: 3, fat: 4.5, fiber: 1.5, veg: true },
    { id: "F287", name: "Pickle (30g)", category: "Curry", serving: 30, unit: "g", cal: 50, protein: 0.5, carbs: 2, fat: 4.5, fiber: 0.5, veg: true },

    // COMMON PROTEINS (Per 100g Raw/Cooked)
    { id: "F288", name: "Chicken Breast (Raw)", category: "Main", serving: 100, unit: "g", cal: 120, protein: 23, carbs: 0, fat: 2.5, fiber: 0, veg: false },
    { id: "F289", name: "Chicken Thigh (Raw)", category: "Main", serving: 100, unit: "g", cal: 175, protein: 19, carbs: 0, fat: 10.5, fiber: 0, veg: false },
    { id: "F290", name: "Mutton (Raw)", category: "Main", serving: 100, unit: "g", cal: 195, protein: 20, carbs: 0, fat: 12.5, fiber: 0, veg: false },
    { id: "F291", name: "Fish (White, Raw)", category: "Main", serving: 100, unit: "g", cal: 85, protein: 18, carbs: 0, fat: 1, fiber: 0, veg: false },
    { id: "F292", name: "Prawns (Raw)", category: "Main", serving: 100, unit: "g", cal: 85, protein: 18, carbs: 0.5, fat: 1, fiber: 0, veg: false },
    { id: "F293", name: "Egg White", category: "Breakfast", serving: 100, unit: "g", cal: 52, protein: 11, carbs: 0.7, fat: 0.2, fiber: 0, veg: false },
    { id: "F294", name: "Egg Yolk", category: "Breakfast", serving: 100, unit: "g", cal: 322, protein: 16, carbs: 3.6, fat: 27, fiber: 0, veg: false },
    { id: "F295", name: "Whole Egg", category: "Breakfast", serving: 100, unit: "g", cal: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, veg: false },

    // HEALTHY PROTEINS (Per 100g)
    { id: "F296", name: "Tofu", category: "Main", serving: 100, unit: "g", cal: 76, protein: 8, carbs: 2, fat: 4.5, fiber: 0.5, veg: true },
    { id: "F297", name: "Soya Chunks (Dry)", category: "Main", serving: 100, unit: "g", cal: 345, protein: 52, carbs: 33, fat: 0.5, fiber: 13, veg: true },
    { id: "F298", name: "Soya Chunks (Cooked)", category: "Main", serving: 100, unit: "g", cal: 125, protein: 18, carbs: 12, fat: 0.5, fiber: 5, veg: true },
    { id: "F299", name: "Sprouts (Mixed)", category: "Vegetable", serving: 100, unit: "g", cal: 45, protein: 4, carbs: 6, fat: 0.5, fiber: 2.5, veg: true },
    { id: "F300", name: "Moong Sprouts", category: "Vegetable", serving: 100, unit: "g", cal: 31, protein: 3, carbs: 5, fat: 0.2, fiber: 2, veg: true },

    // ========================================
    // FRESH JUICES (Per 200ml glass)
    // ========================================
    { id: "F301", name: "Beetroot Juice", category: "Beverage", serving: 200, unit: "ml", cal: 88, protein: 2, carbs: 20, fat: 0.2, fiber: 0.5, veg: true },
    { id: "F302", name: "Amla Juice", category: "Beverage", serving: 200, unit: "ml", cal: 60, protein: 1, carbs: 14, fat: 0.2, fiber: 0.8, veg: true },
    { id: "F303", name: "Amla Juice (No Sugar)", category: "Beverage", serving: 200, unit: "ml", cal: 32, protein: 0.8, carbs: 7, fat: 0.1, fiber: 0.8, veg: true },
    { id: "F304", name: "Carrot Juice", category: "Beverage", serving: 200, unit: "ml", cal: 80, protein: 1.8, carbs: 18, fat: 0.3, fiber: 1.5, veg: true },
    { id: "F305", name: "Orange Juice", category: "Beverage", serving: 200, unit: "ml", cal: 90, protein: 1.4, carbs: 21, fat: 0.4, fiber: 0.4, veg: true },
    { id: "F306", name: "Orange Juice (Fresh)", category: "Beverage", serving: 200, unit: "ml", cal: 84, protein: 1.2, carbs: 19, fat: 0.2, fiber: 0.5, veg: true },
    { id: "F307", name: "Apple Juice", category: "Beverage", serving: 200, unit: "ml", cal: 94, protein: 0.2, carbs: 23, fat: 0.2, fiber: 0.2, veg: true },
    { id: "F308", name: "Apple Juice (Fresh)", category: "Beverage", serving: 200, unit: "ml", cal: 88, protein: 0.4, carbs: 21, fat: 0.2, fiber: 0.4, veg: true },
    { id: "F309", name: "Pomegranate Juice", category: "Beverage", serving: 200, unit: "ml", cal: 108, protein: 0.4, carbs: 27, fat: 0.2, fiber: 0.2, veg: true },
    { id: "F310", name: "Watermelon Juice", category: "Beverage", serving: 200, unit: "ml", cal: 60, protein: 1.2, carbs: 14, fat: 0.2, fiber: 0.4, veg: true },
    { id: "F311", name: "Pineapple Juice", category: "Beverage", serving: 200, unit: "ml", cal: 106, protein: 0.8, carbs: 26, fat: 0.2, fiber: 0.4, veg: true },
    { id: "F312", name: "Grape Juice", category: "Beverage", serving: 200, unit: "ml", cal: 120, protein: 0.8, carbs: 30, fat: 0.2, fiber: 0.2, veg: true },
    { id: "F313", name: "Mango Juice", category: "Beverage", serving: 200, unit: "ml", cal: 120, protein: 0.8, carbs: 28, fat: 0.4, fiber: 0.4, veg: true },
    { id: "F314", name: "Mixed Fruit Juice", category: "Beverage", serving: 200, unit: "ml", cal: 100, protein: 1, carbs: 24, fat: 0.2, fiber: 0.5, veg: true },
    { id: "F315", name: "Papaya Juice", category: "Beverage", serving: 200, unit: "ml", cal: 70, protein: 0.8, carbs: 16, fat: 0.2, fiber: 1, veg: true },
    { id: "F316", name: "Guava Juice", category: "Beverage", serving: 200, unit: "ml", cal: 90, protein: 1.6, carbs: 20, fat: 0.4, fiber: 2, veg: true },
    { id: "F317", name: "Mosambi Juice", category: "Beverage", serving: 200, unit: "ml", cal: 86, protein: 1, carbs: 20, fat: 0.2, fiber: 0.3, veg: true },
    { id: "F318", name: "Sweet Lime Juice", category: "Beverage", serving: 200, unit: "ml", cal: 86, protein: 1, carbs: 20, fat: 0.2, fiber: 0.3, veg: true },

    // VEGETABLE JUICES (Per 200ml glass)
    { id: "F319", name: "Beetroot Carrot Juice", category: "Beverage", serving: 200, unit: "ml", cal: 82, protein: 2, carbs: 18, fat: 0.2, fiber: 1, veg: true },
    { id: "F320", name: "ABC Juice (Apple Beet Carrot)", category: "Beverage", serving: 200, unit: "ml", cal: 90, protein: 1.5, carbs: 21, fat: 0.2, fiber: 1.2, veg: true },
    { id: "F321", name: "Spinach Juice", category: "Beverage", serving: 200, unit: "ml", cal: 40, protein: 3, carbs: 5, fat: 0.4, fiber: 1.5, veg: true },
    { id: "F322", name: "Cucumber Juice", category: "Beverage", serving: 200, unit: "ml", cal: 30, protein: 1, carbs: 6, fat: 0.2, fiber: 0.5, veg: true },
    { id: "F323", name: "Bottle Gourd Juice (Lauki)", category: "Beverage", serving: 200, unit: "ml", cal: 28, protein: 0.8, carbs: 6, fat: 0.1, fiber: 0.8, veg: true },
    { id: "F324", name: "Karela Juice (Bitter Gourd)", category: "Beverage", serving: 200, unit: "ml", cal: 34, protein: 1.6, carbs: 6, fat: 0.2, fiber: 1, veg: true },
    { id: "F325", name: "Tomato Juice", category: "Beverage", serving: 200, unit: "ml", cal: 34, protein: 1.4, carbs: 7, fat: 0.2, fiber: 0.8, veg: true },
    { id: "F326", name: "Celery Juice", category: "Beverage", serving: 200, unit: "ml", cal: 30, protein: 1.2, carbs: 6, fat: 0.2, fiber: 1, veg: true },
    { id: "F327", name: "Wheatgrass Juice", category: "Beverage", serving: 30, unit: "ml", cal: 8, protein: 0.5, carbs: 1, fat: 0.1, fiber: 0.3, veg: true },
    { id: "F328", name: "Aloe Vera Juice", category: "Beverage", serving: 200, unit: "ml", cal: 20, protein: 0.2, carbs: 4, fat: 0, fiber: 0.5, veg: true },

    // HEALTHY DRINKS & SMOOTHIES (Per glass)
    { id: "F329", name: "Green Smoothie", category: "Beverage", serving: 250, unit: "ml", cal: 150, protein: 4, carbs: 28, fat: 3, fiber: 4, veg: true },
    { id: "F330", name: "Banana Smoothie", category: "Beverage", serving: 250, unit: "ml", cal: 180, protein: 6, carbs: 32, fat: 4, fiber: 3, veg: true },
    { id: "F331", name: "Mango Smoothie", category: "Beverage", serving: 250, unit: "ml", cal: 195, protein: 5, carbs: 38, fat: 4, fiber: 2, veg: true },
    { id: "F332", name: "Berry Smoothie", category: "Beverage", serving: 250, unit: "ml", cal: 165, protein: 4, carbs: 30, fat: 3.5, fiber: 4, veg: true },
    { id: "F333", name: "Protein Shake", category: "Beverage", serving: 300, unit: "ml", cal: 200, protein: 25, carbs: 15, fat: 5, fiber: 1, veg: true },
    { id: "F334", name: "Banana Shake", category: "Beverage", serving: 300, unit: "ml", cal: 250, protein: 8, carbs: 42, fat: 6, fiber: 2.5, veg: true },
    { id: "F335", name: "Mango Shake", category: "Beverage", serving: 300, unit: "ml", cal: 280, protein: 7, carbs: 48, fat: 7, fiber: 2, veg: true },
    { id: "F336", name: "Strawberry Shake", category: "Beverage", serving: 300, unit: "ml", cal: 240, protein: 7, carbs: 40, fat: 6, fiber: 2, veg: true },
    { id: "F337", name: "Chocolate Shake", category: "Beverage", serving: 300, unit: "ml", cal: 320, protein: 9, carbs: 48, fat: 11, fiber: 1.5, veg: true },
    { id: "F338", name: "Cold Coffee", category: "Beverage", serving: 250, unit: "ml", cal: 180, protein: 5, carbs: 28, fat: 6, fiber: 0, veg: true },
    { id: "F339", name: "Iced Tea (Lemon)", category: "Beverage", serving: 250, unit: "ml", cal: 70, protein: 0, carbs: 18, fat: 0, fiber: 0, veg: true },
    { id: "F340", name: "Coconut Water", category: "Beverage", serving: 200, unit: "ml", cal: 38, protein: 0.7, carbs: 9, fat: 0.2, fiber: 0, veg: true },
    { id: "F341", name: "Tender Coconut Water", category: "Beverage", serving: 250, unit: "ml", cal: 45, protein: 0.8, carbs: 11, fat: 0.2, fiber: 0, veg: true },
    { id: "F342", name: "Ginger Lemon Water", category: "Beverage", serving: 200, unit: "ml", cal: 15, protein: 0.2, carbs: 4, fat: 0, fiber: 0.2, veg: true },
    { id: "F343", name: "Honey Lemon Water", category: "Beverage", serving: 200, unit: "ml", cal: 45, protein: 0.2, carbs: 12, fat: 0, fiber: 0, veg: true },
    { id: "F344", name: "Jeera Water", category: "Beverage", serving: 200, unit: "ml", cal: 10, protein: 0.4, carbs: 2, fat: 0.2, fiber: 0.3, veg: true },
    { id: "F345", name: "Turmeric Milk (Haldi Doodh)", category: "Beverage", serving: 200, unit: "ml", cal: 120, protein: 6, carbs: 12, fat: 5, fiber: 0.5, veg: true },

    // ========================================
    // RAW FOODS (Per 100g - For Kitchen Scale)
    // ========================================

    // RAW DAIRY
    { id: "F346", name: "Raw Paneer", category: "Dairy", serving: 100, unit: "g", cal: 265, protein: 18, carbs: 3, fat: 21, fiber: 0, veg: true },
    { id: "F347", name: "Raw Paneer (Low Fat)", category: "Dairy", serving: 100, unit: "g", cal: 180, protein: 20, carbs: 4, fat: 9, fiber: 0, veg: true },
    { id: "F348", name: "Raw Cheese (Cheddar)", category: "Dairy", serving: 100, unit: "g", cal: 403, protein: 25, carbs: 1.3, fat: 33, fiber: 0, veg: true },
    { id: "F349", name: "Raw Cheese (Mozzarella)", category: "Dairy", serving: 100, unit: "g", cal: 280, protein: 28, carbs: 3, fat: 17, fiber: 0, veg: true },
    { id: "F350", name: "Raw Cream Cheese", category: "Dairy", serving: 100, unit: "g", cal: 342, protein: 6, carbs: 4, fat: 34, fiber: 0, veg: true },
    { id: "F351", name: "Raw Butter", category: "Dairy", serving: 100, unit: "g", cal: 717, protein: 0.9, carbs: 0.1, fat: 81, fiber: 0, veg: true },
    { id: "F352", name: "Raw Ghee", category: "Dairy", serving: 100, unit: "g", cal: 900, protein: 0, carbs: 0, fat: 100, fiber: 0, veg: true },
    { id: "F353", name: "Raw Curd/Yogurt", category: "Dairy", serving: 100, unit: "g", cal: 60, protein: 3.5, carbs: 5, fat: 3, fiber: 0, veg: true },
    { id: "F354", name: "Raw Greek Yogurt", category: "Dairy", serving: 100, unit: "g", cal: 97, protein: 9, carbs: 4, fat: 5, fiber: 0, veg: true },

    // RAW PROTEINS - CHICKEN
    { id: "F355", name: "Raw Chicken Breast", category: "Main", serving: 100, unit: "g", cal: 120, protein: 23, carbs: 0, fat: 2.5, fiber: 0, veg: false },
    { id: "F356", name: "Raw Chicken Thigh", category: "Main", serving: 100, unit: "g", cal: 175, protein: 19, carbs: 0, fat: 10.5, fiber: 0, veg: false },
    { id: "F357", name: "Raw Chicken Leg", category: "Main", serving: 100, unit: "g", cal: 160, protein: 18, carbs: 0, fat: 9, fiber: 0, veg: false },
    { id: "F358", name: "Raw Chicken Wings", category: "Main", serving: 100, unit: "g", cal: 191, protein: 17, carbs: 0, fat: 13, fiber: 0, veg: false },
    { id: "F359", name: "Raw Chicken Mince/Keema", category: "Main", serving: 100, unit: "g", cal: 143, protein: 17, carbs: 0, fat: 8, fiber: 0, veg: false },
    { id: "F360", name: "Raw Chicken (Whole)", category: "Main", serving: 100, unit: "g", cal: 150, protein: 18, carbs: 0, fat: 8.5, fiber: 0, veg: false },

    // RAW PROTEINS - MUTTON/LAMB
    { id: "F361", name: "Raw Mutton", category: "Main", serving: 100, unit: "g", cal: 195, protein: 20, carbs: 0, fat: 12.5, fiber: 0, veg: false },
    { id: "F362", name: "Raw Mutton Mince/Keema", category: "Main", serving: 100, unit: "g", cal: 220, protein: 18, carbs: 0, fat: 16, fiber: 0, veg: false },
    { id: "F363", name: "Raw Lamb Chops", category: "Main", serving: 100, unit: "g", cal: 230, protein: 18, carbs: 0, fat: 17, fiber: 0, veg: false },
    { id: "F364", name: "Raw Goat Meat", category: "Main", serving: 100, unit: "g", cal: 143, protein: 27, carbs: 0, fat: 3, fiber: 0, veg: false },

    // RAW PROTEINS - FISH & SEAFOOD
    { id: "F365", name: "Raw Fish (White)", category: "Main", serving: 100, unit: "g", cal: 85, protein: 18, carbs: 0, fat: 1, fiber: 0, veg: false },
    { id: "F366", name: "Raw Rohu Fish", category: "Main", serving: 100, unit: "g", cal: 97, protein: 17, carbs: 0, fat: 2.5, fiber: 0, veg: false },
    { id: "F367", name: "Raw Salmon", category: "Main", serving: 100, unit: "g", cal: 208, protein: 20, carbs: 0, fat: 13, fiber: 0, veg: false },
    { id: "F368", name: "Raw Pomfret", category: "Main", serving: 100, unit: "g", cal: 96, protein: 19, carbs: 0, fat: 2.5, fiber: 0, veg: false },
    { id: "F369", name: "Raw Seer Fish (Surmai)", category: "Main", serving: 100, unit: "g", cal: 109, protein: 21, carbs: 0, fat: 2.5, fiber: 0, veg: false },
    { id: "F370", name: "Raw Prawns", category: "Main", serving: 100, unit: "g", cal: 85, protein: 18, carbs: 0.5, fat: 1, fiber: 0, veg: false },
    { id: "F371", name: "Raw Crab", category: "Main", serving: 100, unit: "g", cal: 87, protein: 18, carbs: 0, fat: 1, fiber: 0, veg: false },
    { id: "F372", name: "Raw Squid", category: "Main", serving: 100, unit: "g", cal: 92, protein: 16, carbs: 3, fat: 1.4, fiber: 0, veg: false },

    // RAW EGGS
    { id: "F373", name: "Raw Whole Egg", category: "Breakfast", serving: 100, unit: "g", cal: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, veg: false },
    { id: "F374", name: "Raw Egg White", category: "Breakfast", serving: 100, unit: "g", cal: 52, protein: 11, carbs: 0.7, fat: 0.2, fiber: 0, veg: false },
    { id: "F375", name: "Raw Egg Yolk", category: "Breakfast", serving: 100, unit: "g", cal: 322, protein: 16, carbs: 3.6, fat: 27, fiber: 0, veg: false },
    { id: "F376", name: "Raw Egg (1 Large ~50g)", category: "Breakfast", serving: 1, unit: "piece", cal: 72, protein: 6, carbs: 0.5, fat: 5, fiber: 0, veg: false },

    // RAW VEGETABLES
    { id: "F377", name: "Raw Tomato", category: "Vegetable", serving: 100, unit: "g", cal: 18, protein: 0.9, carbs: 4, fat: 0.2, fiber: 1.2, veg: true },
    { id: "F378", name: "Raw Onion", category: "Vegetable", serving: 100, unit: "g", cal: 40, protein: 1.1, carbs: 9, fat: 0.1, fiber: 1.7, veg: true },
    { id: "F379", name: "Raw Potato", category: "Vegetable", serving: 100, unit: "g", cal: 77, protein: 2, carbs: 17, fat: 0.1, fiber: 2.2, veg: true },
    { id: "F380", name: "Raw Carrot", category: "Vegetable", serving: 100, unit: "g", cal: 41, protein: 0.9, carbs: 10, fat: 0.2, fiber: 2.8, veg: true },
    { id: "F381", name: "Raw Spinach (Palak)", category: "Vegetable", serving: 100, unit: "g", cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, veg: true },
    { id: "F382", name: "Raw Cabbage", category: "Vegetable", serving: 100, unit: "g", cal: 25, protein: 1.3, carbs: 6, fat: 0.1, fiber: 2.5, veg: true },
    { id: "F383", name: "Raw Cauliflower (Gobi)", category: "Vegetable", serving: 100, unit: "g", cal: 25, protein: 2, carbs: 5, fat: 0.3, fiber: 2, veg: true },
    { id: "F384", name: "Raw Broccoli", category: "Vegetable", serving: 100, unit: "g", cal: 34, protein: 2.8, carbs: 7, fat: 0.4, fiber: 2.6, veg: true },
    { id: "F385", name: "Raw Green Beans", category: "Vegetable", serving: 100, unit: "g", cal: 31, protein: 1.8, carbs: 7, fat: 0.1, fiber: 2.7, veg: true },
    { id: "F386", name: "Raw Lady Finger (Bhindi)", category: "Vegetable", serving: 100, unit: "g", cal: 33, protein: 1.9, carbs: 7, fat: 0.2, fiber: 3.2, veg: true },
    { id: "F387", name: "Raw Brinjal (Baingan)", category: "Vegetable", serving: 100, unit: "g", cal: 25, protein: 1, carbs: 6, fat: 0.2, fiber: 3, veg: true },
    { id: "F388", name: "Raw Cucumber", category: "Vegetable", serving: 100, unit: "g", cal: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, veg: true },
    { id: "F389", name: "Raw Beetroot", category: "Vegetable", serving: 100, unit: "g", cal: 43, protein: 1.6, carbs: 10, fat: 0.2, fiber: 2.8, veg: true },
    { id: "F390", name: "Raw Pumpkin", category: "Vegetable", serving: 100, unit: "g", cal: 26, protein: 1, carbs: 6.5, fat: 0.1, fiber: 0.5, veg: true },
    { id: "F391", name: "Raw Bottle Gourd (Lauki)", category: "Vegetable", serving: 100, unit: "g", cal: 14, protein: 0.6, carbs: 3.4, fat: 0.1, fiber: 0.5, veg: true },
    { id: "F392", name: "Raw Bitter Gourd (Karela)", category: "Vegetable", serving: 100, unit: "g", cal: 17, protein: 1, carbs: 3.7, fat: 0.2, fiber: 2.8, veg: true },
    { id: "F393", name: "Raw Drumstick (Moringa)", category: "Vegetable", serving: 100, unit: "g", cal: 37, protein: 2, carbs: 8.5, fat: 0.2, fiber: 2, veg: true },
    { id: "F394", name: "Raw Capsicum (Bell Pepper)", category: "Vegetable", serving: 100, unit: "g", cal: 31, protein: 1, carbs: 6, fat: 0.3, fiber: 2.1, veg: true },
    { id: "F395", name: "Raw Mushroom", category: "Vegetable", serving: 100, unit: "g", cal: 22, protein: 3, carbs: 3.3, fat: 0.3, fiber: 1, veg: true },

    // RAW FRUITS
    { id: "F395A", name: "Raw Amla (Indian Gooseberry)", category: "Fruit", serving: 100, unit: "g", cal: 44, protein: 0.9, carbs: 10, fat: 0.6, fiber: 4.3, veg: true },
    { id: "F395B", name: "Raw Amla (1 piece ~20g)", category: "Fruit", serving: 1, unit: "piece", cal: 9, protein: 0.2, carbs: 2, fat: 0.1, fiber: 0.9, veg: true },
    { id: "F395C", name: "Raw Mango (Green)", category: "Fruit", serving: 100, unit: "g", cal: 60, protein: 0.8, carbs: 15, fat: 0.4, fiber: 1.6, veg: true },
    { id: "F395D", name: "Raw Papaya (Green)", category: "Fruit", serving: 100, unit: "g", cal: 32, protein: 0.6, carbs: 7.5, fat: 0.1, fiber: 1.7, veg: true },
    { id: "F395E", name: "Raw Banana (Green)", category: "Fruit", serving: 100, unit: "g", cal: 89, protein: 1.3, carbs: 23, fat: 0.3, fiber: 2.6, veg: true },
    { id: "F395F", name: "Raw Jackfruit", category: "Fruit", serving: 100, unit: "g", cal: 95, protein: 1.7, carbs: 23, fat: 0.6, fiber: 1.5, veg: true },
    { id: "F395G", name: "Raw Tamarind", category: "Fruit", serving: 100, unit: "g", cal: 239, protein: 2.8, carbs: 63, fat: 0.6, fiber: 5.1, veg: true },
    { id: "F395H", name: "Raw Guava", category: "Fruit", serving: 100, unit: "g", cal: 68, protein: 2.5, carbs: 14, fat: 1, fiber: 5.4, veg: true },
    { id: "F395I", name: "Raw Apple", category: "Fruit", serving: 100, unit: "g", cal: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4, veg: true },
    { id: "F395J", name: "Raw Orange", category: "Fruit", serving: 100, unit: "g", cal: 47, protein: 0.9, carbs: 12, fat: 0.1, fiber: 2.4, veg: true },
    { id: "F395K", name: "Raw Pomegranate", category: "Fruit", serving: 100, unit: "g", cal: 83, protein: 1.7, carbs: 19, fat: 1.2, fiber: 4, veg: true },
    { id: "F395L", name: "Raw Watermelon", category: "Fruit", serving: 100, unit: "g", cal: 30, protein: 0.6, carbs: 8, fat: 0.2, fiber: 0.4, veg: true },
    { id: "F395M", name: "Raw Muskmelon", category: "Fruit", serving: 100, unit: "g", cal: 34, protein: 0.8, carbs: 8, fat: 0.2, fiber: 0.9, veg: true },
    { id: "F395N", name: "Raw Grapes", category: "Fruit", serving: 100, unit: "g", cal: 69, protein: 0.7, carbs: 18, fat: 0.2, fiber: 0.9, veg: true },
    { id: "F395O", name: "Raw Chikoo (Sapota)", category: "Fruit", serving: 100, unit: "g", cal: 83, protein: 0.4, carbs: 20, fat: 1.1, fiber: 5.3, veg: true },
    { id: "F395P", name: "Raw Pear", category: "Fruit", serving: 100, unit: "g", cal: 57, protein: 0.4, carbs: 15, fat: 0.1, fiber: 3.1, veg: true },
    { id: "F395Q", name: "Raw Plum", category: "Fruit", serving: 100, unit: "g", cal: 46, protein: 0.7, carbs: 11, fat: 0.3, fiber: 1.4, veg: true },
    { id: "F395R", name: "Raw Lychee", category: "Fruit", serving: 100, unit: "g", cal: 66, protein: 0.8, carbs: 17, fat: 0.4, fiber: 1.3, veg: true },
    // RAW GRAINS & LEGUMES
    { id: "F396", name: "Raw Rice", category: "Main", serving: 100, unit: "g", cal: 360, protein: 7, carbs: 79, fat: 0.5, fiber: 1.3, veg: true },
    { id: "F397", name: "Raw Basmati Rice", category: "Main", serving: 100, unit: "g", cal: 350, protein: 7.5, carbs: 77, fat: 0.5, fiber: 0.4, veg: true },
    { id: "F398", name: "Raw Brown Rice", category: "Main", serving: 100, unit: "g", cal: 370, protein: 8, carbs: 77, fat: 2.5, fiber: 3.5, veg: true },
    { id: "F399", name: "Raw Wheat Flour (Atta)", category: "Main", serving: 100, unit: "g", cal: 340, protein: 12, carbs: 71, fat: 1.5, fiber: 10, veg: true },
    { id: "F400", name: "Raw Maida (Refined Flour)", category: "Main", serving: 100, unit: "g", cal: 355, protein: 10, carbs: 76, fat: 1, fiber: 2.5, veg: true },
    { id: "F401", name: "Raw Rava/Sooji", category: "Main", serving: 100, unit: "g", cal: 349, protein: 10, carbs: 73, fat: 1, fiber: 3.9, veg: true },
    { id: "F402", name: "Raw Oats", category: "Breakfast", serving: 100, unit: "g", cal: 389, protein: 17, carbs: 66, fat: 7, fiber: 11, veg: true },
    { id: "F403", name: "Raw Ragi Flour", category: "Main", serving: 100, unit: "g", cal: 336, protein: 7, carbs: 72, fat: 1.3, fiber: 11, veg: true },
    { id: "F404", name: "Raw Moong Dal", category: "Main", serving: 100, unit: "g", cal: 347, protein: 24, carbs: 59, fat: 1, fiber: 16, veg: true },
    { id: "F405", name: "Raw Toor Dal", category: "Main", serving: 100, unit: "g", cal: 335, protein: 22, carbs: 57, fat: 1.5, fiber: 15, veg: true },
    { id: "F406", name: "Raw Chana Dal", category: "Main", serving: 100, unit: "g", cal: 360, protein: 21, carbs: 60, fat: 5.5, fiber: 18, veg: true },
    { id: "F407", name: "Raw Urad Dal", category: "Main", serving: 100, unit: "g", cal: 347, protein: 24, carbs: 59, fat: 1.5, fiber: 18, veg: true },
    { id: "F408", name: "Raw Masoor Dal", category: "Main", serving: 100, unit: "g", cal: 352, protein: 25, carbs: 60, fat: 1, fiber: 11, veg: true },
    { id: "F409", name: "Raw Rajma (Kidney Beans)", category: "Main", serving: 100, unit: "g", cal: 333, protein: 24, carbs: 60, fat: 0.8, fiber: 25, veg: true },
    { id: "F410", name: "Raw Chickpeas (Kabuli Chana)", category: "Main", serving: 100, unit: "g", cal: 364, protein: 19, carbs: 61, fat: 6, fiber: 17, veg: true },
    { id: "F411", name: "Raw Black Chana", category: "Main", serving: 100, unit: "g", cal: 378, protein: 22, carbs: 63, fat: 5, fiber: 12, veg: true },
    { id: "F412", name: "Raw Green Peas", category: "Vegetable", serving: 100, unit: "g", cal: 81, protein: 5, carbs: 14, fat: 0.4, fiber: 5, veg: true },
    { id: "F413", name: "Raw Soya Beans", category: "Main", serving: 100, unit: "g", cal: 446, protein: 36, carbs: 30, fat: 20, fiber: 9, veg: true },

    // RAW NUTS & SEEDS
    { id: "F414", name: "Raw Almonds", category: "Snack", serving: 100, unit: "g", cal: 579, protein: 21, carbs: 22, fat: 50, fiber: 12, veg: true },
    { id: "F415", name: "Raw Cashews", category: "Snack", serving: 100, unit: "g", cal: 553, protein: 18, carbs: 30, fat: 44, fiber: 3, veg: true },
    { id: "F416", name: "Raw Peanuts", category: "Snack", serving: 100, unit: "g", cal: 567, protein: 26, carbs: 16, fat: 49, fiber: 9, veg: true },
    { id: "F417", name: "Raw Walnuts", category: "Snack", serving: 100, unit: "g", cal: 654, protein: 15, carbs: 14, fat: 65, fiber: 7, veg: true },
    { id: "F418", name: "Raw Pistachios", category: "Snack", serving: 100, unit: "g", cal: 560, protein: 20, carbs: 28, fat: 45, fiber: 10, veg: true },
    { id: "F419", name: "Raw Chia Seeds", category: "Snack", serving: 100, unit: "g", cal: 486, protein: 17, carbs: 42, fat: 31, fiber: 34, veg: true },
    { id: "F420", name: "Raw Flax Seeds", category: "Snack", serving: 100, unit: "g", cal: 534, protein: 18, carbs: 29, fat: 42, fiber: 27, veg: true },
    { id: "F421", name: "Raw Pumpkin Seeds", category: "Snack", serving: 100, unit: "g", cal: 559, protein: 30, carbs: 11, fat: 49, fiber: 6, veg: true },
    { id: "F422", name: "Raw Sunflower Seeds", category: "Snack", serving: 100, unit: "g", cal: 584, protein: 21, carbs: 20, fat: 51, fiber: 9, veg: true },
    { id: "F423", name: "Raw Sesame Seeds (Til)", category: "Snack", serving: 100, unit: "g", cal: 573, protein: 18, carbs: 23, fat: 50, fiber: 12, veg: true },
    { id: "F424", name: "Raw Coconut (Fresh)", category: "Fruit", serving: 100, unit: "g", cal: 354, protein: 3, carbs: 15, fat: 33, fiber: 9, veg: true },
    { id: "F425", name: "Raw Desiccated Coconut", category: "Snack", serving: 100, unit: "g", cal: 660, protein: 7, carbs: 24, fat: 65, fiber: 17, veg: true },

    // ========================================
    // BOILED FOODS (Per 100g - No Oil Added)
    // ========================================

    // BOILED CHICKEN
    { id: "F426", name: "Boiled Chicken Breast", category: "Main", serving: 100, unit: "g", cal: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, veg: false },
    { id: "F427", name: "Boiled Chicken Thigh", category: "Main", serving: 100, unit: "g", cal: 195, protein: 26, carbs: 0, fat: 9.5, fiber: 0, veg: false },
    { id: "F428", name: "Boiled Chicken Leg", category: "Main", serving: 100, unit: "g", cal: 175, protein: 24, carbs: 0, fat: 8, fiber: 0, veg: false },
    { id: "F429", name: "Boiled Chicken (Whole)", category: "Main", serving: 100, unit: "g", cal: 180, protein: 25, carbs: 0, fat: 8.5, fiber: 0, veg: false },
    { id: "F430", name: "Boiled Chicken Mince/Keema", category: "Main", serving: 100, unit: "g", cal: 175, protein: 24, carbs: 0, fat: 8, fiber: 0, veg: false },

    // BOILED MUTTON/LAMB
    { id: "F431", name: "Boiled Mutton", category: "Main", serving: 100, unit: "g", cal: 250, protein: 25, carbs: 0, fat: 16, fiber: 0, veg: false },
    { id: "F432", name: "Boiled Mutton Keema", category: "Main", serving: 100, unit: "g", cal: 260, protein: 23, carbs: 0, fat: 18, fiber: 0, veg: false },
    { id: "F433", name: "Boiled Goat Meat", category: "Main", serving: 100, unit: "g", cal: 165, protein: 30, carbs: 0, fat: 4, fiber: 0, veg: false },
    { id: "F434", name: "Boiled Lamb", category: "Main", serving: 100, unit: "g", cal: 270, protein: 24, carbs: 0, fat: 19, fiber: 0, veg: false },

    // BOILED FISH & SEAFOOD
    { id: "F435", name: "Boiled Fish (White)", category: "Main", serving: 100, unit: "g", cal: 105, protein: 22, carbs: 0, fat: 1.5, fiber: 0, veg: false },
    { id: "F436", name: "Boiled Salmon", category: "Main", serving: 100, unit: "g", cal: 230, protein: 25, carbs: 0, fat: 14, fiber: 0, veg: false },
    { id: "F437", name: "Boiled Prawns", category: "Main", serving: 100, unit: "g", cal: 99, protein: 21, carbs: 0.5, fat: 1, fiber: 0, veg: false },
    { id: "F438", name: "Boiled Crab", category: "Main", serving: 100, unit: "g", cal: 97, protein: 21, carbs: 0, fat: 1, fiber: 0, veg: false },
    { id: "F439", name: "Boiled Squid", category: "Main", serving: 100, unit: "g", cal: 109, protein: 18, carbs: 4, fat: 2, fiber: 0, veg: false },
    { id: "F440", name: "Boiled Pomfret", category: "Main", serving: 100, unit: "g", cal: 118, protein: 24, carbs: 0, fat: 2.5, fiber: 0, veg: false },
    { id: "F441", name: "Boiled Rohu", category: "Main", serving: 100, unit: "g", cal: 115, protein: 21, carbs: 0, fat: 3, fiber: 0, veg: false },

    // BOILED EGGS
    { id: "F442", name: "Boiled Egg (Whole)", category: "Breakfast", serving: 100, unit: "g", cal: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0, veg: false },
    { id: "F443", name: "Boiled Egg (1 piece)", category: "Breakfast", serving: 1, unit: "piece", cal: 78, protein: 6, carbs: 0.5, fat: 5, fiber: 0, veg: false },
    { id: "F444", name: "Boiled Egg White (1 piece)", category: "Breakfast", serving: 1, unit: "piece", cal: 17, protein: 3.6, carbs: 0.2, fat: 0.1, fiber: 0, veg: false },
    { id: "F445", name: "Boiled Egg Yolk (1 piece)", category: "Breakfast", serving: 1, unit: "piece", cal: 55, protein: 2.7, carbs: 0.6, fat: 4.5, fiber: 0, veg: false },
    { id: "F446", name: "Half Boiled Egg", category: "Breakfast", serving: 1, unit: "piece", cal: 75, protein: 6, carbs: 0.5, fat: 5, fiber: 0, veg: false },

    // BOILED VEGETABLES
    { id: "F447", name: "Boiled Potato", category: "Vegetable", serving: 100, unit: "g", cal: 87, protein: 2, carbs: 20, fat: 0.1, fiber: 2, veg: true },
    { id: "F448", name: "Boiled Sweet Potato", category: "Vegetable", serving: 100, unit: "g", cal: 86, protein: 1.5, carbs: 20, fat: 0.1, fiber: 3, veg: true },
    { id: "F449", name: "Boiled Carrot", category: "Vegetable", serving: 100, unit: "g", cal: 35, protein: 0.8, carbs: 8, fat: 0.2, fiber: 2.5, veg: true },
    { id: "F450", name: "Boiled Broccoli", category: "Vegetable", serving: 100, unit: "g", cal: 35, protein: 2.4, carbs: 7, fat: 0.4, fiber: 3.3, veg: true },
    { id: "F451", name: "Boiled Cauliflower", category: "Vegetable", serving: 100, unit: "g", cal: 23, protein: 1.8, carbs: 4.5, fat: 0.3, fiber: 2, veg: true },
    { id: "F452", name: "Boiled Cabbage", category: "Vegetable", serving: 100, unit: "g", cal: 23, protein: 1.2, carbs: 5, fat: 0.1, fiber: 2, veg: true },
    { id: "F453", name: "Boiled Spinach", category: "Vegetable", serving: 100, unit: "g", cal: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.4, veg: true },
    { id: "F454", name: "Boiled Green Peas", category: "Vegetable", serving: 100, unit: "g", cal: 84, protein: 5.4, carbs: 16, fat: 0.4, fiber: 5.5, veg: true },
    { id: "F455", name: "Boiled Beetroot", category: "Vegetable", serving: 100, unit: "g", cal: 44, protein: 1.7, carbs: 10, fat: 0.2, fiber: 2, veg: true },
    { id: "F456", name: "Boiled Corn", category: "Vegetable", serving: 100, unit: "g", cal: 96, protein: 3.4, carbs: 21, fat: 1.5, fiber: 2.4, veg: true },
    { id: "F457", name: "Boiled Green Beans", category: "Vegetable", serving: 100, unit: "g", cal: 35, protein: 2, carbs: 8, fat: 0.1, fiber: 3.4, veg: true },

    // BOILED GRAINS & LEGUMES
    { id: "F458", name: "Boiled Rice (White)", category: "Main", serving: 100, unit: "g", cal: 130, protein: 2.7, carbs: 28, fat: 0.3, fiber: 0.4, veg: true },
    { id: "F459", name: "Boiled Rice (Brown)", category: "Main", serving: 100, unit: "g", cal: 112, protein: 2.6, carbs: 24, fat: 0.9, fiber: 1.8, veg: true },
    { id: "F460", name: "Boiled Moong Dal", category: "Main", serving: 100, unit: "g", cal: 105, protein: 7, carbs: 18, fat: 0.4, fiber: 4, veg: true },
    { id: "F461", name: "Boiled Toor Dal", category: "Main", serving: 100, unit: "g", cal: 116, protein: 7.5, carbs: 20, fat: 0.5, fiber: 5, veg: true },
    { id: "F462", name: "Boiled Chana", category: "Main", serving: 100, unit: "g", cal: 164, protein: 9, carbs: 27, fat: 2.5, fiber: 8, veg: true },
    { id: "F463", name: "Boiled Rajma", category: "Main", serving: 100, unit: "g", cal: 127, protein: 9, carbs: 23, fat: 0.5, fiber: 6, veg: true },
    { id: "F464", name: "Boiled Black Chana", category: "Main", serving: 100, unit: "g", cal: 160, protein: 10, carbs: 26, fat: 2.5, fiber: 7, veg: true },
    { id: "F465", name: "Boiled Lobia (Black Eyed Peas)", category: "Main", serving: 100, unit: "g", cal: 116, protein: 8, carbs: 21, fat: 0.5, fiber: 5, veg: true }
];

// Exercise Database with MET values
const EXERCISES = [
    // CARDIO
    { id: "E001", name: "Walking (Slow)", category: "Cardio", met: 2.5, intensity: "Low" },
    { id: "E002", name: "Walking (Brisk)", category: "Cardio", met: 3.8, intensity: "Medium" },
    { id: "E003", name: "Jogging", category: "Cardio", met: 7.0, intensity: "Medium" },
    { id: "E004", name: "Running", category: "Cardio", met: 9.8, intensity: "High" },
    { id: "E005", name: "Sprinting", category: "Cardio", met: 14.5, intensity: "High" },
    { id: "E006", name: "Cycling (Slow)", category: "Cardio", met: 4.0, intensity: "Low" },
    { id: "E007", name: "Cycling (Moderate)", category: "Cardio", met: 6.8, intensity: "Medium" },
    { id: "E008", name: "Cycling (Fast)", category: "Cardio", met: 10.0, intensity: "High" },
    { id: "E009", name: "Swimming (Slow)", category: "Cardio", met: 5.8, intensity: "Medium" },
    { id: "E010", name: "Swimming (Fast)", category: "Cardio", met: 9.8, intensity: "High" },
    { id: "E011", name: "Jump Rope", category: "Cardio", met: 11.0, intensity: "High" },
    { id: "E012", name: "Stair Climbing", category: "Cardio", met: 8.8, intensity: "High" },
    { id: "E013", name: "Elliptical", category: "Cardio", met: 5.0, intensity: "Medium" },
    { id: "E014", name: "Rowing Machine", category: "Cardio", met: 7.0, intensity: "Medium" },
    { id: "E015", name: "Dancing", category: "Cardio", met: 5.5, intensity: "Medium" },
    { id: "E016", name: "Zumba", category: "Cardio", met: 6.5, intensity: "Medium" },
    { id: "E017", name: "Aerobics", category: "Cardio", met: 6.8, intensity: "Medium" },
    { id: "E018", name: "HIIT", category: "Cardio", met: 12.0, intensity: "High" },
    { id: "E019", name: "Burpees", category: "Cardio", met: 8.0, intensity: "High" },
    { id: "E020", name: "Jumping Jacks", category: "Cardio", met: 8.0, intensity: "High" },

    // STRENGTH
    { id: "E021", name: "Weight Training (Light)", category: "Strength", met: 3.5, intensity: "Low" },
    { id: "E022", name: "Weight Training (Moderate)", category: "Strength", met: 5.0, intensity: "Medium" },
    { id: "E023", name: "Weight Training (Vigorous)", category: "Strength", met: 6.0, intensity: "High" },
    { id: "E024", name: "Push-ups", category: "Strength", met: 8.0, intensity: "Medium" },
    { id: "E025", name: "Pull-ups", category: "Strength", met: 8.0, intensity: "High" },
    { id: "E026", name: "Squats", category: "Strength", met: 5.5, intensity: "Medium" },
    { id: "E027", name: "Lunges", category: "Strength", met: 4.0, intensity: "Medium" },
    { id: "E028", name: "Plank", category: "Strength", met: 4.0, intensity: "Medium" },
    { id: "E029", name: "Deadlifts", category: "Strength", met: 6.0, intensity: "High" },
    { id: "E030", name: "Bench Press", category: "Strength", met: 5.0, intensity: "Medium" },

    // YOGA
    { id: "E031", name: "Yoga (Hatha)", category: "Yoga", met: 2.5, intensity: "Low" },
    { id: "E032", name: "Yoga (Vinyasa)", category: "Yoga", met: 4.0, intensity: "Medium" },
    { id: "E033", name: "Yoga (Power)", category: "Yoga", met: 5.5, intensity: "Medium" },
    { id: "E034", name: "Yoga (Bikram/Hot)", category: "Yoga", met: 5.0, intensity: "Medium" },
    { id: "E035", name: "Surya Namaskar", category: "Yoga", met: 4.5, intensity: "Medium" },
    { id: "E036", name: "Pranayama", category: "Yoga", met: 1.5, intensity: "Low" },
    { id: "E037", name: "Meditation", category: "Yoga", met: 1.0, intensity: "Low" },
    { id: "E038", name: "Stretching", category: "Yoga", met: 2.3, intensity: "Low" },

    // SPORTS
    { id: "E039", name: "Cricket", category: "Sports", met: 5.0, intensity: "Medium" },
    { id: "E040", name: "Badminton", category: "Sports", met: 5.5, intensity: "Medium" },
    { id: "E041", name: "Tennis", category: "Sports", met: 7.3, intensity: "High" },
    { id: "E042", name: "Football", category: "Sports", met: 7.0, intensity: "High" },
    { id: "E043", name: "Basketball", category: "Sports", met: 6.5, intensity: "High" },
    { id: "E044", name: "Volleyball", category: "Sports", met: 4.0, intensity: "Medium" },
    { id: "E045", name: "Table Tennis", category: "Sports", met: 4.0, intensity: "Medium" },
    { id: "E046", name: "Kabaddi", category: "Sports", met: 8.0, intensity: "High" },
    { id: "E047", name: "Hockey", category: "Sports", met: 7.8, intensity: "High" },
    { id: "E048", name: "Golf", category: "Sports", met: 3.5, intensity: "Low" },

    // DAILY ACTIVITIES
    { id: "E049", name: "House Cleaning", category: "Daily", met: 3.3, intensity: "Low" },
    { id: "E050", name: "Cooking", category: "Daily", met: 2.5, intensity: "Low" },
    { id: "E051", name: "Gardening", category: "Daily", met: 4.0, intensity: "Medium" },
    { id: "E052", name: "Playing with Kids", category: "Daily", met: 4.5, intensity: "Medium" },
    { id: "E053", name: "Shopping (Walking)", category: "Daily", met: 2.3, intensity: "Low" },
    { id: "E054", name: "Climbing Stairs", category: "Daily", met: 8.8, intensity: "High" },
    { id: "E055", name: "Standing Work", category: "Daily", met: 2.3, intensity: "Low" }
];

// Food emoji mapping
const FOOD_EMOJIS = {
    "Breakfast": "🍳", "Main": "🍚", "Curry": "🍛", "Starter": "🥘",
    "Snack": "🥟", "Dessert": "🍮", "Beverage": "☕", "Dairy": "🧈",
    "Fruit": "🍎", "Vegetable": "🥬"
};

// Exercise icon mapping
const EXERCISE_ICONS = {
    "Cardio": "fa-running", "Strength": "fa-dumbbell", "Yoga": "fa-spa",
    "Sports": "fa-futbol", "Daily": "fa-home"
};
