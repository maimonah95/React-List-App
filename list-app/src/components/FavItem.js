import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={this.props.displyInfo(this.props.country)}
      >
        {this.props.country.name}
      </button>
    );
  }
}
