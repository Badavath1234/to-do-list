const inputField = document.querySelector('#text');
const formButton = document.querySelector('#btnInput');
const listItem = document.querySelector('#list-item');







const li =document.createElement('li');
li.innerHTML = inputField.value;
listItem.append(li);

editButton = document.createElement('button');
editButton.id = 'editBtn';
editButton.innerHTML = 'EDIT';
li.append(editButton);


deleteButton =document.createElement('button');
deleteButton.id ='deleteBtn';
deleteButton.innerHTML = 'DELETE';
li.append(deleteButton);
