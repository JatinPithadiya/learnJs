const todoList = [{
    'name': 'wash dishes',
    'dueDate': '2024-06-30'
}];

//['', 'do laundry', 'buy groceries'];

    renderTodoList();//load existing items on page load
    
    function renderTodoList() {
        let todoHTML = '';
      /*  for(let i = 0; i < todoList.length; i++) {
            const item = todoList[i];
        // const name = item.name;
        // const dueDate = item.dueDate;
        const {name, dueDate} = item;
            todoHTML += `
            <div> ${name} </div>
            <div> ${dueDate} </div>
            <button class="delete-button" onclick="todoList.splice(${i}, 1); renderTodoList();">
            Delete
            </button>`;
        // console.log(todoHTML);
            document.querySelector('.js-todo-list').innerHTML = todoHTML;
        } */

        todoList.forEach((item, index) => {
            const {name, dueDate} = item;
            const html = `
            <div> ${name} </div>
            <div> ${dueDate} </div>
            <button class="delete-button js-delete-button">Delete</button>`;
            todoHTML+= html;
        });

        document.querySelector('.js-todo-list').innerHTML = todoHTML;

        document.querySelector('.js-add-button').addEventListener('click', addTodo);
        document.querySelectorAll('.js-delete-button').forEach((button, index) => {
            button.addEventListener('click', () => {
                todoList.splice(index, 1); 
                renderTodoList();
            });
        });
    }
            

     function addTodo() {
            const inputName = document.querySelector('.todo-input');
            let name = inputName.value;
            const inputDueDate = document.querySelector('.js-due-date');
            let dueDate = inputDueDate.value;
            todoList.push({
                //'name': input.value,
                //'dueDate': dueDate.value
                name,
                dueDate
            });
            console.log(todoList);
            inputName.value = '';
            inputDueDate.value = '';
            renderTodoList();
            
    }

    



