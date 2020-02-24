import React, { Component } from "react";
import OneCountry from './OneContry';
export default class ListCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  try = () => {
    console.log("wpppp");
  };
  render() {
    let newTasks = this.props.country.map((data, index) => {
      return (
        <p onClick={() => this.try()}>
          <OneCountry country={data} key={index} />
        </p>
      );
    });
    return (
      <div>
        {newTasks}
        <h3>List Country</h3>
        <p>this is country page page</p>
      </div>
    );
  }
}
