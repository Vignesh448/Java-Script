// Shopping Bill Generator

let customerName = "Vignesh";


const shopName = "Stackly Mart";

let products = ["Laptop", "Mouse", "Keyboard"];

let productPrice = 45000;

let quantity = 2;

let totalBill = productPrice * quantity;

let discount = 5000;

let finalBill = totalBill - discount;

let member = true;

let memberStatus = member ? "Premium Member" : "Regular Member";

let shopDetails = {

    name: shopName,

    location: "Coimbatore"

};

console.log("==============================");

console.log("     SHOPPING BILL");

console.log("==============================");

console.log("Customer Name :", customerName);

console.log("Shop Name     :", shopDetails.name);

console.log("Location      :", shopDetails.location);

console.log("Products      :", products);

console.log("Product Price :", productPrice);

console.log("Quantity      :", quantity);

console.log("Total Bill    :", totalBill);

console.log("Discount      :", discount);

console.log("Final Bill    :", finalBill);

console.log("Member Status :", memberStatus);

console.log("==============================");
 

 

