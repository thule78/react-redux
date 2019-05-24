import React, {Component} from 'react';

import axios from 'axios';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

class Search extends Component{
  constructor(){
    super();
    this.state = {
      images:[]
    }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }


  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos',{
      params: {query: term},
      headers: {Authorization: 'Client-ID 95d6d4fc153470f7f5d9361417bb8f07e5da30dd2a57f413b112f394618505f1'}
    })
    .then(response => {this.setState({images: response.data.results});
  });
  }

  render(){
    return(
      <div>
        <h3>search from API</h3>
        <SearchBar onThisSubmitChange={this.onSearchSubmit}/>
        <SearchList />
        Found:{this.state.images.length} images
      </div>
      )
  }
}

export default Search
