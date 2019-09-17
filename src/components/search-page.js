import React, { Component } from 'react';
import SearchBox from './search-box';
import SearchResults from './search-results';

class SearchPage extends Component {
  
  render() {
    return (
      <div className="search-page">
        <SearchBox 
          history={this.props.history} />
        <hr />
        <SearchResults companies={[]} />
      </div>
    );
  }
}

export default SearchPage;
