console.log("Welcome to the Employee Wage program using Java Script");

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME = 2;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

let totalEmpHRs = 0;
let totalWorkingDays = 0;

function getWorkingHours(empCheck){
    switch(empCheck){
    case IS_PART_TIME:
            return IS_PART_TIME_HOURS;
    case IS_FULL_TIME:
            return IS_FULL_TIME_HOURS;
    default :  
            return 0;
    }
}

while(totalEmpHRs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHRs += getWorkingHours(empCheck);
}

let empWage = totalEmpHRs * WAGE_PER_HOUR;
console.log("Total Days : " + totalWorkingDays + "\nTotal Working Hours: " + totalEmpHRs + "\nEmp Wage :" + empWage);