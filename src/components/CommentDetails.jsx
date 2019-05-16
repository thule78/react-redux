import React from 'react';
import faker from 'faker';


function CommentDetails (props){
  return (
      <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
          </a>
          <div className="content">
            <a href="/" className="author">
              <h3>{props.author}</h3>
            </a>
            <div className="metadata">
              <span className="date">
                <p>{props.date}</p>
              </span>
            </div>
            <div className="text">
              <p>Nice blog</p>
            </div>
          </div>
        </div>

    )
}

export default CommentDetails
