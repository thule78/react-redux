import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CommentBox from './CommentBox';
import Home from './Home';
import Nav from './Nav';
import SeasonDisplay from './SeasonDisplay';
import Time from './Time';




class App extends Component {
  render(){
    return(
      <div className="ui container comment">
        <Router>
        <Nav />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/commentbox' component={CommentBox} />
        <Route path='/seasondisplay' component={SeasonDisplay} />
        <Route path='/time' component={Time} />
        </Switch>
        </Router>
      </div>


      )
  }
}

export default App
