// Get the registration form and the table body
const registrationForm = document.getElementById("registration-form");
const tableBody = document.querySelector("#registered-users tbody");

// Add an event listener to the registration form
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = new Date(document.getElementById("dob").value);
  const acceptTerms = document.getElementById("accept-terms").checked;

  // Check if the user is between 18 and 55 years old
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }

  if (age < 18 || age > 55) {
    alert("Sorry, you must be between 18 and 55 years old to register.");
    return;
  }

  // Create a new table row and cells
  const newRow = tableBody.insertRow(-1);
  const nameCell = newRow.insertCell(0);
  const emailCell = newRow.insertCell(1);
  const passwordCell = newRow.insertCell(2);
  const dobCell = newRow.insertCell(3);
  const acceptTermsCell = newRow.insertCell(4);

  // Add the values to the cells
  nameCell.textContent = name;
  emailCell.textContent = email;
  passwordCell.textContent = password;
  dobCell.textContent = dob.toLocaleDateString();
  acceptTermsCell.textContent = acceptTerms ? "Yes" : "No";

  // Clear the form
  registrationForm.reset();

  // Save the data to web storage
  saveDataToWebStorage();
});

// Load the data from web storage when the page loads
window.addEventListener("load", function () {
  loadDataFromWebStorage();
});

