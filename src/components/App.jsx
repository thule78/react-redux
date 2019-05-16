import React, {Component} from 'react';

import CommentDetails from './CommentDetails';



class App extends Component {
  render(){
    return(
      <div className="ui container comment">

      <CommentDetails author="Thu" date="Today at 6:00Pm"/>
      <CommentDetails author="Alex" date="Yesterday at 12:00am"/>
      <CommentDetails author="Pao" date="Today at 8:00am"/>

      </div>
      )
  }
}

export default App
