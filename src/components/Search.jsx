import React, {Component} from 'react';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

class Search extends Component{
  render(){
    return(
      <div>
        <h3>search from API</h3>
        <SearchBar />
        <SearchList />
      </div>
      )
  }
}

export default Search
