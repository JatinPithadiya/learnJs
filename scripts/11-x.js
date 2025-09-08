const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

//['', 'do laundry', 'buy groceries'];

    renderTodoList();//load existing items on page load
    function renderTodoList() {
        let todoHTML = '';
        for(let i = 0; i < todoList.length; i++) {
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
        }
    }


     function addTodo() {
            const name = document.querySelector('.todo-input').value;
            const dueDate = document.querySelector('.js-due-date').value;
            todoList.push({
                //'name': input.value,
                //'dueDate': dueDate.value
                name,
                dueDate
            });
            localStorage.setItem('todoList', JSON.stringify(todoList));
            console.log(todoList);
            name.value = '';
            renderTodoList();
    }



