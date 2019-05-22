import React from 'react';
import {Link} from 'react-router-dom';

function Nav (){
  return (
    <div className="">
      <Link className="item" to="/">Home</Link>
      <Link className="item" to="/commentbox">Comment Box</Link>
      <Link className="item" to="/seasondisplay">Season Display</Link>
      <Link className="item" to="/time">Time</Link>
    </div>
    )
}

export default Nav
