import React, { Component } from "react";
import { IoIosTrash } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { IoMdHeartHalf } from "react-icons/io";
export default class FavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideToolTips: "none",
      isChecked: false
    };
  }
  handleChek = e => {
    const ischeckedHandle = !this.state.isChecked;
    this.setState({ isChecked: ischeckedHandle });
  };
  //Mark the item as complete/favorite/(watch
  //to choose className (when user click watch item the rest of information will apeaar) class disply or none
  handleHide = e => {
    console.log("hi");
    if (this.state.hideToolTips === "none") {
      this.setState({ hideToolTips: "display" });
    } else {
      this.setState({ hideToolTips: "none" });
    }
  };
  //the div color depending on country variable
  render() {
    if (this.props.country.love === "Heart") {
      return (
        <div>
          <div className="favItemRed">
            <button
              className="DeletNum"
              onClick={() => this.props.delete(this.props.country)}
            >
              <IoIosTrash />
            </button>

            <br />
            <input
              type="text"
              value={this.props.country.ItemName}
              id={this.props.country}
              onChange={e =>
                this.props.modifyItemName(this.props.country, e.target.value)
              }
            />

            <br />
            <button className="Watch" onClick={this.handleHide}>
              <IoMdEye />
            </button>
            <button
              className="modify"
              onClick={() => this.props.modify(this.props.country)}
            >
              <IoMdHeart />
            </button>
            <input
              className="selectedItem"
              type="checkbox"
              checked={this.state.isChecked}
              value={this.props.country}
              onChange={() => {
                this.props.handleDeletedChange(
                  this.props.country,
                  this.state.isChecked
                );
                this.handleChek();
              }}
            />
            <div className={`Toggle-filter-${this.state.hideToolTips}`}>
              <br />
              {this.props.country.name}
              <br />
              <br />
              Capital : {this.props.country.capital}
              <br />
              Region :{this.props.country.region}
              <br />
              Languages :{this.props.country.languages}
              <br />
              currencies :{this.props.country.currencies}
              <br />
              Time: {this.props.country.timezones}
              <br />
              love: {this.props.country.love}
              <br />
              <img src={`${this.props.country.flag}`} />
            </div>
          </div>
        </div>
      );
    } else if (this.props.country.love === "NotHeart") {
      return (
        <div>
          <div className="favItemBlue">
            <button
              className="DeletNum"
              onClick={() => this.props.delete(this.props.country)}
            >
              <IoIosTrash />
            </button>
            <input
              type="text"
              value={this.props.country.ItemName}
              id={this.props.country}
              onChange={e =>
                this.props.modifyItemName(this.props.country, e.target.value)
              }
            />
            <button className="Watch" onClick={this.handleHide}>
              <IoMdEye />
            </button>
            <button
              className="modify"
              onClick={() => this.props.modify(this.props.country)}
            >
              <IoMdHeartHalf />
            </button>
            <input
              className="selectedItem"
              type="checkbox"
              checked={this.state.isChecked}
              value={this.props.country}
              onChange={() => {
                this.props.handleDeletedChange(
                  this.props.country,
                  this.state.isChecked
                );
                this.handleChek();
              }}
            />
            <div className={`Toggle2-filter-${this.state.hideToolTips}`}>
              <br />
              {this.props.country.name}
              <br />
              <br />
              Capital : {this.props.country.capital}
              <br />
              Region :{this.props.country.region}
              <br />
              Languages :{this.props.country.languages}
              <br />
              currencies :{this.props.country.currencies}
              <br />
              Time: {this.props.country.timezones}
              <br />
              love: {this.props.country.love}
              <br />
              <img src={`${this.props.country.flag}`} />
            </div>
          </div>
        </div>
      );
    }
  }
}
