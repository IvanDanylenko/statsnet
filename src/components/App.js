import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoadingProgressBar from './loading-progress-bar';

import Header from './header/header';
import Footer from './footer/footer';

const HomePage = React.lazy(() => import('./home/home-page'));
const SearchPage = React.lazy(() => import('./search/search-page'));

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route path="/" component={Header} />
          <React.Suspense fallback={<LoadingProgressBar />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/search" component={SearchPage} />
            </Switch>
          </React.Suspense>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
