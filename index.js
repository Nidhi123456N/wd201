  function addEntry() {
	// Get form values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var dob = document.getElementById("dob").value;
	var accepted = document.getElementById("accepted").checked;
	
	// Check for valid email
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert("Invalid email address");
		return false;
	}
	
	// Check age
	var today = new Date();
	var birthDate = new Date(dob);
	var age = today.getFullYear() - birthDate.getFullYear();
	var monthDiff = today.getMonth() - birthDate.getMonth();
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
	    age--;
	}
	if (age < 18 || age > 55) {
		alert("You must be between 18 and 55 years old");
		return false;
	}
	
	// Create table row
	var table = document.getElementById("entries");
	var row = table.insertRow(-1);
	var nameCell = row.insertCell(0);
	var emailCell = row.insertCell(1);
	var passwordCell = row.insertCell(2);
	var dobCell = row.insertCell(3);
	var acceptedCell = row.insertCell(4);
	nameCell.innerHTML = name;
	emailCell.innerHTML = email;
	passwordCell.innerHTML = password;
	dobCell.innerHTML = dob;
	acceptedCell.innerHTML = accepted ? "Yes" : "No";
	
	// Clear form
	document.getElementById("registrationForm").reset();
	
	return false;
}

// Add event listener to form submit
var form = document.getElementById("registrationForm");
form.addEventListener("submit", addEntry);

// Load saved entries from local storage
if (localStorage.getItem("entries")) {
	var entries = JSON.parse(localStorage.getItem("entries"));
