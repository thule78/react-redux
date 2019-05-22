import React, {Component} from 'react'

class Time extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({time: new Date().toLocaleTimeString()})
      }, 1000)
    console.log(setInterval)
  }

  render(){
    return(
      <div>
        Time is: {this.state.time}
      </div>


      )
  }
}

export default Time
