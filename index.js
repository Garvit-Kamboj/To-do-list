let todoButton = document.querySelector('button.todo-button');
let todoInput = document.querySelector('input.todo-input');
let todoList = document.querySelector('ul.todo-list');
let form = document.querySelector('form');

form.addEventListener('submit', addElement);


function addElement(event) {
    event.preventDefault();

    if (todoInput.value.trim() != "") {
        //Making div element
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');

        //Making li element
        const todo = document.createElement('li');
        todo.classList.add('todo');
        todo.innerText = todoInput.value;

        //Making Checkbox button element
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-button');
        checkButton.innerHTML = '<i class="far fa-check-square"></i>';
        checkButton.addEventListener('click', (event)=>{
            event.preventDefault();
            todoDiv.classList.toggle('todo-completed');
        })

        //Making Trash button element
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-button');
        trashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
        trashButton.addEventListener('click', (event)=>{
            event.preventDefault();
            todoDiv.classList.add('deleted');
            todoDiv.addEventListener('transitionend', ()=>{
                todoDiv.remove();
            })
        })

        //Appending stuff
        todoDiv.appendChild(todo);
        todoDiv.appendChild(checkButton);
        todoDiv.appendChild(trashButton)

        todoList.appendChild(todoDiv);

        todoInput.value = "";
    }
}

