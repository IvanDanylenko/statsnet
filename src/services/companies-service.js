import yandexCompanies from '../db/test-data/companies-yandex.json';

export default class CompaniesService {
  _apiBase = 'https://api.opencorporates.com/v0.4';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    return await res.json();
  };

  getCompanies = async (search, mockData = false) => {
    if (mockData) {
      return yandexCompanies.results;
    }

    const companies = await this.getResource(`/companies/search${search}`);
    return this._transformCompany(companies.results);
  }

  _transformCompany = (results) => {
    // eslint-disable-next-line
    for (let company of results.companies) {
      if (!company.registered_address) {
        company.registered_address = {}
      }
      if (!company.source) {
        company.source = {}
      }
    }
    return results;
  }
}