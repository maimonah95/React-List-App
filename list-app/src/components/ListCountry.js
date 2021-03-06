import React, { Component } from "react";
import OneCountry from "./OneContry";
import { IoMdSearch } from "react-icons/io";
export default class ListCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  // Map country that user search on 
  render() {
    let newTasks = this.props.country.map((data, index) => {
      return (
        <div>
          <OneCountry country={data} key={data.name} add={this.props.add} />
        </div>
      );
    });
    return (
      <div>
        <div className="listCountry">
          <h6>Search about country</h6>
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
            <IoMdSearch />
          </button>
          <br />
          <h6>or Search about Countries in Region</h6>
          {/* <h6>Africa,Americas,Asia, Europe,Oceania</h6> */}
          <input
            className="InputCountry"
            type="text"
            placeholder="Enter Region:Africa,Americas,Asia, Europe,Oceania"
            value={this.props.rName}
            onChange={this.props.handleRChange}
          />
          <button
            className="ButtonCountry"
            onClick={() => this.props.SearchCountryByRegion()}
          >
            <IoMdSearch />
          </button>
        </div>
        {newTasks}
      </div>
    );
  }
}
