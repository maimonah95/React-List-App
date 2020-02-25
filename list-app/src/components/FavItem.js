import React, { Component } from "react";
export default class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideToolTips: "none"
    };
  }
  handleHide = e => {
    console.log("hi");
    if (this.state.hideToolTips === "none") {
      this.setState({ hideToolTips: "display" });
    } else {
      this.setState({ hideToolTips: "none" });
    }
  };
  render() {
    return (
      <div
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={this.handleHide}
      >
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.props.delete(this.props.country)}
        >
          Delete
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => this.props.deleteAll()}
        >
          Delete all
        </button>
        <br />
        {this.props.country.name}
        <div className={`Toggle-filter-${this.state.hideToolTips}`}>
          <br />
          Capital : {this.props.country.capital}
          <br />
          Region :{this.props.country.region}
          <br />
          Languages :{this.props.country.languages}
          <br />
          currencies :{this.props.country.currencies}
          <br />
          Flag :<img src={`${this.props.country.flag}`} />
          <br />
          Time: {this.props.country.timezones}
        </div>
      </div>
    );
  }
}
