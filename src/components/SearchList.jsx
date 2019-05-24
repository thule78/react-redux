import React from 'react';

const SearchList =  props =>{
  console.log(props.images);
  const photo = props.images.map(image => {return <img src={image.urls.small} />}
  );
  return (
    <div>
      {photo}
    </div>
    )
};

export default SearchList
