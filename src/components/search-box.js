import React, { Component } from 'react';
import Loader from './loader';
import FontAwesome from 'react-fontawesome';
import URL from '../helpers/url';
import jurisdictions from '../db/jurisdictions.json';

class SearchBox extends Component {
  url = new URL();

  state = {
    formFields: {
      q: '',
      jurisdiction_code: ''
    },
    search: ''
  }

  componentDidMount () {
    this.initState();
  }

  componentDidUpdate () {
    if (this.state.search !== window.location.search) {
      this.initState();
    }
  }
  
  test = () => {
    console.log(this.state);
  }

  initState = () => {
    const { search } = window.location;
    const params = this.url.getAllUrlParams(search);
    this.setState({ 
      formFields: {
        q: params.q ? this.url.decodeParamValue(params.q) : '',
        jurisdiction_code: params.jurisdiction_code ? params.jurisdiction_code : '',
      },
      search
    }, () => {
      // if (window.location.pathname === '/companies') {
      //   const title = document.getElementsByTagName('title')[0];
      //   const { q } = this.state.formFields;
      //   title.innerText = `Companies matching '${q}' :: OpenCorporates`;
      // }
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // get values from form
    const { formFields, search } = this.state;
    // convert utm parameters to string
    const encodedParams = this.url.encodeAllUrlParams(formFields);
    // do next if form data was changed
    if ( encodedParams !== search ) {
      this.setState(
        { search: encodedParams },
        () => {
          this.props.history.push("/companies" + encodedParams);
        }
      )
    }
  }

  handleInputChange = (e) => {
    const q = e.target.value;
    this.setState(({formFields}) => {
      const copy = Object.assign({}, formFields, { q });
      return { formFields: copy };
    });
  }

  handleSelectChange = (e) => {
    const jurisdiction_code = e.target.value;
    this.setState(({formFields}) => { 
      const copy = Object.assign({}, formFields, { jurisdiction_code });
      return { formFields: copy };
    });
  }

  render() {
    const { formFields } = this.state;

    return (
      <form className="search-box" onSubmit={this.handleSubmit}>
        {/* <button 
          type="button" 
          onClick={this.test}
          style={{
            position: "fixed",
            top: "20px",
            right: "20px"
          }}>Test</button> */}
        <div className="search-field">
          <input 
            autoFocus 
            type="text" 
            name="query" 
            placeholder="Search 178,868,916 companies"
            value={formFields.q}
            onChange={this.handleInputChange} />
          <select 
            name="jurisdiction_code"
            value={formFields.jurisdiction_code}
            onChange={this.handleSelectChange} >
            { jurisdictions.map(({name, code}, index) => (
              <option key={index} value={code}>{name}</option>
            ))}
          </select>
          <button type="submit">
            { window.location.pathname === '/' ? 
              <FontAwesome name="search" /> : 'Go'
            }
          </button>
        </div>
        <Loader loading={this.props.loading} />
      </form>
    );
  }
}

export default SearchBox;
