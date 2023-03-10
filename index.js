  function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  // Check if all fields are filled out
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    alert("Please fill out all fields.");
    return false;
  }

  // Check if password and confirm password match
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  // If everything is filled out and passwords match, submit the form
  alert("Registration successful!");
  return true;
}
