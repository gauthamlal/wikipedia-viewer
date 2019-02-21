import React, { Component } from "react";

export default class CardComponent extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.searchObject.title}</h3>
      </div>
    );
  }
}
