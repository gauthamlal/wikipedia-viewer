import React, { Component } from "react";
import { connect } from "react-redux";

import { searchText, clearText } from "../actions/searchActions";
import CardComponent from "./CardComponent";

const url =
  "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=";

class Landing extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.searchText(this.state.text, url + this.state.text);
  };

  handleClear = e => {
    this.setState({ text: "" });
    this.props.clearText();
  };

  render() {
    const itemArr = [];
    for (let key in this.props.objects) {
      if (this.props.objects.hasOwnProperty(key)) {
        const current = this.props.objects[key];
        itemArr.push(
          <CardComponent key={current.pageid} searchObject={current} />
        );
      }
    }

    // const itemList = <ul>{itemArr}</ul>;
    const defaultItem = <h2>Go ahead and search!!!</h2>;

    return (
      <div>
        <a
          href="https://en.wikipedia.org/wiki/Special:Random"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to read a random Wikipedia Article
        </a>
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="search"
            id="search-text"
            placeholder="Search on Wikipedia!"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleClear}>
            Clear
          </button>
          <input
            type="submit"
            name="submit"
            id="submit-button"
            value="Search!"
          />
        </form>
        {this.props.haveSearched ? itemArr : defaultItem}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text,
  objects: state.results,
  haveSearched: state.haveSearched
});

const mapDispatchToProps = { searchText, clearText };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
