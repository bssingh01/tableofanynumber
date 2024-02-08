let h1 = document.querySelector("h1");
let div = document.querySelector("div");

function printTable() {
  let n = prompt("Enter the number:");
  h1.innerText = `Table of ${n}:`;
  for (let i = 1; i <= 10; i++) {
    const entry = document.createElement("h3");
    div.appendChild(entry);
    entry.innerText = `${n * i}`;
    // console.log(n * i);
  }
}

printTable();
