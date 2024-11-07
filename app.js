

// qno1
var itemsArray = [
  { name: "juice", price: 50, quantity: 3 },
  { name: "cookie", price: 30, quantity: 9 },
  { name: "shirt", price: 880, quantity: 1 },
  { name: "pen", price: 100, quantity: 2 },
];

let totalSum = 0;

for (let item of itemsArray) {
  let itemTotal = item.price * item.quantity;

  console.log(`Total price of ${item.name}: ${itemTotal}`);
  totalSum += itemTotal;
}

console.log(`Total price of all items: ${totalSum}`);

// qno2
let user = {
    name : "moosa",
    email : "moosakhan@gmail.com",
    password : "190",
    age : "15",
    gender : "male",
    city : "karachi",
    country : "pakistan"
}

console.log("Does age exit", 'age' in user);
console.log("Does country exit", 'country' in user);
console.log("Does FirstName exit", 'FirstName' in user);
console.log("Does LastName exit", 'LastName' in user);

// qno3

function Product(name, category, price) {
  this.name = name;
  this.category = category;
  this.price = price;
}

// Create multiple records using the constructor
const product1 = new Product("Laptop", "Electronics", 1200);
const product2 = new Product("Smartphone", "Electronics", 800);
const product3 = new Product("Desk Chair", "Furniture", 150);

// Display the records
console.log(product1);
console.log(product2);
console.log(product3);

// qno4
function Person(name, gender, address, education, profession) {
  this.name = name;
  this.gender = gender;
  this.address = address;
  this.education = education;
  this.profession = profession;
}

// Load records from localStorage or initialize as an empty array
const records = JSON.parse(localStorage.getItem("populationRecords")) || [];

// Function to add a new record
function addRecord() {
  // Get form values
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const education = document.getElementById("education").value;
  const profession = document.getElementById("profession").value;

  // Create a new Person object
  const person = new Person(name, gender, address, education, profession);

  // Add the new record to the records array
  records.push(person);

  // Save updated records to localStorage
  localStorage.setItem("populationRecords", JSON.stringify(records));

  // Clear form and update display
  document.getElementById("populationForm").reset();
  displayRecords();
}

// Function to display saved records
function displayRecords() {
  const recordsList = document.getElementById("recordsList");
  recordsList.innerHTML = ""; // Clear previous list

  records.forEach((record, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${index + 1}. Name: ${record.name}, Gender: ${record.gender}, Address: ${record.address}, Education: ${record.education}, Profession: ${record.profession}`;
    recordsList.appendChild(listItem);
  });
}

// Display records on page load
displayRecords();


