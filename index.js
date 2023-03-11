 const form = document.querySelector('#registration-form');
const usersTable = document.querySelector('#users-table tbody');

// Load previously saved data from web storage
const savedData = JSON.parse(localStorage.getItem('registrationData'));
if (savedData) {
  savedData.forEach(user => {
    addUserToTable(user);
  });
}

// Add a new user to the table
function addUserToTable(user) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.password}</td>
    <td>${user.dob}</td>
    <td>${user.acceptTerms ? 'Yes' : 'No'}</td>
  `;
  usersTable.appendChild(row);
}

// Validate date of birth
function isValidDob(dob) {
  const currentDate = new Date();
  const maxAge = 55;
  const minAge = 18;
  const minDob = new Date(currentDate.getFullYear() - maxAge, currentDate.getMonth(), currentDate.getDate());
  const maxDob = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());
  dob = new Date(dob);
  return dob >= minDob && dob <= maxDob;
}

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const password = form.elements['password'].value.trim();
  const dob = form.elements['dob'].value.trim();
  const acceptTerms = form.elements['accept-terms'].checked;
  if (!isValidDob(dob)) {
    alert('You must be between 18 and 55 years old to register.');
    return;
  }
  const user = { name, email, password, dob, acceptTerms };
  addUserToTable(user);
  form.reset();
  localStorage.setItem('registrationData', JSON.stringify([...(JSON.parse(localStorage.getItem('registrationData')) || []), user]));
});

