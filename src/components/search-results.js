import React, { Component } from 'react';
import CompaniesService from '../services/companies-service';
// import SearchItem from './search-item';

class SearchResults extends Component {
  companiesService = new CompaniesService();

  state = {
    companies: []
  }

  componentDidMount () {
    // console.log(this.props.location);
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.location.search !== this.props.location.search) {
      this.searchCompanies();
    }
  }

  getParamsFromUrl = () => {
    const { search } = this.props.location;
    const query = search.substr(1);
    const params = {};
    query.split("&").forEach((part) => {
      const item = part.split("=");
      params[item[0]] = item[1];
    });
    return params;
  }

  searchCompanies = () => {
    this.props.toggleLoading();
    const { search: utm } = this.props.location;
    if (utm) {
      this.companiesService.getCompanies(utm)
        .then(data => {
          this.props.toggleLoading();
          if (typeof data === 'object') {
            this.setState({ companies: data.companies });
          }
        });
    }
  }

  getParameterByName = (name) => {
    const { search } = this.props.location;
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = search.match(regex)[1];
    return results === null ? "" : results;
  }

  render() {
    let elements;
    const { companies } = this.state;
    if (companies.length) {
      elements = companies.map(({company}, index) => (
        <div key={index} className="search-item">
          <p>
            <span>{ index }.&nbsp;</span>
            <span>{ company.name } - </span>
            <span style={{color: "green"}}> { company.company_number }</span>
          </p>
          <hr />
        </div>
      ));
    } else {
      elements = "Companies don't found";
    }

    return (
      <div className="search-results">
        <h3>Search Results</h3>
        <div>
          { elements }
        </div>
      </div>
    );
  }
}
export default SearchResults;
