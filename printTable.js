let heading = document.querySelector(".heading");
let div = document.querySelector("div");
let num = document.querySelector("input");
let button = document.querySelector("button");

function printTable() {
  div.innerText = "";
  let n = num.value;
  heading.innerText = `Table of ${n}:`;
  for (let i = 1; i <= 10; i++) {
    const entry = document.createElement("h3");
    div.appendChild(entry);
    entry.innerText = `${n * i}`;
    console.log(n * i);
  }
}

button.addEventListener("click", printTable);
num.addEventListener("keyup", (event)=>{
  if(event == "Enter"){
    printTable();
  }
});
