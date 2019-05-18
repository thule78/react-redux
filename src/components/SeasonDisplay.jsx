import React, {Component} from 'react';

import Season from './Season';


  /*window.navigator.geolocation.getCurrentPosition (
    position => console.log(position),
    err => console.log(err)
    );*/

  class SeasonDisplay extends Component {
    constructor(props){
      super(props);
      this.state = {
        lat: null,
        errMessage: ''
      };

    }

    componentDidMount (){
      window.navigator.geolocation.getCurrentPosition(
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState({errMessage: err.Message})
      )}


    render(){
      if (this.state.errMessage && !this.state.lat) {
        return (
          <div>{this.state.errMessage}</div>
          )}

      if (!this.state.errMessage && this.state.la){
        return (
          <div>{this.state.lat}</div>
          )}

      return (
        <div><p>Loading...</p></div>
        )}
  }
export default SeasonDisplay
