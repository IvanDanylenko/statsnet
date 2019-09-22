import React, { Component } from 'react';
import CompaniesService from '../services/companies-service';
import URL from '../helpers/url';
import SearchResultsItem from './search-results-item';
import yandexCompanies from '../db/test-data/companies-yandex.json';

class SearchResults extends Component {
  companiesService = new CompaniesService();
  url = new URL();

  state = {
    params: {},
    searchResults: []
  }

  constructor() {
    super();
    this.state.searchResults = yandexCompanies.results;
  }

  componentDidMount() {
    this.setState({ params: this.url.getAllUrlParams() }, () => { console.log(this.state) });
    if (this.url.getParameterByName("q")) {
      // TEMPORARY DEACTIVATE
      // this.searchCompanies();
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.search !== this.props.location.search) {
      // this.searchCompanies();
      console.log("Component updated, state: ", this.state);
    }
  }

  searchCompanies = () => {
    this.props.toggleLoading();
    const { search } = this.props.location;
    if (search) {
      this.companiesService.getCompanies(search)
        .then(data => {
          this.props.toggleLoading();
          console.log("Searched data: ", data);
          this.setState({ searchResults: data });
        });
    }
  }

  render() {
    let elements;
    const { searchResults: results = {} } = this.state;
    if (results.companies) {
      elements = results.companies.map(({ company }, index) => <SearchResultsItem key={index} company={company} />)
    } else {
      elements = "Your search returned no results because it's missing a valid search term";
    }

    return (
      <div className="search-results">
        {/* Test icon */}
        <span className="flag-icon-us"></span>
        <p className="found-companies">Found {results.total_count ? results.total_count : '0'} companies, showed first 30 </p>
        <div>
          {elements}
        </div>
      </div>
    );
  }
}
export default SearchResults;
