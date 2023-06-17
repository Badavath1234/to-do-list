let inputFiled = document.getElementById("inputAddText");
let listItem = document.getElementById("list-item");

function addButtonText() {
  // ---->CREATING PHASE----->

  if (inputFiled.value === "") {
    alert("you must write something");
  } else {
    let createList = document.createElement("li");
    createList.innerText = inputFiled.value;
    listItem.appendChild(createList);
    inputFiled.value = "";

    //----->DELETE OPERATION-----//

    let deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.innerHTML = "DELETE";
    deleteButton.addEventListener("click", deletebtn);
    function deletebtn() {
      createList.parentNode.removeChild(createList);
    }
    createList.appendChild(deleteButton);

    //----->EDIT OPERATION-----//

    let editButton = document.createElement("button");
    editButton.type = "button";
    editButton.innerHTML = "EDIT";
    createList.appendChild(editButton);
    editButton.addEventListener("click", editFun);

    function editFun() {}
    console.log("finction is working");
  }
}
