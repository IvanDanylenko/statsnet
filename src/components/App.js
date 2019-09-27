import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import LoadingProgressBar from './loading-progress-bar';

import NotFound from './not-found';
import Header from './header/header';

const HomePage = React.lazy(() => import('./home/home-page'));
const SearchPage = React.lazy(() => import('./search/search-page'));
const CompanyPage = React.lazy(() => import('./company/company-page'));

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          </nav> */}
          <React.Suspense fallback={<LoadingProgressBar />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/companies" component={SearchPage} />
              <Route exact path="/companies/:jurisdiction_code/:company_number" component={CompanyPage} />
              <Route path="/" component={NotFound} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
