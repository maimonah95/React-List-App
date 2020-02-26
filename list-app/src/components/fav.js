import React, { Component } from "react";
import FavItem from "./FavItem";
import { IoIosTrash } from "react-icons/io";
export default class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //Map countries that user saved
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
            modifyItemName={this.props.modifyItemName}
            handleDeletedChange={this.props.handleDeletedChange}
          />
        </div>
      );
    });
    //if the array is not Empty the button will appear
    if (this.props.SavedCountry.length !== 0) {
      return (
        <div className="deletAll">
          <button className="delAll" onClick={() => this.props.deleteAll()}>
            <IoIosTrash />
            <br />
            delete all
          </button>
          <br/>
          <button
            className="delSelectedItem"
            onClick={this.props.deletedSelectedItem}
          >
            <IoIosTrash />
            <br />
            delete Selected Item
          </button>
          {FavCou}
        </div>
      );
    } else {
      return <div> {FavCou}</div>;
    }
  }
}
