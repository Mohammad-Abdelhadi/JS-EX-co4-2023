let form = document.getElementById("ourforms");
form.innerHTML = `
  <label for="username">Username</label>
  <input type="text" id="username" required />
  <br />
  <label for="first-password">Password</label>
  <input type="password" id="first-password" required />
  <br />
  <label for="confirm-password">Confirm Password</label>
  <input type="password" id="confirm-password" required />
  <br style="margin:0">
  <button type="submit">Submit</button>
`;

let button = document.querySelector("button");
let firstPassword = document.getElementById("first-password");
let confirmPassword = document.getElementById("confirm-password");
let username = document.getElementById("username");

button.addEventListener("click", function (event) {
  event.preventDefault();

  if (firstPassword.value === "" || confirmPassword.value === "" || username.value === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (firstPassword.value !== confirmPassword.value) {
    alert("Passwords do not match. Try again!");
    return;
  }

  if (firstPassword.value.length < 8) {
    alert("Password should be at least 8 characters long.");
    return;
  }

  alert("Successful login!");
});
