// UC1 - Ability to check Employee is Present or Absent
function checkAttendance() {
    const randomNumber = Math.random().toFixed(2);
    let attendence = 0;
    if (randomNumber > 0.5) {
        attendence = 1;

    }

    return attendence;
}
`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               `
const attendence = checkAttendance();
// if (attendence) {
//     console.log("The Employee is Present");
// }
// else {
//     console.log("The Employee is Absent");
// }

// UC2 - Ability to Calculate Employee Wage based on Part time or Full Time work
function getWorkType() {
    let workType = 0;
    const randomNumber = Math.random().toFixed(2);

    if (randomNumber < 0.33) {
        workType = 1;
    } else if (randomNumber < 0.66) {
        workType = 0;
    } else {
        workType = 2;
    }

    return workType;
}

// const workType = getWorkType();
// const partTimeWage = 4;
// const fullTimeWage = 8;
// const noTimeWage = 0;
// const perHourWage = 20;

// if (attendence) {

//     switch (workType) {
//         case 0:
//             console.log(`The Employee Wage for No Working Hours is: ${noTimeWage * perHourWage}`);
//             break;
//         case 1:
//             console.log(`The Employee Wage for 4 Hours on $20/hour is: ${partTimeWage * perHourWage}`);
//             break;
//         case 2:
//             console.log(`The Employee Wage for 8 Hours on $20/hour is: ${fullTimeWage * perHourWage}`);
//     }

// }
// else {
//     console.log("No Wage as the Employee is Absent");
// }


// UC3 - Refactor the code to calculate the daily wage into a function
function calculateDailyWage() {
    const workType = getWorkType();
    const partTimeWage = 4;
    const fullTimeWage = 8;
    const noTimeWage = 0;
    const perHourWage = 20;

    if (attendence) {

        let dailyWage = 0;
        switch (workType) {
            case 0:
                dailyWage = noTimeWage * perHourWage;
                break;
            case 1:
                dailyWage = partTimeWage * perHourWage;
                break;
            case 2:
                dailyWage = fullTimeWage * perHourWage;
        }

        return dailyWage;
    }
    else {
        return 0;
    }
}

const dailyWage = calculateDailyWage();
console.log(`The Daily Wage of the Employee is: ${dailyWage}`);


// // UC4 - Calculate Wages for a Month assuming 20 Working Days in a Month
// let monthlyWage = 0;
// for (let i = 0; i < 20; i++) {
//     monthlyWage += calculateDailyWage();
//     console.log(`Wage till Day ${i + 1} is: ${monthlyWage}`);
// }
// console.log(`The Monthly Wage of the Employee is: ${monthlyWage}`);


// UC5 - Calculate Wages till a condition of total working hours of 160 or max days is reached of 20
let hours = 0;
let days = 0;
let wage = 0;
while (hours <= 160 && days <= 20) {
    const workType = getWorkType();
    switch (workType) {
        case 1:
            days++;
            break;
        case 0:
            hours += 4;
            days++;
            wage += 20 * 4;
            break;
        case 2:
            hours += 8;
            days++;
            wage += 20 * 8;
            break;
    }
}

console.log(`Total Working Hours: ${hours}`);
console.log(`Total Working Days: ${days}`);
console.log(`Total Wage for the Month: $${wage}`);




