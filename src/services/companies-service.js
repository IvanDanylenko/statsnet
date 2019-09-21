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
    // const order = 'score';
    // const q = query.trim().replace(/\s+/g, "+");
    // console.log(q);
    // return {companies: ''};
// barclays+bank
    const companies = await this.getResource(`/companies/search${utm}`);
    return companies.results;
  }

  _transformCompany = (company) => {
    return {
      // id: this._extractId(planet),
      name: company.name,
      population: company.population,
      rotationPeriod: company.rotation_period,
      diameter: company.diameter
    };
  }
}