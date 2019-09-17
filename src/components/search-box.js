import React, { Component } from 'react';

class SearchBox extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target["query"].value.trim().replace(/\s+/g, "+");
    const utm = [
      { param: "q", value: query },
      { param: "order", value: "score" }
    ]

    if (query) {
      let utmString = "";
      for (let i in utm) {
        i === "0" ? utmString += "?" : utmString += "&";
        utmString += utm[i].param + "=" + utm[i].value
      }

      this.props.history.push(`/companies${utmString}`);
    }
  }

  render(){
    return (
      <form className="search-form" onSubmit={this.handleSubmit}>
        <h3>Search form</h3>
        <input type="text" name="query" placeholder="Type company name" />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default SearchBox;
