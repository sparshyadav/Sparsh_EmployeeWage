# Employee Wage 
### **UC1 - Check Employee is Present or Absent** 
**Solution:**  
- Generate a random number between 0 and 1 using `Math.random()`.
- If the generated number is greater than 0.5, the employee is marked as present.
- Otherwise, the employee is marked as absent


### **UC2 - Calculate Employee Wage Based on Work Type**
**Solution:**  
- Use the random number generated to decide the employee's work type:
  - If the number is less than 0.33, the employee works Full-Time (8 hours).
  - If the number is between 0.33 and 0.66, the employee works Part-Time (4 hours).
  - If the number is greater than 0.66, the employee is Absent (0 hours).
- Calculate the wage based on the hours worked, assuming a rate of $20 per hour:
  - Full-time: `8 * $20`
  - Part-time: `4 * $20`
  - Absent: `$0`


### **UC3 - Refactor Code to Write a Function**
**Solution:**  
- Create a function that encapsulates the logic for:
  - Determining the work type (full-time, part-time, or absent) based on random number ranges.
  - Calculating the daily wage based on work type and hourly rate.


### **UC4 - Calculate Wages for a Month**
**Solution:**  
- Use a function to calculate the wage for a single day.
- Multiply the daily wage by the total number of working days (20) for the month.


### **UC5 - Calculate Wages with Constraints**
**Solution:**  
- Initialize variables to track total hours worked, total days worked, and total wages earned.
- Use a `while` loop that continues until either of the following conditions is met:
  - Total hours worked reaches or exceeds 160.
  - Total days worked reaches or exceeds 20.
- Inside the loop:
  - Determine the wage for each day.
  - Update the total hours, total days, and total wages based on the work type.
