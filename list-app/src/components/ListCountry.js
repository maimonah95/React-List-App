import React, { Component } from "react";
import OneCountry from "./OneContry";
import { IoMdSearch } from "react-icons/io";
export default class ListCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let newTasks = this.props.country.map((data, index) => {
      return (
        <div>
          <OneCountry country={data} key={index} add={this.props.add} />
        </div>
      );
    });
    return (
      <div>
        <div className="listCountry">
          <input
            className="InputCountry"
            type="text"
            placeholder="Enter country Name"
            value={this.props.cName}
            onChange={this.props.handleChange}
          />
          <button
            className="ButtonCountry"
            onClick={() => this.props.SearchCountry()}
          >
            <IoMdSearch/>
          </button>
        </div>
        {newTasks}
      </div>
    );
  }
}
