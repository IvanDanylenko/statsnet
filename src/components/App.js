import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomePage from './home-page';
import SearchPage from './search-page';
import CompanyPage from './company-page/company-page';
import NotFound from './not-found';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/companies">Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/companies/kz/101">Company Page</Link>
              </li>
            </ul>
          </nav>
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
