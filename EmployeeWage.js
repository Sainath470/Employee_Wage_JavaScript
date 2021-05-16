console.log("Welcome to the Employee Wage program using Java Script");
/**
 * Constant Values
 */
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_PART_TIME_HOURS = 4;
const IS_FULL_TIME = 2;
const IS_FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Max_NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

/**
 * 
 * @param {gives Whether employee is Present or Absent} empCheck 
 * @returns {employee wotking hours if present if not returns zero}
 */
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

/**
 * 
 * @param {Calculates every day wage of employee} empHrs 
 * @returns total wage based on the employee hours
 */
function calculateDailyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
}

let totalWorkingDays = 0;
let totalEmpHrs = 0;
let empDailyWageArray = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < Max_NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck  = Math.floor(1+(Math.random() * 10) % 3);
        totalEmpHrs += getWorkingHours(empCheck);
        empDailyWageArray.push(calculateDailyWage(totalEmpHrs))
        
}

let empWage = calculateDailyWage(totalEmpHrs);
console.log("<-----UC6--->\nTotal Days: " + totalWorkingDays + "\nTotal Hrs:" + totalEmpHrs + "\nEmp Wage: " + empWage);
