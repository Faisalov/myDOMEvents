var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    // adding a new list items
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    // adding a delete button to new list items
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Done!";
    li.appendChild(delBtn);
    delBtn.onclick = removeItems;
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// a function to toggles the .done class on and off.
function toggleIt(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

// To add delete buttons next to each existing <li>
// and delete the item when the corresponding delete button is clicked. 
li.forEach(function (li) {
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Done!";
    li.appendChild(delBtn);
    delBtn.onclick = removeItems;
})

function removeItems(event) {
    event.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleIt);