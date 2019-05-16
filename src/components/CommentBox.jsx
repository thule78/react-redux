import React from 'react';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetails from './CommentDetails';

function CommentBox (){
  return (
    <div>
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

export default CommentBox
