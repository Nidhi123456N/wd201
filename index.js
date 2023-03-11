// Load saved user data from web storage
window.onload = function() {
	if (localStorage.getItem('userTable')) {
		document.querySelector("#userTable tbody").innerHTML = localStorage.getItem('userTable');
	}
}

// Save user data to web storage
function saveUser(name, email, password, dob, terms) {
	let userTable = document.querySelector("#userTable tbody");
	let newRow = userTable.insertRow(-1);
	let nameCell = newRow.insertCell(0);
	let emailCell = newRow.insertCell(1);
	let passwordCell = newRow.insertCell(2);
	let dobCell = newRow.insertCell(3);
	let termsCell = newRow.insertCell(4);
	nameCell.innerHTML = name;
	emailCell.innerHTML = email;
	passwordCell.innerHTML = password;
	dobCell.innerHTML = dob;
	termsCell.innerHTML = terms;
	localStorage.setItem('userTable', userTable.innerHTML);
}

// Validate date of birth input
function validateDob(dob) {
	let today = new Date();
	let dobDate = new Date(dob);
	let age = today.getFullYear() - dobDate.getFullYear();
	let monthDiff = today.getMonth() - dobDate.getMonth();
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
	    age--;
	}
	return (age >= 18 && age <= 55);
}

// Add submit event listener to registration form
document.querySelector("#regForm").addEventListener("submit", function(event) {
	event.preventDefault();
	let name = document.querySelector("#name").value;
	let email = document.querySelector("#email").value;
	let password = document.querySelector("#password").value;
	let dob = document.querySelector("#dob").value;
	let terms = document.querySelector("#terms").checked;
	if (validateDob(dob)) {
		saveUser(name, email, password, dob, terms);
		document.querySelector("#regForm").reset();
	} else {
		alert("Invalid date of birth. Please enter a date between 18 and 55 years ago.");
	}
});
