import React, { Component } from 'react';
import Loader from '../../loader';
import CompaniesService from '../../../services/companies-service';
import URL from '../../../helpers/url';
import SearchResultsItem from './search-results-item';
import './search-results.scss';

class SearchResults extends Component {
  companiesService = new CompaniesService();
  url = new URL();

  mockData = true;

  state = {
    loading: false,
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
  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.searchCompanies();
    }
  }

  searchCompanies = () => {
    console.log("search companies");
    console.log(this.state);
    const { params } = this.state;
    if (!params.q) {
      this.setState({
        errorMessage: 'Enter search string'
      });
      console.log("Doesn't have q parameter");
      return;
    }

    this.toggleLoading();

    let search = '?q=' + params.q;
    this.companiesService.getCompanies(search, this.mockData)
      .then(data => {
        console.log(data);
        this.setState({ searchResults: data });
        this.toggleLoading();
      })
      .catch(err => {
        console.error(err);
        this.setState({
          errorMessage: 'Receaved bad response from server'
        })
        this.toggleLoading();
      });
  }

  toggleLoading = () => {
    this.setState(({ loading }) => {
      return { loading: !loading }
    });
  }

  handlePageChange = ({ selected }) => {
    this.setState(({ params }) => {
      const paramsCopy = Object.assign({}, params);
      paramsCopy.page = selected + 1;
      return { params: paramsCopy };
    }, () => { this.url.pushParamsToHistory(this.state.params, this.props.history) });
  }

  render() {
    if (this.state.loading) {
      return <Loader loading />
    }

    let elements;
    const { searchResults: results = {} } = this.state;
    if (results.companies) {
      elements = results.companies.map((company, index) => <SearchResultsItem key={index} company={company} />)
    } else {
      elements = "Your search returned no results because it's missing a valid search term";
    }

    return (
      <div className="search-results">
        <p className="found-companies">Found {results.totalCount ? results.totalCount : '0'} companies</p>
        <div>
          {elements}
        </div>
      </div>
    );
  }
}
export default SearchResults;
