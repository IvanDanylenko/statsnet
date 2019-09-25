import React, { Component } from 'react';
import Pagination from './pagination';
import CompaniesService from '../services/companies-service';
import URL from '../helpers/url';
import SearchResultsItem from './search-results-item';

class SearchResults extends Component {
  companiesService = new CompaniesService();
  url = new URL();

  mockData = true;

  state = {
    params: {},
    searchResults: [],
    errorMessage: ''
  }

  componentDidMount() {
    this.setState(
      { params: this.url.getAllUrlParams() }, 
      () => { this.searchCompanies() }
    );
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location.search !== this.props.location.search) {
      this.searchCompanies();
    }
  }

  searchCompanies = () => {
    console.log("search companies");
    const { params } = this.state;
    if (!params.q) {
      this.setState({ 
        errorMessage: 'Enter search string'
      });
      console.log("Doesn't have q parameter");
      return;
    }

    let search = '?q=' + params.q;
    if (params.page) {
      search += "&page=" + params.page;
    }
    this.props.toggleLoading();
    this.companiesService.getCompanies(search, this.mockData)
      .then(data => {
        this.setState({ searchResults: data });
        // console.log(data);
        this.props.toggleLoading();
      })
      .catch(err => {
        console.error(err);
        this.props.toggleLoading();
      });
  }

  handlePageChange = ({selected}) => {
    this.setState(({params}) => {
      const paramsCopy = Object.assign({}, params);
      paramsCopy.page = selected + 1;
      return { params: paramsCopy };
    }, () => { this.url.pushParamsToHistory(this.state.params, this.props.history) });
  }

  render() {
    console.log(this.state);
    let elements;
    const { searchResults: results = {} } = this.state;
    if (results.companies) {
      elements = results.companies.map(({ company }, index) => <SearchResultsItem key={index} company={company} />)
    } else {
      elements = "Your search returned no results because it's missing a valid search term";
    }

    return (
      <div className="search-results">
        <Pagination
          pageCount={results.total_pages}
          onPageChange={this.handlePageChange} />
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
