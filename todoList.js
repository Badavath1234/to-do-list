const inputField = document.querySelector("#text");
const formButton = document.querySelector("#btnInput");
const listItem = document.querySelector("#list-item");

let arr = [];

formButton.addEventListener("click", () => {
  arr.push(inputField.value);
  inputField.value = " ";
  createElements();
});

function createElements() {
  listItem.innerHTML = "";
  arr.forEach((item, index) => {
    const listCreate = document.createElement("li");
    listCreate.innerHTML = item;
    // console.log(li.innerHTML);
    listItem.appendChild(listCreate);
    console.log(listItem);

    const editButton = document.createElement("button");
    editButton.id = "editBtn";
    editButton.innerHTML = "EDIT";
    listCreate.appendChild(editButton);
    editButton.addEventListener("click", () => {
      editFun(index);
    });

    const deleteButton = document.createElement("button");
    deleteButton.id = "deleteBtn";
    deleteButton.innerHTML = "DELETE";
    deleteButton.addEventListener("click", () => {
      alert("hi hello");
      deleteFun(index);
    });
    listCreate.appendChild(deleteButton);
  });
}

function deleteFun(index) {
  arr.splice(index, 1);
  createElements();
}

function editFun(index,listCreate) {
  inputField.value = arr[index];
  inputField.append(listCreate)
  // listCreate.appendChild(listCreate)
    createElements();
}

console.log(arr);
