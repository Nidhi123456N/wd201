  // Initialize an empty array to store user entries
let users = [];

// Retrieve the form element from the DOM
const form = document.getElementById("regForm");

// Retrieve the table element from the DOM
const table = document.getElementById("userTable");

// Define a function to add a user entry to the table
function addUserToTable(user) {
	// Create a new row element
	const row = document.createElement("tr");
	
	// Add cells to the row for each user property
	const nameCell = document.createElement("td");
	nameCell.textContent = user.name;
	row.appendChild(nameCell);
	
	const emailCell = document.createElement("td");
	emailCell.textContent = user.email;
	row.appendChild(emailCell);
	
	const passwordCell = document.createElement("td");
	passwordCell.textContent = user.password;
	row.appendChild(passwordCell);
	
	const dobCell = document.createElement("td");
	dobCell.textContent = user.dob;
	row.appendChild(dobCell);
	
	const termsCell = document.createElement("td");
	termsCell.textContent = user.terms ? "Yes" : "No";
	row.appendChild(termsCell);
	
	// Add the new row to the table
	table.querySelector("tbody").appendChild(row);
}

// Define a function to validate the form before submission
function validateForm() {
	// Retrieve form fields from the DOM
	const nameField = document.getElementById("name");
	const emailField = document.getElementById("email");
	const passwordField = document.getElementById("password");
	const dobField = document.getElementById("dob");
	const termsField = document.getElementById("terms");
	
	// Retrieve form field values
	const name = nameField.value.trim();
	const email = emailField.value.trim();
	const password = passwordField.value.trim();
	const dob = new Date(dobField.value);
	const terms = termsField.checked;
	
	// Validate email address
	if (!isValidEmail(email)) {
		alert("Invalid email address");
		return false;
	}
	
	// Validate age
