import React, { Component } from "react";

export default class CardComponent extends Component {
  render() {
    const data = this.props.searchObject;
    const url = `https://en.wikipedia.org/?curid=${data.pageid}`;
    return (
      <div className="card">
        <a
          href={url}
          className="card__title"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.title}
        </a>
        <article>
          <p className="card__extract">{data.extract}</p>
        </article>
      </div>
    );
  }
}
