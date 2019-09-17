import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './home-page';
import SearchPage from './search-page';
import CompaniesService from '../services/companies-service';

class App extends Component {
  companiesService = new CompaniesService();

  state = {
    search: {
      query: '',
      // order: 'score',
      page: 1
    },
    companies: []
  }

  searchCompanies = (e) => {
    e.preventDefault();
    return;
    const query = e.target['query'].value;
    if (query) {
      this.companiesService.getCompanies(query)
        .then(data => {
          console.log(data);
          if (typeof data === 'object') {
            this.setState({ companies: data.companies });
          }
        });
    }
  }

  render() {
    const {companies} = this.state;

    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/companies" exact component={SearchPage} />
            {/* <Redirect to="/" /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
