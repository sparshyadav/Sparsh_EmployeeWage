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
    }
    else if (randomNumber > 0.33 ) {
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


// Refactor the code to calculate the daily wage into a function
function calculateDailyHours() {
    const workType = getWorkType();

    if (attendence) {

        let hours = 0;
        switch (workType) {
            case 0:
                hours = 0;
                break;
            case 1:
                hours = 4;
                break;
            case 2:
                hours = 8;
                break;
        }

        return hours;
    }
    else {
        return 0;
    }
}
// const dailyWage = calculateDailyWage();
// console.log(`The Daily Wage of the Employee is: ${dailyWage}`);


// UC3 - Calculate Wages for a Month assuming 20 Working Days in a Month
let monthlyWage = 0;
let monthlyHours=0;
let hours = 0;
for (let i = 0; i < 20; i++) {
    hours = calculateDailyHours();
    dailyWage = hours * 20;
    monthlyHours+=hours;
    monthlyWage += hours * 20;
    console.log(`Working Hours of Day ${i + 1} is: ${hours}`);
    console.log(`Hours till Day ${i + 1} is: ${monthlyHours}`);
    console.log(`Wage of Day ${i + 1} is: ${dailyWage}`);
    console.log(`Wage till Day ${i + 1} is: ${monthlyWage}`);
    console.log(" ")
}
console.log(`The Monthly Wage of the Employee is: ${monthlyWage}`);




