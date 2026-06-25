//Task 1: Employee Management System
let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    }
];
for (let emp of employees) {
    console.log("Employee Name: " + emp.name);
    console.log("Employee ID: " + emp.id);
    console.log("Employee Salary: " + emp.salary);
    if (emp.salary >= 50000) {
        console.log("Employee Eligible For Bonus");
    } else {
        console.log("Employee Not Eligible For Bonus");
    }
}
 
// Task 2: Student Result Portal

let tamil = Number(prompt("Enter Tamil Mark:"));
let english = Number(prompt("Enter English Mark:"));
let maths = Number(prompt("Enter Maths Mark:"));
let total = tamil + english + maths;
let percentage = total / 3;
console.log("Total Marks: " + total);
console.log("Percentage: " + percentage);
if (percentage >= 90) {
    console.log("Grade: A+");
}
else if (percentage >= 80) {
    console.log("Grade: A");
}
else if (percentage >= 70) {
    console.log("Grade: B");
}
else if (percentage >= 60) {
    console.log("Grade: C");
}
else {
    console.log("Grade: Fail");
}


//Task 3: E-Commerce Cart

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];
function calculateBill() {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    console.log("Total Bill: " + total);
    if (total > 5000) {
        let discount = total * 0.10;
        let finalBill = total - discount;
        console.log("10% Discount: " + discount);
        console.log("Final Bill: " + finalBill);
    } else {
        console.log("No Discount");
        console.log("Final Bill: " + total);
    }
}
calculateBill();

//Task 4: Login Authentication

let username = "admin";
let password = "12345";
let inputUsername = prompt("Enter Username:");
let inputPassword = prompt("Enter Password:");
(inputUsername === username && inputPassword === password)
    ? console.log("Login Success")
    : console.log("Invalid Credentials");

//Task 5: Traffic Signal System

let color = prompt("Enter Signal Color:");

switch (color) {

         case "red":console.log("Stop");break;
         case "yellow":console.log("Ready");break;
         case "green":console.log("Go");break;
    default:
        console.log("Invalid Signal");
}

//Task 6: ATM Withdrawal System

let balance = Number(prompt("Enter Account Balance:"));
let withdraw = Number(prompt("Enter Withdrawal Amount:"));
if (withdraw <= balance) {
    console.log("Transaction Successful");
    console.log("Remaining Balance: " + (balance - withdraw));
} else {
    console.log("Insufficient Balance");
}

//Task 7: Online Food Order

function orderFood(callback) {
    console.log("Order Received");
    callback();
}
function prepareFood() {
    console.log("Food Preparing");
    deliverFood();
}
function deliverFood() {
    console.log("Food Delivered");
}
orderFood(prepareFood);


//Task 8: Cashback Generator (Generator Function)

function* cashbackGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}
let offers = cashbackGenerator();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

//Task 9: Hospital Patient Check

let age = Number(prompt("Enter Age:"));
let weight = Number(prompt("Enter Weight:"));

if (age > 18) {
    if (weight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}

//Task 10: Final Real-Time Project

employees = [
    { id: 101, name: "Naveen", salary: 30000 },
    { id: 102, name: "John", salary: 60000 }
];


function addEmployee(id, name, salary) {
    employees.push({ id, name, salary });
    console.log("Employee Added");
}


function viewEmployee() {
    for (let emp of employees) {
        console.log("Employee Name: " + emp.name);
        console.log("Employee ID: " + emp.id);
        console.log("Employee Salary: " + emp.salary);
        console.log("----------------------------");
    }
}


function calculateBonus() {
    for (let emp of employees) {
        console.log("Employee Name: " + emp.name);
        if (emp.salary >= 50000) {
            console.log("Bonus Status: Eligible For Bonus");
        } else {
            console.log("Bonus Status: Not Eligible For Bonus");
        }
        console.log("----------------------------");
    }
}


function searchEmployee(id) {
    for (let emp of employees) {
        if (emp.id === id) {
            console.log("Employee Found");
            console.log("Employee Name: " + emp.name);
            console.log("Employee ID: " + emp.id);
            console.log("Employee Salary: " + emp.salary);
            return;
        }
    }
    console.log("Employee Not Found");
}


function updateEmployee(id, newSalary) {
    for (let emp of employees) {
        if (emp.id === id) {
            emp.salary = newSalary;
            console.log("Employee Updated");
            return;
        }
    }
    console.log("Employee Not Found");
}


function deleteEmployee(id) {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees.splice(i, 1);
            console.log("Employee Deleted");
            return;
        }
    }
    console.log("Employee Not Found");
}

function totalEmployees() {
    console.log("Total Employees: " + employees.length);
}

function employeePortal(callback) {
    callback();
}

addEmployee(103, "Priya", 55000);
employeePortal(viewEmployee);
employeePortal(calculateBonus);
searchEmployee(102);
updateEmployee(103, 65000);
deleteEmployee(101);
totalEmployees();
 
