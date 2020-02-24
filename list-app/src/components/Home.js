import React, { Component } from "react";
import Listcountry from "./ListCountry";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cname: "",
      Countries: [],
      MyList: []
    };
  }
  try = coutry => {
    console.log("wpppp111");
    this.setState({
      RealCountry: [...this.state.RealCountry]
    });
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      Cname: e.target.value
    });
  };
  SearchCountry = () => {
    console.log("Searching ....");
    axios({
      method: "Get",
      // url: `https://restcountries.eu/rest/v2/name/saudi`
      url: `https://restcountries.eu/rest/v2/name/${this.state.Cname}`
    })
      .then(res => {
        this.setState({
          Countries: [...this.state.Countries, res.data[0]]
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };
  render() {
    return (
      <div>
        <input
          type="name"
          placeholder="Enter country Name"
          value={this.state.Cname}
          onChange={e => this.handleChange(e)}
        />
        <button id="country" onClick={() => this.SearchCountry()}>
          Searching ..
        </button>
        <Listcountry country={this.state.Countries} />
      </div>
    );
  }
}
