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

  getCompanies = async (utm) => {
    const companies = await this.getResource(`/companies/search${utm}`);
    return this._transformCompany(companies.results);
  }

  _transformCompany = (results) => {
    const {companies: {company}} = results;
    if (!company.registered_address) {
      company.registered_address = {}
    }
    if (!company.source) {
      company.source = {}
    }
    return results;
  }
}