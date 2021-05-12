import {Component} from 'react'

const numbers = [1,2,3,4]
class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {date : new Date(),
                      buttonStatus: "off"};
    }
    componentDidMount(){
        let timeId = setInterval(() => {
           this.tick()
        }, 1000);
    }
    tick = ()=>{
        this.setState({date : new Date()});
    }
    handleClick = ()=>{
        let updatedStatus = this.state.buttonStatus==="off" ? "on" : "off"
        this.setState({buttonStatus: updatedStatus})
    }   
    render(){
        return (<>
        numbers.length>4 && <h1>length greater than 4</h1>
        <h1>the date : {this.state.date.toLocaleTimeString()}</h1>
        <button onClick={this.handleClick}>{this.state.buttonStatus}</button>
        { numbers.map((number)=> <li>{number*number}</li>)}
        </>)
    }
}

export default Clock