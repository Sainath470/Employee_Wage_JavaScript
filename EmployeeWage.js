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

let day = 0;
let totalEmployeeHours = 0;
let empDailyHoursAndWageArr = new Array();
let dailyHrsWage = new Array();

while(totalEmployeeHours <= MAX_HRS_IN_MONTH && day < Max_NUM_OF_WORKING_DAYS){
        day++;
        let empCheck = Math.floor((Math.random() *10) % 3);
        let empHrs = getWorkingHours(empCheck);
        totalEmployeeHours += empHrs;
        empDailyHoursAndWageArr.push({
                numberOfDay: day,
                dailyHrs: empHrs,
                dailyWage: calculateDailyWage(empHrs),
                toString(){
                        return(
                                "\n Day" + this.numberOfDay +
                                " -->  working hours " +
                                this.dailyHrs +
                                " and wage earned " +
                                this.dailyWage
                        );
                },
        });             
}

let empWage = calculateDailyWage(totalEmployeeHours);

console.log("Total number of days "+ day + "\n And total hrs " + totalEmployeeHours + "\n Emp Wage: "+ empWage);

//Calculating total Wage of Employee
let totalWages = empDailyHoursAndWageArr.filter((dailyWagesAndHrs) => dailyWagesAndHrs.dailyWage > 0).reduce((totalWage , dailyWagesAndHrs) => (totalWage += dailyWagesAndHrs.dailyWage), 0);

//calculating total employee hours Worked
let totalHours = empDailyHoursAndWageArr.filter((dailyWagesAndHrs) => dailyWagesAndHrs.dailyWage > 0)
                                        .reduce((totalHours, dailyWagesAndHrs) => (totalHours += dailyWagesAndHrs.dailyHrs), 0);

console.log("total hrs: " + totalHours + " total wages: " + totalWages);                                  

//showing full time non working days along with wages
process.stdout.write("UC 11: Logging full work days");

empDailyHoursAndWageArr
        .filter((dailyWagesAndHrs) => dailyWagesAndHrs.dailyHrs == 8)
        .forEach((dailyWagesAndHrs) =>
        process.stdout.write(dailyWagesAndHrs.toString())
);

        
let partTimeWorkingDaysStrArr = empDailyHoursAndWageArr
        .filter((dailyWagesAndHrs) => dailyWagesAndHrs.dailyHrs == 4 )
        .map((dailyWagesAndHrs) => dailyWagesAndHrs.toString()
);

console.log("\nPart Time Working days String: " + partTimeWorkingDaysStrArr);

let numberOfNonWorkingDays = empDailyHoursAndWageArr
        .filter((dailyWagesAndHrs) => dailyWagesAndHrs.dailyHrs == 0)
        .map((dailyWagesAndHrs) => dailyWagesAndHrs.numberOfDay);

console.log("Number of non Working days: "+ numberOfNonWorkingDays);

let firstFullWageEarnedByEmployee = empDailyHoursAndWageArr.find((dailyWagesAndHrs) =>
        dailyWagesAndHrs.dailyHrs == 8);

console.log("first full salary on day: " + firstFullWageEarnedByEmployee);

let isAllElementHoldingFullTimeWage = empDailyHoursAndWageArr.every(
        (dailyHrsWage) => dailyWagesAndHrs.dailyHrs == 8);

        console.log("Check every element is holding full Wage: " + isAllElementHoldingFullTimeWage);

//Find the no. of working days of Employee
let numberOfWorkingDays = empDailyHoursAndWageArr.filter((dailyWagesAndHrs) => dailyHrsWage.dailyHrs > 0).
reduce((numberOfNonWorkingDays, dailyHrsWage) => {
        if(dailyWagesAndHrs > 0) 
        numberOfNonWorkingDays += 1;
});

console.log(" Number of Working days:" + numberOfNonWorkingDays);