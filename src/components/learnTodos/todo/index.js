import {Component} from 'react'
import './index.css'

class Todo extends Component{
    render(){
        return <li className = "list-item">
            {this.props.todoTitle}
        </li>
    }
}

export default Todo


