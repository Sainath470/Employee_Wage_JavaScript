console.log("Welcome to the Employee Wage program using Java Script");
const IS_ABSENT = 0;
let empCheck =  Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT){
    console.log("Employee is ABSENT");
    return;
}else{
    console.log("Employee is PRESENT");
}