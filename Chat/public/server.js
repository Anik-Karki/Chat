//User list
let data = ["Anik", "John", "Anuska", "Sandeep","Babin"];

let list = document.getElementById("myList");

data.forEach((item) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  li.appendChild(a);
  a.innerText = item;
  list.appendChild(li);
});

// Variables
var messages = document.querySelector(".message-list");
var btn = document.querySelector(".btn");
var input = document.querySelector(".input-msg");
var image_input = document.querySelector("#image_input");

// Button/Enter Key
btn.addEventListener("click", sendMessage);
input.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) sendMessage();
});

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    var image = document.createElement("img");
    image.className = "imageShow";
    image.src = uploaded_image;
  });
  reader.readAsDataURL(this.files[0]);
  sendImage();
});

// Messenger Functions

function sendImage() {
  var msg = document.querySelectorAll(".imageShow");
  console.log(msg);
  writeLine(msg);
}

function sendMessage() {
  var msg = input.value;
  input.value = "";
  writeLine(msg);
}

function writeLine(text) {
  console.log(text);
  var message = document.createElement("li");
  message.classList.add("message-item", "item-secondary");
  message.innerHTML = "John:: " + text;
  messages.appendChild(message);
}


//Search
function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myList");
  li = ul.getElementsByTagName("li");
  console.log(ul);
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
