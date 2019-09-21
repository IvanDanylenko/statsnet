import React, { Component } from 'react';
import CompaniesService from '../services/companies-service';
import URL from '../helpers/url';
// import SearchItem from './search-item';

class SearchResults extends Component {
  companiesService = new CompaniesService();
  url = new URL();

  state = {
    companies: []
  }

  componentDidMount () {
    if (this.url.getParameterByName("q")) {
      // TEMPORARY DEACTIVATE
      // this.searchCompanies();
      console.log("Companies searched on start");
    }
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.location.search !== this.props.location.search) {
      // this.searchCompanies();
      console.log("Companies searched");
    }
  }

  searchCompanies = () => {
    this.props.toggleLoading();
    const { search: utm } = this.props.location;
    if (utm) {
      this.companiesService.getCompanies(utm)
        .then(data => {
          this.props.toggleLoading();
          console.log(data.companies);
          if (typeof data === 'object') {
            this.setState({ companies: data.companies });
          }
        });
    }
  }

  render() {
    let elements;
    const { companies } = this.state;
    if (companies.length) {
      elements = companies.map(({company}, index) => {
        return (
          <div key={index} className="search-item">
            <h5>{ index + 1 }. { company.name }</h5>
            {/* <p>Registered address: { company.registered_address.locality } { company.registered_address.street_address }</p> */}
            {/* <p>Country: { company.registered_address.country }</p> */}
            <p>Branch: { company.branch ? "YES" : "NO" }</p>
            <p>Active: { company.inactive ? "NO" : "YES" }</p>
            <hr />
          </div>
        )
      })
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
