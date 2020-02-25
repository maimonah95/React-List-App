import React, { Component } from "react";
import Listcountry from "./components/ListCountry";
import Fav from "./components/fav";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cname: "",
      Countries: [],
      MyList: [],
    };
  }
  delete = country => {
    console.log("finally");
    const filtredList = this.state.MyList.filter(item => item !== country);
    this.setState({
      MyList: filtredList
    });
  };
  deleteAll = () => {
    console.log("finally2");
    // const filtredList = this.state.MyList.filter(item => item !== country);
    this.setState({
      MyList: []
    });
  };
  add = country => {
    console.log("wpppp");
    console.log(country.name);
    // console.log(country.languages[0].name);
    this.setState({
      MyList: [...this.state.MyList, country]
    });
    // console.log("country : " + this.state.CurrentCountry.name);
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
        console.log("name" + res.data[0].name);
        const CurrentCountry1 = {
          name: res.data[0].name,
          region: res.data[0].region,
          languages: res.data[0].languages[0].name,
          capital: res.data[0].capital,
          currencies: res.data[0].currencies[0].code,
          timezones:res.data[0].timezones[0],
          flag: res.data[0].flag
        };
        this.setState({
          Countries: [CurrentCountry1],
          Cname: " "
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
    // this.handleHide();
  };
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to="/List">Country</Link> {"||  "}
            <Link to="/Fav">Saved Country</Link> {"||  "}
            <br />
            <br />
            <div>
              <input
                type="name"
                placeholder="Enter country Name"
                value={this.state.Cname}
                onChange={e => this.handleChange(e)}
              />
              <button onClick={() => this.SearchCountry()}>Searching ..</button>
            </div>
            <Route
              path="/List"
              component={() => (
                <Listcountry country={this.state.Countries} add={this.add} />
              )}
            />
            <Route
              path="/Fav"
              component={() => (
                <Fav
                  SavedCountry={this.state.MyList}
                  delete={this.delete}
                  deleteAll={this.deleteAll}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}
