import React, { Component } from "react";
import FavItem from "./FavItem";
export default class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let FavCou = this.props.SavedCountry.map((data, index) => {
      return (
        <div>
          <FavItem
            country={data}
            key={index}
            add={this.props.add}
            delete={this.props.delete}
            deleteAll={this.props.deleteAll}
          />
        </div>
      );
    });
    return (
      <div>
        {FavCou}
      </div>
    );
  }
}
