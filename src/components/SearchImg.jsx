import React, {Component} from 'react';

class SearchImg extends Component{
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
