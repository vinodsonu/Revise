import {Component} from 'react'
import Todo from '../todo'

import './index.css'

class TodosList extends Component{
    render(){
        if(this.props.todosList.length)
        return this.props.todosList.map
            (todo => <Todo key = {Math.random()} todoTitle = {todo.todoTitle}/>)
        else
        return ""
        
    }
}

export default TodosList