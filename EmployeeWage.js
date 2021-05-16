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

//----------------Helper Functions-----------------

//UC7A--->

let totalEmpWage = 0;
function sum(dailyWage){
        totalEmpWage += dailyWage;
}

        empDailyWageArray.forEach(sum);
        console.log("UC7A--->\n Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);

function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
}
console.log("UC7A --->\nEmpWage with reduce: " + empDailyWageArray.reduce(totalWages, 0));

//UC7B----->
let dailyCount = 0;

let mapDayWithWageArray = new Array();

function mapDayWithWage(dailyWage){
        dailyCount++;
        return dailyCount + " = " + dailyWage;
}
//UC7C
function fulltimeWage(dailyWage) {
        return dailyWage.includes("160");
 }
 let fullDayWageArr = mapDayWithWageArray.filter(fulltimeWage);
 console.log("UC7C- Daily Wage Filter When Fulltime Wage Earned");
 console.log(fullDayWageArr);
 
//UC7D
function findFulltimeWage(dailyWage) {
      return dailyWage.includes("160");
 }
 console.log("UC 7D - First time FullTime wage was earned on day :"+ mapDayWithWageArray.find(findFulltimeWage));
 
//UC7E
function isAllFulltimeWage(dailyWage) {
      return dailyWage.includes("160");
 }
 console.log("UC 7E - check All Elements have FullTime wage :"+ fullDayWageArr.every(isAllFulltimeWage));
 
//UC7F
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
 }
 console.log("UC 7E - check If Any Part Time wage :"+ mapDayWithWageArray.some(isAnyPartTimeWage));
 
//UC7G
function totalDaysWorked(numOfDays, dailyWage) {
      if (dailyWage > 0) return numOfDays+1;
      return numOfDays;
 }
 console.log("UC 7G - Number of Days Emp Worked :"+ empDailyWageArray.reduce(totalDaysWorked, 0));
