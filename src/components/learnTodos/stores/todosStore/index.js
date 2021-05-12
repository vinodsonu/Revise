import {observable, makeObservable} from 'mobx'

let todosData = [
    {
      title : "ifhiwhfiwh",
      id: 1
    },
    {
      title : "12234242424",
      id: 2
    },
    {
      title : "9999999",
      id: 3
    },
    {
      title : "88888888",
      id: 1
    }
  ]

class TodosStore{

    todosList = {...todosData};
    searchText = "";

    constructor(){
        makeObservable(this, {
            todosList:  observable,
            searchText: observable
        })
    }
    setTodos = (todosData) =>{
        let tempTodosList = [];
        tempTodosList = todosData.map(todo => { return {todoTitle : todo.title, todoId: todo.id}})
        this.todosList = {...tempTodosList}
        console.log(this.todosList[1].todoId)
    }
    addNewTodo = (todo) =>{
        let tempTodosList = {...this.todosList};
        tempTodosList.push({todoTitle : todo.title, todoId: todo.id})
        this.todosList = {...tempTodosList}
    }
}

export default TodosStore