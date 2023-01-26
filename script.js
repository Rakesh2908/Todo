var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
  return input.value.length;
}

function createListElement(){
  //creating an element li 
  var li = document.createElement("li");
  //creating a text node to that li, which is taken as imput from the user
  li.appendChild(document.createTextNode(input.value));
  //we r appending that li which is somewhere in the webpage to its parent i.e. ul
  ul.appendChild(li);
  //after entering the task, we have to clear the input
  input.value = "";
}

//the function for the click button
function addListAfterClick() {
  if(inputLength() > 0)
  {
    createListElement();
  }
}

//the function for the input
function addListAfterKeypress(event){
  //the keyCode/which for enter key is 13
  if(inputLength() > 0 && event.which === 13 )
  {
    createListElement();
  }
}

//this code is for the button
button.addEventListener("click", addListAfterClick);

//this code is for the input
input.addEventListener("keypress", addListAfterKeypress);