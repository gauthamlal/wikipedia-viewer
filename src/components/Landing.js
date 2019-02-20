import React, { Component } from "react";

import { searchText } from "../actions/searchActions";
import { connect } from "react-redux";

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

    // alert(`${this.state.text} has been submitted!`);
    this.props.searchText(this.state.text, url + this.state.text);
  };

  render() {
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
          <input
            type="submit"
            name="submit"
            id="submit-button"
            value="Search!"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text
});

const mapDispatchToProps = { searchText };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
