import React from 'react';
import SearchBox from '../search-box';
import './home-page.scss';

const HomePage = ({history, location}) => {
  return (
    <section className="home-page">
      <div className="container">
        <div className="offer">
          <div className="row">
            <div className="col-sm-6 offset-sm-3">
              <h1>The largest open database of companies in the world</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <SearchBox 
                location={location}
                history={history} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
