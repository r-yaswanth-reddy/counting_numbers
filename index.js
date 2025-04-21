let value = document.getElementById("count");

function increment() {
    value.innerText = parseInt(value.innerText) + 1;
}

let prev = document.getElementById("Previous_entries");


function save() {
    let countt = value.innerText + " - "; 
    prev.innerText  += countt;
    value.innerText = 0;
}