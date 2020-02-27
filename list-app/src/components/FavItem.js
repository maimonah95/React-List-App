import React, { Component } from "react";
import { IoMdEye } from "react-icons/io";
export default class FavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideToolTips: "none",
      isChecked: false
    };
  }
  //Handle checkbox
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
      return (
        <div>
          <div className="favItem">
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
              <strong> Name : </strong>{this.props.country.name}
              <br />
              <strong>Capital :</strong> {this.props.country.capital}
              <br />
             <strong> Region :</strong>{this.props.country.region}
              <br />
              <strong>Languages :</strong>{this.props.country.languages}
              <br />
              <strong>currencies :</strong>{this.props.country.currencies}
              <br />
              <strong>Time: </strong>{this.props.country.timezones}
              <br />
              <img src={`${this.props.country.flag}`} />
            </div>
          </div>
        </div>
      );
  }
}
