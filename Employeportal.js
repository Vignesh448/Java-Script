//Task 1: Employee Registration

let employeeName = "Vignesh";
let employeeID = "STK-26-2401";
const department = "Full Stack Developer";
const salary = 50000;
const permanent = true;
console.log(`Employee Details
----------------
Name       : ${employeeName}
ID         : ${employeeID}
Department : ${department}
Salary     : ${salary}
Permanent  : ${permanent}`);

//Task 2: Employee Skills

var skills = ["HTML","CSS","JavaScript","React","Git","Node.js"];
console.log("first skills :",skills[0]);
console.log("Third skills :",skills[2]);
console.log("Last skills :",skills[skills.length-1]);
console.log("Total Skills skills :",skills);

//Task 3: Company Object

let companyobject = {
    Company :"lenova",
    Properties : "Laptop",


    CompanyName : "Stackly",
    location : "Coimbatore",
    employees : "Permanent",
    technologies : ["Science","Aeronatical","Maths"]
}
console.log("company Name :",companyobject.CompanyName );
console.log("Location:",companyobject.location );
console.log("Second Technology:",companyobject.technologies[1] );
console.log("Location:", companyobject.technologies );

//Task 4: Salary Calculator

let basicSalary = 30000;
let bonus = 5000;
let totalsalary =  basicSalary + bonus;
let Tax = totalsalary * 0.10;
let Finalsalary = totalsalary-Tax ;

console.log("Total Salary :", totalsalary);
console.log("Tax(10%) :",Tax);
console.log("Final Salary  :", Finalsalary);

//Task 5: Attendance Checker

let attendance = 92;

let Attendancechecker = attendance >= 75 ? "Eligible for Exam" : "Not Eligible"
console.log("Attendance :",Attendancechecker);

//Task 6: Login Verification

let username = "admin";
let password = "12345";

let Verification = username === "admin" && password === "12345" ? "Login Successful" : "Invalid Credentials"
console.log( "Login Verification:",Verification);

//Task 7: Product Billing

let ProductName = "Laptop";
let ProductPrice = 45000;
let Quantity = 2;

let totalBill = ProductPrice  * Quantity ;

console.log("Product :",ProductName );
console.log("Price :", ProductPrice);
console.log("Quantity :" ,Quantity);
console.log("Total :", totalBill);

//Task 8: Increment & Decrement

let visitors = 100;

// Pre Increment

console.log("Pre Increment :", ++visitors);

// // First increament, then use value

// Post Increment

console.log("Post Increment :", visitors++);

// First use value, then increase

console.log("Pre Decrement :", --visitors);

// First decrease, then use value
// Post Decrement

console.log("Post Decrement :", visitors--);

// First use value, then decrease

//Task 9: Comparison Checker

console.log(10 == "10");      // true (Comparing Both values)

console.log(10 === "10");     // false ( comparing value and datatype)

console.log(20 != "20");      // false ( values same but "not equal")

console.log(20 !== "20");     // true ( value same but data type is different)

console.log(5 < 10);          // true ( 5 is less than 10)

console.log(15 >= 20);        // false ( 15 is not greater than or equal to 20)

console.log(100 <= 100);      // true ( 100 is greater than or equal to 100  )  

//Task 10: User Interaction

var EmployeeName = prompt("Employee Name")
let Age =prompt("Employee Age")
let company = confirm("Do you want to join our company")

if (company) {
    alert("Welcome",EmployeeName);
}
else{
    alert("Thank You")
}


//Final Console Output

const experience = "3 Years"

companyobject = {
    CompanyName : "Stackly IT",
    location : "Coimbatore",
}




console.log("========================");
console.log("    EMPLOYEE PORTAL");
console.log("========================");

console.log(`
Name         : ${employeeName}

ID           : ${employeeID}

Department   : ${department}

Experience   : ${experience}

salary       : ${basicSalary}

Bonus        : ${bonus}

Final Salary :${totalsalary}

Skills       : ${skills}

Attendance   : ${attendance}

Exam Status  : ${Attendancechecker}

Login Status : ${Verification}

Company      : ${companyobject.CompanyName}

Location     : ${companyobject.location}
`);



 















