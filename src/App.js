import {observer} from 'mobx-react-lite'
import {Component} from 'react'

import store1 from './components/learnTodos/stores'
import TodosList from './components/learnTodos/todoList'

import './App.css'




@observer

class App extends Component{

 handleChange = (e) =>{
    let userEnteredText = e.target.value
    store1.searchText = userEnteredText
  }

  keyPress = (e) =>{
    if(e.key === "Enter"){
      store1.addNewTodo({todoTitle : this.state.searchText, todoId: Math.random()})
      store1.searchText = "";
    }
  }

  render(){
    return <div className = "todosList-container">
            <input type = "text" value = {store1.searchText} 
            className = "input-field"
            onChange = {this.handleChange} 
            onKeyPress = {this.keyPress}
            />
            <TodosList todosList = {store1.todosList}/>
          </div>
  }
}

  

 

  
 
export default App