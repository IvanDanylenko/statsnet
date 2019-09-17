import React from 'react';
// import SearchItem from './search-item';

const SearchResults = ({companies}) => {
  // console.log(companies);
  let elements;
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

export default SearchResults;
