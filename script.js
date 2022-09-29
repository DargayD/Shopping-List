let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let itemNum = 0;

function inputlength() {
    return input.value.length;
}

function createListElement() {
    //console.log('createListElement[]');
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    itemNum++;
    li.setAttribute("id", "item" + itemNum);
    li.addEventListener("click", crossOffItem);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    //console.log('addListAfterClick[]');
    if (inputlength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    //console.log('addListAfterKeypress[]');
    if (inputlength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function crossOffItem(evt) {
    let e = evt.target;
    //console.log(`crossOffItem[e.id=${e.id}]`);
    if (e.style.textDecoration != "line-through") {
        e.style.textDecoration = "line-through";
    } else {
        e.style.textDecoration = "";
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);