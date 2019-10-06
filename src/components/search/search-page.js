import React, { Component } from 'react';
import SearchResults from './search-results/search-results';
import './search-page.scss';

class SearchPage extends Component {
  render() {
    return (
      <div className="search-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <SearchResults
                location={this.props.location}
                history={this.props.history} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
