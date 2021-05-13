console.log("Welcome to the Employee Wage program using Java Script");

const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME = 2;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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

empCheck =  Math.floor(Math.random() * 10) % 3;
let empWage = getWorkingHours(empCheck) * WAGE_PER_HOUR;
console.log("Emp Wage :" + empWage);
