import React from 'react';

import Season from './Season';

function SeasonDisplay(){
  window.navigator.geolocation.getCurrentPosition (
    position => console.log(position),
    err => console.log(err)
    );
  return(
    <Season />
    )
}
export default SeasonDisplay
