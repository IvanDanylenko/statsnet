import React, { Component } from 'react';
import SearchBox from '../search-box';
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
        <div className="container">
          <h2>Companies from all over the world</h2>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <SearchBox 
                loading={this.state.loading}
                history={this.props.history} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <SearchResults 
                location={this.props.location}
                history={this.props.history}
                toggleLoading={this.toggleLoading} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
