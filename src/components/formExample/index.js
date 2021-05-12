import {Component} from 'react'

class UserForm extends Component{
    constructor(props){
        super(props)
        this.state = {inputValue:""}
    }
    handleSubmit = () =>{
        console.log(this.state.inputValue)
    }
    handleChange = (e) =>{
        this.setState({inputValue: e.target.value})
        console.log(this.state.inputValue)
    }
    render(){
        return(<form onSubmit = {this.handleSubmit}>
            <label>User name:
                <input value = {this.state.inputValue} onChange = {this.handleChange}/>
            </label>
        </form>)
    }
}

export default UserForm