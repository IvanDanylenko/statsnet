import React from 'react';

const SearchResultsItem = ({company}) => {
  // console.log(company);
  return <div />;
  const { isoAlpha2Code, address } = company;
  const countryCode = isoAlpha2Code.toLowerCase();
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
        <span>{address.country}</span>
        <span>-</span>
        <span>{address.street},</span>
        <span>{'Some number'}</span>
      </p>
      <hr />
    </div>
  )
}

export default SearchResultsItem;
