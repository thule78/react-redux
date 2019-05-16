import React from 'react';



function CommentDetails (props){
  return (
      <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={props.avatar} />
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
              <p>{props.comment}</p>
            </div>
          </div>
        </div>

    )
}

export default CommentDetails
