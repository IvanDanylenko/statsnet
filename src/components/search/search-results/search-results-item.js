import React from 'react';

const SearchResultsItem = ({ company }) => {
  console.log(company);
  const { isoAlpha2Code, address } = company;
  const countryCode = isoAlpha2Code.toLowerCase();
  const flag = `/img/flags/${countryCode}.gif)`;
  let inactive = '', branch = '';
  if (company.inactive) {
    inactive = <span className="mark inactive">inactive</span>
  }
  if (company.branch) {
    branch = <span className="mark branch">branch</span>
  }
  return (
    <React.Fragment>
      <div className="search-results-item">
        <img className="flag" src={`/img/flags/${countryCode}.gif`} alt={address.country} />
        <div>
          <div className="d-flex align-items-start">
            <a href="#" className="link">
              <h4>{company.name}</h4>
            </a>
          </div>
          <p>
            <span>{address.country}</span>
            <span>-</span>
            <span>{address.street},</span>
            <span>{'Some number'}</span>
          </p>
        </div>
      </div>
      <hr />
    </React.Fragment>
  )
}

export default SearchResultsItem;
