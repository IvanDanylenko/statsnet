import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './home-page';
import SearchPage from './search-page';
import CompanyPage from './company-page/company-page';
import NotFound from './not-found';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/companies" component={SearchPage} />
            <Route exact path="/companies/:jurisdiction_code/:company_number" component={CompanyPage} />
            <Route path="/" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
