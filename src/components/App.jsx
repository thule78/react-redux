import React, {Component} from 'react';
import faker from 'faker';

import CommentDetails from './CommentDetails';
import ApprovalCard from './ApprovalCard';



class App extends Component {
  render(){
    return(
      <div className="ui container comment">

      <ApprovalCard >
        <CommentDetails
          author="Thu"
          date="Today at 6:00Pm"
          comment="Niceblog"
          avatar={faker.image.avatar()}
          />
      </ApprovalCard >

      <ApprovalCard >
        <CommentDetails
          author="Alex"
          date="Yesterday at 12:00am"
          comment="I like the color"
          avatar={faker.image.avatar()}
          />
      </ApprovalCard >


      <ApprovalCard >
        <CommentDetails
        author="Pao"
        date="Today at 8:00am"
        comment="great design"
        avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      </div>
      )
  }
}

export default App
