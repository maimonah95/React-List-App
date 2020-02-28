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
      //Handle Country Input
      cName: "",
      //Handle Region Input
      rName: "",
      //One country that user search about it
      Countries: [],
      //list user country Added
      MyList: []
    };
  }
  //Deleted Item from MyList
  deletedSelectedItem = () => {
    const leftCountry = this.state.MyList.filter(item => {
      return item.delete !== true;
    });
    this.setState({ MyList: leftCountry });
  };
  //Select Item from Mylist and check if ckecked or not
  handleDeletedChange = (country, e) => {
    console.log(country);
    const deleted = [...this.state.MyList];
    let index = deleted.indexOf(country);
    if (e) {
      deleted[index].delete = false;
    } else {
      deleted[index].delete = true;
    }
    this.setState({ MyList: deleted });
  };
  //Edit an item from a list
  //modify the Item Name (name that is display to the user)
  modifyItemName = (country, e) => {
    const myList = this.state.MyList;
    myList.map(item => {
      if (item.name === country.name) {
        item.ItemName = e;
      }
    });
    this.setState({
      MyList: myList
    });
  };
  //Clear/delete all items
  deleteAll = () => {
    console.log("finally2");
    // const filtredList = this.state.MyList.filter(item => item !== country);
    this.setState({
      MyList: []
    });
  };
  //Add a new item to a list
  add = country => {
    console.log("wpppp");
    console.log(country.love);
    const Add = [...this.state.MyList];
    const countryIndex = Add.indexOf(country);
    if (countryIndex !== -1) {
      console.log(` this ${country.name} Exist`);
    } else {
      console.log("added");
      this.setState({
        MyList: [...this.state.MyList, country]
      });
    }
    console.log(country.name);
  };
  // handle input text country
  handleChange = e => {
    //e.preventDefault();
    this.setState({
      Countries: [],
      cName: e.target.value
    });
    e.target.focus();
  };
  //Fetch data from 3rd party(using axios)1st ENDpoint
  SearchCountry = () => {
    console.log("Searching ....");
    axios({
      method: "Get",
      // url: `https://restcountries.eu/rest/v2/name/saudi`
      url: `https://restcountries.eu/rest/v2/name/${this.state.cName}`
    })
      .then(res => {
        let contr = res.data.map((data, index) => {
          let CurrentCountry = {};
          return (
            console.log("name" + data.name),
            (CurrentCountry.ItemName = data.name),
            (CurrentCountry.name = data.name),
            (CurrentCountry.region = data.region),
            (CurrentCountry.languages = data.languages[0].name),
            (CurrentCountry.capital = data.capital),
            (CurrentCountry.currencies = data.currencies[0].code),
            (CurrentCountry.flag = data.flag),
            this.setState({
              Countries: [...this.state.Countries, CurrentCountry],
              cName: " "
            })
          );
        });
      })

      .catch(err => {
        console.log("ERROR: ", err);
      });
  };
  //handle input text Rigion
  handleRChange = e => {
    //e.preventDefault();
    this.setState({
      Countries: [],
      rName: e.target.value
    });
    e.target.focus();
  };
  //Fetch data from 3rd party(using axios) API 2nd ENDPoint 
  SearchCountryByRegion = () => {
    console.log("Searching ....");
    axios({
      method: "Get",
      // url: `https://restcountries.eu/rest/v2/name/asia`
      url: `https://restcountries.eu/rest/v2/region/${this.state.rName}`
    })
      .then(res => {
        let contr = res.data.map((data, index) => {
          let CurrentCountry = {};
          return (
            console.log("name" + data.name),
            (CurrentCountry.ItemName = data.name),
            (CurrentCountry.name = data.name),
            (CurrentCountry.region = data.region),
            (CurrentCountry.languages = data.languages[0].name),
            (CurrentCountry.capital = data.capital),
            (CurrentCountry.currencies = data.currencies[0].code),
            (CurrentCountry.flag = data.flag),
            this.setState({
              Countries: [...this.state.Countries, CurrentCountry],
              cName: " "
            })
          );
        });
        console.log(this.state.Countries.length)
      })

      .catch(err => {
        console.log("ERROR: ", err);
      });
  };
  render() {
    return (
      <div>
        <Router>
          <div className="big">
            <div>
              <div className="link">
                <Link to="/List">Search Country</Link> {"  |  "}
                <Link to="/Fav">Saved Country</Link> {"   "}
              </div>
              <br />
              <br />
              <Route
                path="/List"
                render={() => (
                  <Listcountry
                    country={this.state.Countries}
                    add={this.add}
                    SearchCountry={this.SearchCountry}
                    handleChange={this.handleChange}
                    cName={this.state.cName}
                    handleRChange={this.handleRChange}
                    rName={this.state.rName}
                    SearchCountryByRegion={this.SearchCountryByRegion}
                  />
                )}
              />
              <Route
                path="/Fav"
                render={() => (
                  <Fav
                    SavedCountry={this.state.MyList}
                    delete={this.delete}
                    deleteAll={this.deleteAll}
                    modifyItemName={this.modifyItemName}
                    handleDeletedChange={this.handleDeletedChange}
                    deletedSelectedItem={this.deletedSelectedItem}
                  />
                )}
              />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
