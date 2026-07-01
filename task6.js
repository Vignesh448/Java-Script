//🟢 Task 1 - Find the Highest Salary

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
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let highestEmployee = employees.reduce((highest, employee) => {
    return employee.salary > highest.salary ? employee : highest;
});
console.log("Highest Salary :", highestEmployee.salary);
console.log("Employee Name :", highestEmployee.name);


//🟢 Task 2 - Find Employee by ID

 employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let searchId = 103;
let employee = employees.find(function(emp) {
    return emp.id === searchId;
});
if (employee) {
    console.log("Employee Found");
    console.log("Name :", employee.name);
    console.log("Salary :", employee.salary);
} else {
    console.log("Employee Not Found");
}



//🟢 Task 3 - Calculate Salary with Bonus

    employees = [
   {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let bonus = 5000;
let updatedSalary = employees.map(function(emp) {
    return {
        name: emp.name,
        salary: emp.salary + bonus
    };
});
updatedSalary.forEach(function(emp) {
    console.log(emp.name + " : " + emp.salary);
});
 
//🟢 Task 4 - Experience Check

 employees = [
    {
        name: "Naveen",
        experience: 2
    },
    {
        name: "John",
        experience: 7
    },
    {
        name: "Arun",
        experience: 5
    }
];
employees.forEach(function(emp) {
    if (emp.experience >= 5) {
        console.log(emp.name + " - Senior Employee");
    } else {
        console.log(emp.name + " - Junior Employee");
    }
});


//🟢 Task 5 - Display Only Employee Names

 employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }];

    employees.forEach(function(emp){
        console.log(emp.name);
        
    });

    //🟢 Task 6 - Display Employee IDs
employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }];

    employees.forEach(function(emp){
        console.log(emp.id);
        
    });

//🟢 Task 7 - Find Total Salary


 employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let totalSalary = employees.reduce(function(total, emp) {
    return total + emp.salary;
}, 0);
console.log("Total Salary :", totalSalary);


//🟢 Task 8 - Employees Earning More Than ₹40,000

 employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let result = employees.filter(function(emp) {
    return emp.salary > 40000;
});
result.forEach(function(emp) {
    console.log(emp.name);
});


//🟢 Task 9 - Increase Salary

 employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
let updatedEmployees = employees.map(function(emp) {
    return {
        name: emp.name,
        salary: emp.salary + 5000
    };
});
updatedEmployees.forEach(function(emp) {
    console.log(emp.name + " : " + emp.salary);
});


//🟢 Task 10 - Employee Report


 employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];
employees.forEach(function(emp) {
    console.log(`Employee Name : ${emp.name}`);
    console.log(`Employee ID : ${emp.id}`);
    console.log(`Salary : ${emp.salary}`);
    console.log("");
});


//⭐ Challenge Task 

 employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
        salary: 45000
    }
];

// 1. Total number of employees

console.log("Total Employees :", employees.length);

// 2. Highest Salary

let highest = employees.reduce(function(max, emp) {
    return emp.salary > max.salary ? emp : max;
});
console.log("Highest Salary :", highest.salary);

// 3. Lowest Salary

let lowest = employees.reduce(function(min, emp) {
    return emp.salary < min.salary ? emp : min;
});
console.log("Lowest Salary :", lowest.salary);

// 4. Total Salary

 totalSalary = employees.reduce(function(total, emp) {
    return total + emp.salary;
}, 0);
console.log("Total Salary :", totalSalary);

// 5. Employee with Highest Salary

console.log("Highest Salary Employee :", highest.name);

// 6. Employee with Lowest Salary

console.log("Lowest Salary Employee :", lowest.name);

// 7. Employees earning more than 40000

console.log("Employees earning more than 40000:");
employees
    .filter(function(emp) {
        return emp.salary > 40000;
    })
    .forEach(function(emp) {
        console.log(emp.name);
    });

// 8. Search Employee by ID

 searchId = 103;
 employee = employees.find(function(emp) {
    return emp.id === searchId;
});
if (employee) {
    console.log("Employee Found");
    console.log("Name :", employee.name);
    console.log("Salary :", employee.salary);
} else {
    console.log("Employee Not Found");
}

// 9. Add ₹5000 Bonus

console.log("Salary After Bonus:");
let bonusEmployees = employees.map(function(emp) {
    return {
        name: emp.name,
        salary: emp.salary + 5000
    };
});
bonusEmployees.forEach(function(emp) {
    console.log(emp.name + " : " + emp.salary);
});

// 10. Employee Report

console.log("Employee Report:");
employees.forEach(function(emp) {
    console.log(`Employee Name : ${emp.name}`);
    console.log(`Employee ID : ${emp.id}`);
    console.log(`Salary : ${emp.salary}`);
    console.log("");
});
 

 
 
 
 


 
 
 