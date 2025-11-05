let input = document.getElementById("txt");
let msg = document.createElement("p");
let list = document.querySelector("ul");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (input.value) {
    let li = document.createElement("li");
    li.textContent = input.value;
    input.value = "";
    list.appendChild(li);
  } else {
    document.body.appendChild(msg);
    msg.innerText = "Écris quelque chose";
  }
});
