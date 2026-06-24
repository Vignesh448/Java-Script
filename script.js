<<<<<<< HEAD

var EmployeeName = "Vignesh";
let EmployeeAge = 26;
const CompanyName = "Stackly";

console.log("Employee Name :", EmployeeName);

console.log( "Employee Age:", EmployeeAge);
console.log("Company Name:", CompanyName);

// 5. Show a popup message:
alert("Welcome to Employee Portal");

// 6. Ask the employee:

let taskCompleted = confirm("Have You completed today`s task");
console.log("taskCompleted");

// 7. Ask the employee name using prompt().
var employeeName = prompt("Enter your Name");
console.log("Employee Name :" + employeeName);

// 8. Display the entered employee name on the webpage.

document.writeln("Welcome" + employeeName );

// 9. Print a success message using console.warn().
 console.warn("Task submitted Successfully");

 // 10. Print an error message using console.error().
 console.error("Task Submission Failed");

 // Bonus Task:
 EmployeeAge = 27;
 console.log("Updated Employee Age:", EmployeeAge);
=======
//Task 1: Employee Information System 

let Employee = {
    name : prompt("Enter Your Name"),
    age   : prompt("Enter Your Age"),
    Department: prompt("Enter your Department"),
    salary : prompt("Enter Your Salary")
}
console.log( `
    Employee Details :
    
    Employee Name       : ${Employee.name}
    Employee Age        : ${Employee.age} 
    Employee Department : ${Employee.Department}
    Employee Salary     : ${Employee.salary}`);
if(Employee.salary>30000){
    console.log(  "Eligible for Bonus");
    
}else{
    console.log("Not Eligible");
}

//Task 2: Supermarket Billing 

let Product = prompt("Enter Product Name");
let Price = prompt("Enter Price");
let Quantity = prompt("Enter Quantity");

let Total = Price*Quantity;
let finalamount;

if(Total>5000){
    FinalAmount = Total - (Total*0.10);
    console.log("10% Discount Applied");
    
}else{
    FinalAmount = Total;
    console.log("No Discount");
    
}

console.log(`Final Amount : ${FinalAmount}`);

//Task 3: Student Result Portal

let studentname = prompt("Enter Student Name");
let Marks  = prompt("Enter Your Marks");

if(Marks>=90){
    console.log(`${studentname} : GradeA`);
}else if(Marks>=75){
    console.log(`${studentname} : GradeB`);
} else if(Marks>=50){
    console.log(`${studentname} : GradeB`);
}else {
 console.log(`${studentname} :Fail`);
}

// Task 4: Bank ATM Eligibility

let UserName = prompt("Enter Your Name");
let Accbalance = prompt("Account Balance");
let Withdrawalamount = prompt("Enter Withdrawal amount");

if(Withdrawalamount<=Accbalance){
    console.log("Transaction Successful");
}else{
    console.log("Insufficient Balance");
}

console.log(`UserName : ${UserName}
  Account Balance : ${Accbalance}
  Withdrawal Amount: ${Withdrawalamount}`);

  //Task 5: Login Validation

  let username = "admin";
let password = "12345";

let usernameinput = prompt("User Name");
let passwordinput = prompt("Enter Your admin password");

if(username == usernameinput && password == passwordinput){
    console.log("Login Successful");
    
}else{
    console.log("Invalid Username or Password");
    
}

//Task 6: Online Food Order

let Fooditems = ["Dosa","Idly","Chapathi","Pizza","Burgar","Sandwich","Biriyani","chicken","cocunent"]

console.log(`First Item : ${Fooditems[0]}`);
console.log(`Last Item : ${Fooditems[Fooditems.length-1]}`);
console.log(`Total Item : ${Fooditems.length}`)

for(let item of Fooditems ){
    console.log(item);
}
//Task 7: Company Employee Directory

let Employeeobject = {
    name:"Vignesh",
age:"26",
department:"Full Stack Developer",
salary:"10000",
experience:"3"
}

for (let directory in Employeeobject ){
    console.log(directory +":"+Employeeobject[directory]); 
}

//Task 8: Traffic Signal System

let Signalcolour = prompt("Search Signal Colour") ;

switch(Signalcolour) {
    case "red" : console.log("Stop"); break;
    case "Yellow": console.log("Ready"); break;
    case "Green" : console.log("Go"); break;
    
    default : console.log("Invalid signal");      
}

//Task 9: Age Category Checker

let Agechecker = prompt("Enter Your Age");

if(Agechecker>0 && Agechecker<=12){
    console.log("Child");
} else if(Agechecker>=13 && Agechecker<=19){
    console.log("Teenager");
} else if (Agechecker>=20 && Agechecker<=59){
    console.log("Adult");
}else{
    console.log("Senior Citizen");
}

//Task 10: Employee Attendance

let employeeName = prompt("Enter Employee Name");

let attendance = prompt("Enter Attendance");

console.log("Welcome " + employeeName);

attendance == "Present"

    ? console.log("Attendance: Present")

    : console.log("Attendance: Absent");
 










>>>>>>> 8a721720ee03c983bd0bfe1185b95634ff4db61c
