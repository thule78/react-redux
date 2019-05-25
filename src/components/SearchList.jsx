import React from 'react';

import SearchImg from './SearchImg';

import './searchstyle.css';

const SearchList =  props =>{
  const photo = props.images.map(image => {return <SearchImg key={image.id} image={image} />}
  );
  return (
    <div className="photo_list">
      {photo}
    </div>
    )
};

export default SearchList
