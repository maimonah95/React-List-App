import React, { Component } from "react";
import FavItem from "./FavItem";
import { IoIosTrash } from "react-icons/io";
export default class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const FavCou = this.props.SavedCountry.map((data, index) => {
      return (
        <div>
          <FavItem
            country={data}
            key={index}
            add={this.props.add}
            delete={this.props.delete}
            modify={this.props.modify}
          />
        </div>
      );
    });
    if (this.props.SavedCountry.length !== 0) {
      return (
        <div className="deletAll">
          <button className="delAll" onClick={() => this.props.deleteAll()}>
            <IoIosTrash />
          </button>
          {FavCou}
        </div>
      );
    } else {
      return <div> {FavCou}</div>;
    }
  }
}
