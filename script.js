var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li")
    var newWrapper = document.createElement("div");
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    ul.appendChild(newWrapper);
    newWrapper.classList.add("wrapper");
    li.classList.add("bullets");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(newWrapper);
    newWrapper.appendChild(li);
    newWrapper.appendChild(delBtn);
    input.value = "";

    // function createListElement() {
    //     var div = document.createElement("div");
    //     var li = document.createElement("li");
    //     var delButton = document.createElement("button");
    //     div.classList.add("wrapper");
    //     ul.appendChild(div);
    //     div.append(li, delButton);
    //     li.classList.add("taskClass");
    //     li.appendChild(document.createTextNode(input.value));
    //     input.value = "";
    //     delButton.classList.add("delClass");
    //     delButton.innerHTML='Del';
    // }
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

button.addEventListener("click", addListAfterClick)


input.addEventListener("keydown", addListAfterKeyPress)
