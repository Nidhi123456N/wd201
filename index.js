let formID = document.getElementById("regForm");

const loadEntriesFromLocal = () => {
  let allEntries = localStorage.getItem("storageEntries");

  if (allEntries != null) {
    allEntries = JSON.parse(allEntries);
  } else {
    allEntries = [];
  }
  return allEntries;
};

let previousEntries = loadEntriesFromLocal();

const displayEntriesTabular = () => {
  const entries = loadEntriesFromLocal();

  const rows = entries
    .map((entry) => {
      const fullName = `<td scope="row" class="text-center">${entry.fullName}</td>`;
      const email = `<td class="text-center">${entry.email}</td>`;
      const password = `<td class="text-center">${entry.password}</td>`;
      const dob = `<td class="text-center">${entry.dob}</td>`;
      const conditions = `<td class="text-center">${entry.conditions}</td>`;

      const row = `<tr>${fullName} ${email} ${password} ${dob} ${conditions}</tr>`;
      return row;
    })
    .join("\n");

  let tableDiv = document.getElementById("table-div");

  tableDiv.innerHTML = `<table class="table">
  <tr>
    <th scope="col" class="text-center">Name</th>
    <th scope="col" class="text-center">Email</th>
    <th scope="col" class="text-center">Password</th>
    <th scope="col" class="text-center">Dob</th>
    <th scope="col" class="text-center">Accepted terms?</th>
  </tr>
    ${rows}
  </table>`;
};

const pushUserData = (event) => {
  event.preventDefault();

  let fullName = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let dob = document.getElementById("dob").value;
  let conditions = document.getElementById("conditions").checked;

  let currentEntry = {
    fullName,
    email,
    password,
    dob,
    conditions,
  };

  previousEntries.push(currentEntry);

  localStorage.setItem("storageEntries", JSON.stringify(previousEntries));

  displayEntriesTabular();
};

formID.addEventListener("submit", pushUserData);

displayEntriesTabular();

function getAge(today, birthDate) {
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

let dateSelector = document.getElementById("dob");

dateSelector.addEventListener("change", () => {
  let [year, month, date] = document.getElementById("dob").value.split("-");

  let dob = new Date(year, month, date);
  let Today = new Date();

  age = getAge(Today, dob);

  dateSelector.style.border = "2px solid rgba(0, 0, 0, 0.4)";
  if (age < 18 || age > 55) {
    dateSelector.setCustomValidity("User age must be between 18 and 55");
    dateSelector.style.border = "2px solid red";
    return;
  } else {
    dateSelector.setCustomValidity("");
  }
});

const email = document.getElementById("email");

email.addEventListener("input", () => validate(email));

function validate(ele) {
  if (ele.validity.typeMismatch) {
    ele.setCustomValidity("The Email is not in the right format!");
    ele.reportValidity();
  } else {
    ele.setCustomValidity("");
  }
}
