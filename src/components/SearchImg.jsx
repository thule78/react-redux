import React, {Component} from 'react';

class SearchImg extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <img
          src={this.props.image.urls.thumb}
          alt={this.props.image.description}
        />
      </div>
      );
  }
}

export default SearchImg
