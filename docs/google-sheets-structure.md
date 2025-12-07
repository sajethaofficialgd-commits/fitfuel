# 📊 Google Sheets Database Structure

Create a Google Spreadsheet named **"FitTrack_India_Database"** with these tabs:

## 1️⃣ Sheet: Users
```
Email | Name | Age | Gender | Height | Weight | Goal | Activity_Level | BMR | Daily_Calories | Protein_Target | Carbs_Target | Fat_Target | Ideal_Weight_Min | Ideal_Weight_Max | Created_Date | Last_Login
```

## 2️⃣ Sheet: Food_Logs
```
Log_ID | Date | Time | Email | Food | Quantity | Unit | Calories | Protein | Carbs | Fat | Fiber | Meal_Type
```

## 3️⃣ Sheet: Exercise_Logs
```
Log_ID | Date | Time | Email | Exercise | Duration_Minutes | Intensity | Calories_Burned | Category | Notes
```

## 4️⃣ Sheet: Step_Logs
```
Log_ID | Date | Email | Steps | Calories_Burned | Distance_KM | Active_Minutes | Goal_Steps | Goal_Achieved
```

## 5️⃣ Sheet: Daily_Summary
```
Summary_ID | Date | Email | Calories_Eaten | Calories_Burned | Net_Calories | Target_Calories | Calorie_Status | Protein_Eaten | Carbs_Eaten | Fat_Eaten | Steps_Total | Exercise_Minutes | Water_Reminder | Meal_Suggestion | Generated_At
```

## 6️⃣ Sheet: Food_Database
```
Food_ID | Food_Name | Category | Serving_Size | Serving_Unit | Calories | Protein | Carbs | Fat | Fiber | Is_Vegetarian | Region
```

## 7️⃣ Sheet: Exercise_Database
```
Exercise_ID | Exercise_Name | Category | MET_Value | Calories_Per_Min_60kg | Intensity | Description
```

## Setup: Share spreadsheet with N8N service account email with edit access.
