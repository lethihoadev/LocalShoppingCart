import React, { Component } from "react";
import "../components/AddProduct.css";

class Search extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          className="txtSearch"
          placeholder="Type here to search..."
          value={this.props.valueSearch}
          name="title"
          onChange={(event) => this.props.handleSearch(event.target.value)}
        ></input>
      </div>
    );
  }
}
export default Search;
