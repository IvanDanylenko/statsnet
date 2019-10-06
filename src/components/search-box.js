import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import URL from '../helpers/url';

class SearchBox extends Component {
  url = new URL();

  state = {
    q: '',
    search: ''
  }

  componentDidMount() {
    this.initState();
  }

  componentDidUpdate() {
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
      q: params.q ? this.url.decodeParamValue(params.q) : '',
      search
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // get values from form
    const { q, search } = this.state;
    // convert utm parameters to string
    const encodedParams = this.url.encodeAllUrlParams({ q });
    // do next if form data was changed
    if (encodedParams !== search) {
      this.setState(
        { search: encodedParams },
        () => {
          this.props.history.push("/search" + encodedParams);
        }
      )
    }
  }

  handleInputChange = (e) => {
    const q = e.target.value;
    this.setState({ q });
  }

  render() {
    let placeholder = '';
    if (this.url.isHomePage()) {
      placeholder = 'Search 178,868,916 companies'
    } else {
      placeholder = 'Search'
    }

    return (
      <form className="search-box"
        onSubmit={this.handleSubmit} >
        <div className="search-field">
          <input
            autoFocus
            type="text"
            name="query"
            placeholder={placeholder}
            value={this.state.q}
            onChange={this.handleInputChange} />
          <button type="submit">
            <FontAwesome name="search" />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBox;
