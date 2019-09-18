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
        <SearchResults toggleLoading={this.toggleLoading} location={this.props.location} />
      </div>
    );
  }
}

export default SearchPage;
