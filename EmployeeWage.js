// UC1 - Ability to check Employee is Present or Absent
const randomNumber = Math.random().toFixed(2);
let attendence = 0;
if (randomNumber > 0.5) {
    attendence = 1;
    console.log("The Employee is Present");
}
else {
    console.log("The Employee is Absent");
}

// // UC2 - Ability to Calculate Employee Wage based on Part time or Full Time work
// let workType = 0;
// if (randomNumber < 0.33) {
//     workType = 1;
// }
// else if (randomNumber > 0.33 && randomNumber < 0.66) {
//     workType = 2;
// }

// switch (workType) {
//     case 1:
//         console.log(`The Employee Wage for 8 Hours on $20/hour is: ${20 * 8}`);
//         break;
//     case 0:
//         console.log(`The Employee Wage for 4 Hours on $20/hour is: ${20 * 4}`);
//         break;
//     case 2:
//         console.log(`Due to No Working Hours, the total Wage is $0`);
// }

// UC3 - Refactor the Code to write a function to get work hours
function calculateWages() {
    let workType = 0;
    if (randomNumber < 0.33) {
        workType = 1;
    }
    else if (randomNumber > 0.33 && randomNumber < 0.66) {
        workType = 2;
    }

    let wage = 0;
    switch (workType) {
        case 1:
            console.log(`The Employee Wage for 8 Hours on $20/hour is: ${20 * 8}`);
            wage = 20 * 8;
            break;
        case 0:
            console.log(`The Employee Wage for 4 Hours on $20/hour is: ${20 * 4}`);
            wage = 20 * 4;
            break;
        case 2:
            console.log(`Due to No Working Hours, the total Wage is $0`);
            break;
    }

    return wage;
}
// calculateWages();

// UC4 - Calculating Wages for a Month
let oneDayWage = calculateWages();
let totalWage = 20 * oneDayWage;
console.log(`The Total Wage of Employee for a Month is $${totalWage}`);