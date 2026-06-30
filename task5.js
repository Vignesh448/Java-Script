//task1. Employee Salary Problem

function getYearlySalary(){
     let monthlysalary = 45000;
     let YearlySalary = monthlysalary * 12;
     return YearlySalary;
     
}

let result = getYearlySalary();
console.log("Yearly Salary :", result);

// task2. Student Pass or Fail

function StudentResult(){
    let Studentmark = 72;
    if(Studentmark>=35){
        
        console.log("Pass");
        
    }else{
        console.log("Fail");
        
    }
}
 StudentResult();

 // task3. Food Bill

 function foodBill(){
    let Burger = 180;
    let orderquantity = 3;
    let total = Burger * orderquantity;
    return total;
 }

 let TotalPrice = foodBill();
 console.log("TotalPrice :", TotalPrice );

 //task4. Welcome Employee

function WelcomeEmployee(EmployeeName , Department){
    console.log("EmployeeName :",EmployeeName);
    console.log("Department :", Department);
}
WelcomeEmployee("Vignesh" , "FullStack Developer");

//task5. Shopping Discount

function onlineshoping(){
    let ProductPrice = 5000;
    let discountprice = 500 ;
    let Discount = ProductPrice - discountprice;
    return Discount;
}

let finalPrice = onlineshoping();
console.log("finalPrice :", finalPrice);


//6. Company Login

function Companyprofile(callback){
    console.log("LoginSuccessful");
    callback();
}
function Companydetail() {
    console.log("Loading Dashboard...");  
}

Companyprofile(Companydetail);

//7. Food Delivery

function foodDelivery(step) {
    console.log("Order Received");
    step();
}
function preparingFood() {
    console.log("Preparing Food");
    console.log("Out for Delivery");
    console.log("Delivered");
}
foodDelivery(preparingFood);

//task8. Lucky Draw

function* luckydraw(){
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better luck Next Time";
}
let Coupon = luckydraw();
console.log(Coupon.next().value);
console.log(Coupon.next().value);
console.log(Coupon.next().value);
console.log(Coupon.next().value);

//task9. Employee Bonus

function bonus(Salary){
    return function(Bonusamount){
        console.log("Total Salary :", Salary + Bonusamount);
        
    };
}

bonus(50000)(5000);

//task10. Merge Employee Details

let employeepersonal ={
    Name : "Vignesh",
    Age : 26 
};

let EmployeeOffice ={
    Department : "FullStack Developer",
    ID : "ID001"
}

let EmployeeDetails = {...employeepersonal,...EmployeeOffice};
console.log(EmployeeDetails);

//task11. Shopping Cart

let Cart1 = ["Shirt","Pant"];
let Cart2 = ["Watch","Belt"]

let Mencart = [...Cart1,...Cart2];
console.log(Mencart);

//task12. Student Marks

function student(Name,...Marks){
 
    let total = 0;
    for(let mark of Marks){
        total += mark;
    }
   let average = total/Marks.length

   console.log("Student Name :", Name);
   console.log("Total Marks :", total);
   console.log("Average :", average);
}
student("Naveen",90,85,88,95)

//Task13. Product Details

let Product ={
    Name : "Laptop",
    Price :65000,
    Brand :"Dell",
    Stock: 20
}

let {Name,Price} = Product
console.log("Product Name :", Name);
console.log("Product Price :", Price);

//task14. Customer Details

let custDetails = [101,"Naveen","Chennai",9876543210];

let[id,Name1,city] = custDetails;
console.log("ID :", id);
console.log("Name :", Name1);
console.log("City :", city);

//task15. Add Product

let cartmat= ["Mobile","Laptop"];

cartmat.push("Headphone");

console.log(cartmat);


//task16. Remove Last Product

let Cart3 = ["Mobile","Laptop","Headphone"] ;

Cart3.pop();
console.log(Cart3);

//task17. Replace Employee

let array = ["Rahul","Arun","John","David"];

array.splice(2,1,"Naveen");

console.log(array);


//task18. Search Product

let Products = ["Mouse","Keyboard","Monitor","Laptop"];

console.log(Products.includes("Laptop"));


//tasak19. Employee Ranking

let Salaries = [25000,45000,30000,70000];

console.log(Salaries.sort());

//task20. Reverse Chat Messages

let messages = ["Hi","Hello","How are you?","Good Morning"];

console.log(messages.reverse());








//Mini Project: Employee Management System

// Employee Management System

let Employees = [
    {
        ID: "ID001",
        Name: "Vignesh",
        Department: "FullStack Developer",
        Salary: 50000,
        Bonus: 5000
    },
    {
        ID: "ID002",
        Name: "Rahul",
        Department: "Testing",
        Salary: 40000,
        Bonus: 4000
    }
];


// Add Employee

Employees.push({
    ID: "ID003",
    Name: "Naveen",
    Department: "Java Developer",
    Salary: 45000,
    Bonus: 4500
});
console.log("Employees");
console.log(Employees);

// View Employees

console.log("Employee List");
console.log(Employees);

// Search Employee by ID

for (let employee of Employees) {
    if (employee.ID == "ID002") {
        console.log(employee);
    }
}
 
// Calculate Salary + Bonus

let TotalSalary = Employees[0].Salary + Employees[0].Bonus;
console.log("Total Salary :",TotalSalary);

// Remove Employee

Employees.splice(1,1);
console.log("After Remove Employee");
console.log(Employees);

// Sort Employees by Salary

Employees.sort((a,b)=>a.Salary-b.Salary);
console.log("Salary Wise");
console.log(Employees);

// Find Employee by Name

for (let employee of Employees) {
    if (employee.Name == "Naveen") {
        console.log(employee);
    }
}
 
// Display Employee Details using Object Destructuring

let {
    ID,
    Name: EmployeeName,
    Department,
    Salary,
    Bonus
} = Employees[0];
console.log("ID :", ID);
console.log("Name :", EmployeeName);
console.log("Department :", Department);
console.log("Salary :", Salary);
console.log("Bonus :", Bonus);
 
 