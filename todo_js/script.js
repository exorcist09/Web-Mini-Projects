const input = document.getElementById("inputbox");
const listContainer = document.getElementById("list");
const title =document.getElementById("heading")



var here =prompt("Enter Your Name")
title.innerHTML = here.value;

function addTask() {
  if (input.value === "") {
    alert("Something is fishy");
  } else {
    let li = document.createElement("li"); //creating a li element when add is made
    li.innerHTML = input.value; // writing the task entered in li
    listContainer.appendChild(li); // add the li in container for display;
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  input.value = "";  //clearing the input field after adding of li 
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");

    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove(); //parent element of span is the Li element
    }
},false);
