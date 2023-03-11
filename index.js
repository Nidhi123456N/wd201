 const form = document.getElementById('registration-form');
const tableBody = document.querySelector('table tbody');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptedTerms = document.getElementById('accepted-terms').checked;
  
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${acceptedTerms ? 'Yes' : 'No'}</td>
  `;
  
  tableBody.appendChild(newRow);
  
  form.reset();
});
