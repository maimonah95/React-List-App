import React, { Component } from "react";
import OneCountry from "./OneContry";
export default class ListCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let newTasks = this.props.country.map((data, index) => {
      return (
        <div>
          <OneCountry country={data} key={index}  add={this.props.add}/>
        </div>
      );
    });
    return (
      <div>
        {newTasks}
      </div>
    );
  }
}
