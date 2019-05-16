import React, {Component} from 'react';
import faker from 'faker';

class App extends Component {
  render(){
    return(
      <div className="ui container comment">
        <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a href="/" className="author">
              <h4>thu</h4>
            </a>
            <div className="metadata">
              <span className="date">
                <p>Today at 6:00 pm</p>
              </span>
            </div>
            <div className="text">
              <p>Nice blog</p>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default App
