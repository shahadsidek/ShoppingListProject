var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var existingLiItems = document.querySelectorAll(".bullets"); // Select all existing <li> elements
var delButton = document.getElementsByClassName("delBtn");

function toggleDone(li) {
    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });
}

function inputLength() {
    return input.value.length;
}

function deleteListItem(wrapper) {
    var delBtn = wrapper.querySelector("button");
    delBtn.addEventListener("click", function () {
        ul.removeChild(wrapper);
    });
}

function createListElement() {
    var li = document.createElement("li")
    var newWrapper = document.createElement("div");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    ul.appendChild(newWrapper);
    newWrapper.classList.add("wrapper");
    li.classList.add("bullets");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(newWrapper);
    newWrapper.appendChild(li);
    newWrapper.appendChild(deleteBtn);
    input.value = "";


    toggleDone(li);
    deleteListItem(newWrapper);
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}



function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.key === "Enter") {
        createListElement()
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeyPress);
existingLiItems.forEach(function (li) {
    toggleDone(li);
});

// Loop through existing list item wrappers and add delete event listeners
var existingItemWrappers = document.querySelectorAll(".wrapper");
existingItemWrappers.forEach(function (wrapper) {
    deleteListItem(wrapper);
});