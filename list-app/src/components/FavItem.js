import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        onClick={this.handleHide} >
          <br/>
        {this.props.country.name}
        <div className={`Toggle-filter-${this.state.hideToolTips}`}>
            <br/>
         Capital : {this.props.country.capital}
          <br />
          Region :{this.props.country.region}
          <br />
          Languages :{this.props.country.languages[0].name}
          <br />
           currencies :{this.props.country.currencies[0].code}
          <br />
          Flag :<img src={`${this.props.country.flag}`} />
        </div>
      </div>
    );
  }
}
