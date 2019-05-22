import React, {Component} from 'react';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

class Search extends Component{
  onSearchSubmit(term){
    console.log(term);
  }
  render(){
    return(
      <div>
        <h3>search from API</h3>
        <SearchBar onThisSubmitChange={this.onSearchSubmit}/>
        <SearchList />
      </div>
      )
  }
}

export default Search
