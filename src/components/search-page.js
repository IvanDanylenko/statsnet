import React, { Component } from 'react';
import SearchBox from './search-box';
import SearchResults from './search-results';

class SearchPage extends Component {
  state = {
    loading: false
  }

  toggleLoading = () => {
    this.setState(({loading}) => {
      return { loading: !loading }
    });
  }
  
  render() {
    return (
      <div className="search-page">
        <SearchBox 
          loading={this.state.loading}
          history={this.props.history} />
        <hr />
        <SearchResults 
          location={this.props.location}
          toggleLoading={this.toggleLoading} />
      </div>
    );
  }
}

export default SearchPage;
