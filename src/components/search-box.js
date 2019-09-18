import React, { Component } from 'react';
import spinnerUrl from '../assets/spinner.svg';

class SearchBox extends Component {
  state = {
    query: '',
    utm: ''
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.state.utm && prevState.utm !== this.state.utm) {
      this.props.history.push(this.state.utm);
      // console.log("Update history");
    }
  }

  handleInputChange = (e) => {
    const query = e.target.value;
    this.setState({ query });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.query.trim().replace(/\s+/g, "+");
    // const query = e.target["query"].value.trim().replace(/\s+/g, "+");
    const utm = [
      { param: "q", value: query },
      { param: "order", value: "score" }
    ]

    if (query && this.state.prevQuery !== this.state.query) {
      let utmString = "";
      // eslint-disable-next-line
      for (let i in utm) {
        i === "0" ? utmString += "?" : utmString += "&";
        utmString += utm[i].param + "=" + utm[i].value
      }

      // this.props.history.push(`/companies${utmString}`);
      this.setState({ utm: `/companies${utmString}` });
    }
  }

  render() {
    let spinner;
    if (this.props.loading) {
      spinner = <img src={spinnerUrl} alt="spinner" />
    }

    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <h3>Search form</h3>
        <input type="text" name="query" placeholder="Type company name" onChange={this.handleInputChange} />
        <button type="submit" disabled={!this.state.query}>Send</button>
        { spinner }
      </form>
    );
  }
}

export default SearchBox;
