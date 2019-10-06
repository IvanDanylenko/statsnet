import yandex from '../db/test-data/dnb-api-yandex.json';

export default class CompaniesService {
  getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  getCompanies = async (params, mockData = false) => {
    if (mockData) {
      return this._transformDataFromDNBApi(yandex);
    }

    const apiSearch = this._formSearchQueryToDNBApi(params);

    const response = await this.getResource(apiSearch);
    return this._transformDataFromDNBApi(response);
  }

  // Expected data structure
  /*
    results: {}
      total_pages: Number
      companies: []
        company: {}
          name: String
          jurisdiction_code: String
          // site: String
          branch: Boolean
          inactive: Boolean
          address: {}
            country: String
            street: String
  */

  _formSearchQueryToDNBApi = (params) => {
    const base = "https://www.dnb.com/apps/dnb/thirdparty/dnbdirectutil?returnNav=false&captchaDone=true&pageSize=1000&pageNumber=1&criteriasearch=true";
    const search = base + "&searchTerm=YANDEX";
    return search;
  }

  _transformDataFromDNBApi = (res) => {
    console.log("response: ", res);
    const companies = res.searchCandidates.map(company => {
      const {
        organization: {
          primaryName,
          primaryAddress: {
            addressCountry,
            streetAddress
          },
          corporateLinkage,
          dunsControlStatus
        }
      } = company;

      return {
        name: primaryName,
        isoAlpha2Code: addressCountry.isoAlpha2Code,
        branch: corporateLinkage.isBranch,
        inactive: dunsControlStatus.isOutOfBusiness,
        address: {
          country: addressCountry.countryName,
          street: streetAddress.line1
        }
      }
    });

    return {
      totalCount: res.candidatesMatchedQuantity,
      companies
    };
  }

  _formSearchQueryToOpenCorApi = () => {
    return false;
  }

  _transformDataFromOpenCorApi = (res) => {
    // eslint-disable-next-line
    for (let company of res.companies) {
      if (!company.registered_address) {
        company.registered_address = {}
      }
      if (!company.source) {
        company.source = {}
      }
    }
    return res;
  }
}