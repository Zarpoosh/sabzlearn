class Todo {

    constructor (title) {
        this.title = title
        this.isComplete = false
    }

}

class TodoList {
    constructor (todosContainer) {
        this.todosContainer = todosContainer
        this.todos = JSON.parse(localStorage.getItem('todos')) || []
        this.todoInput = document.querySelector('input')
        this.addBtn = document.querySelector('#addButton')
        this.clearBtn = document.querySelector('#clearButton')

        this.render()
    }

    render () {
        console.log('تودولیست شروع به کار کرد');
        this.todosContainer.innerHTML = ''

        this.addBtn.addEventListener('click', () => {
            this.addNewTodo(this.todoInput.value)
        })

        this.clearBtn.addEventListener('click', () => {
            this.clearTodos()
        })

        this.addTodosToDom()
        this.saveTodosIntoLocalStorage()

    }

    addTodosToDom () {
        console.log("تودوها به دام اضافه شدن");

        this.todosContainer.innerHTML = ''

        this.todos.forEach((todo, todoIndex) => {
            let li = document.createElement('li')
            li.className = 'completed well'

            let todoTitleElem = document.createElement('label')
            todoTitleElem.innerHTML = todo.title
            todo.isComplete ? todoTitleElem.classList.add('todo-completed') : null

            let completeBtn = document.createElement('button')
            completeBtn.className = 'btn btn-success'
            completeBtn.innerHTML = 'Complete'

            completeBtn.addEventListener('click', (event) => {
                event.target.previousSibling.classList.toggle('todo-completed')
                console.log(event.target.previousSibling);

                todo.isComplete = !todo.isComplete
                this.saveTodosIntoLocalStorage()
                this.addTodosToDom()

            })

            let removeBtn = document.createElement('button')
            removeBtn.className = 'btn btn-danger'
            removeBtn.innerHTML = 'Remove'

            removeBtn.addEventListener('click', (event) => {
                this.todosContainer.removeChild(li)

                let mainTodoIndex = this.todos.findIndex((todo, index) => index === todoIndex)
                this.todos.splice(mainTodoIndex, 1)

                this.saveTodosIntoLocalStorage()
                this.addTodosToDom()
            })

            li.append(todoTitleElem, completeBtn, removeBtn)

            this.todosContainer.append(li)

        })

    }

    addNewTodo (newTodoTitle) {
        console.log('new todo title:', newTodoTitle);

        if (newTodoTitle.trim()) {
            this.todos.push(new Todo(newTodoTitle))
            this.saveTodosIntoLocalStorage()
            this.addTodosToDom()
            this.todoInput.value = ''
        }

    }

    clearTodos () {
        console.log('تودوها پاک شدن');

        this.todos = []
        this.render()
        this.saveTodosIntoLocalStorage()
    }

    saveTodosIntoLocalStorage () {
        localStorage.setItem('todos', JSON.stringify(this.todos))
    }
}

new TodoList(document.querySelector('#todoList'))