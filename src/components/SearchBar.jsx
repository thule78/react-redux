import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(){
    super();
    this.state = {
      term: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmitChange = this.onSubmitChange.bind(this)
  }
  onInputChange(event){
    this.setState({term: event.target.value})
  }

  onSubmitChange(e){
    e.preventDefault();
    this.props.onThisSubmitChange(this.state.term)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.onSubmitChange}>
         <input type="text" value={this.state.term} onChange={this.onInputChange}/>
        </form>
      </div>
      )
  }
}

export default SearchBar
