// select the form element
const form = document.querySelector('#registration-form');

// add event listener to the form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form from submitting

  // get input values from the form
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const dob = document.querySelector('#dob').value;
  const acceptedTerms = document.querySelector('#accepted-terms').checked;

  // validate email address
  if (!validateEmail(email)) {
    alert('Invalid email address!');
    return;
  }

  // validate age
  const age = calculateAge(dob);
  if (age < 18 || age > 55) {
    alert('You must be between 18 and 55 years old to register!');
    return;
  }

  // add a new row to the table with the input values
  const table = document.querySelector('#registration-table');
  const row = table.insertRow();
  const nameCell = row.insertCell();
  const emailCell = row.insertCell();
  const passwordCell = row.insertCell();
  const dobCell = row.insertCell();
  const acceptedTermsCell = row.insertCell();
  nameCell.textContent = name;
  emailCell.textContent = email;
  passwordCell.textContent = password;
  dobCell.textContent = dob;
  acceptedTermsCell.textContent = acceptedTerms ? 'Yes' : 'No';

  // reset the form
  form.reset();
});

// helper function to validate email addresses
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// helper function to calculate age from date of birth
function calculateAge(dob) {
  const now = new Date();
  const birthdate = new Date(dob);
  let age = now.getFullYear() - birthdate.getFullYear();
  const monthDiff = now.getMonth() - birthdate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthdate.getDate())) {
    age--;
  }
  return age;
}
