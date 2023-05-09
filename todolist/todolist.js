// document.addEventListener("DOMContentLoaded", function () {
//   let button = document.querySelector("button");
//   let input = document.getElementById("input");
//   let container = document.getElementsByClassName("container")[0];

//   // Retrieve stored data on page load
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     createNewInputDiv(key, value);
//   }

//   button.addEventListener("click", function () {
//     let newInputValue = input.value.trim(); // Trim leading and trailing whitespace

//     if (newInputValue !== "") {
//       createNewInputDiv(newInputValue, "some value");

//       input.value = ""; // Clear the input field
//       localStorage.setItem(newInputValue, "some value");
//     } else {
//       alert("Enter a value");
//     }
//   });

//   function createNewInputDiv(value, data) {
//     let newInputDiv = document.createElement("div");
//     newInputDiv.className = "our-input";
//     newInputDiv.innerHTML = `<p>${value} <i class="fas fa-plus"></i></p>`;
//     container.appendChild(newInputDiv);
//   }

// });
window.onload = function () {
  input.focus();
};

let input = document.getElementById("ourinput");
let ourbutton = document.getElementById("ourbutton");

ourbutton.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    let newdiv = document.createElement("div");
    newdiv.className = "newdiv";
    newdiv.innerHTML = `<span>${input.value} </span>
    <button class="delete">Delete</button>`;
    document.body.appendChild(newdiv);
    let deleteButton = newdiv.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      newdiv.remove();
    });
    newdiv.addEventListener("click", function () {
      newdiv.classList.toggle("finished");
    });
    let p = newdiv.querySelector("span");
    p.addEventListener("click", function () {
      p.contentEditable = true;
    });
  } else {
    alert("Enter a value");
  }
});

//   newdiv.addEventListener("click", function () {
//   });
//   for (let i = 0; i < newdiv.length; i++) {
//     document.newdiv.querySelector[i]("p").contentEditable = "true";
//   }
