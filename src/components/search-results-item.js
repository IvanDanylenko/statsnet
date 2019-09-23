/* eslint-disable */
import React from 'react';
import jurisdictions from '../db/jurisdictions.json';

const SearchResultsItem = ({company}) => {
  const { jurisdiction_code, registered_address } = company;
  const { country } = jurisdictions.find(item => item.code === jurisdiction_code);
  const countryCode = jurisdiction_code.split('_')[0].toLowerCase();
  const flag = { backgroundImage: `url(/img/flags/${countryCode}.gif)` };
  let inactive = '', branch = '';
  if (company.inactive) {
    inactive = <span className="mark inactive">inactive</span>
  }
  if (company.branch) {
    branch = <span className="mark branch">branch</span>
  }
  return (
    <div className="search-item" style={flag}>
      <div className="d-flex align-items-start">
        {inactive} {branch}
        <a href="#" className="link">
          <h4>{company.name}</h4>
        </a>
      </div>
      <p>
        <span>{country}</span>
        <span>-</span>
        <span>{company.registered_address_in_full},</span>
        <span>{company.company_number}</span>
      </p>
      <hr />
    </div>
  )
}

export default SearchResultsItem;
