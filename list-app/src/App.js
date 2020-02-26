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
      cName: "",
      Countries: [],
      MyList: []
    };
  }
  deletedSelectedItem = () => {
const leftCountry=this.state.MyList.filter((item)=>{
return item.delete!==true
})
this.setState({ MyList: leftCountry });
  }

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
  //Edit an item from a list 1
  //Modify object variable
  modify = country => {
    if (country.love === "Heart") {
      const myList = this.state.MyList;
      myList.map(item => {
        if (item.name === country.name) {
          item.love = "NotHeart";
        }
      });
      this.setState({
        MyList: myList
      });
    } else {
      const myList = this.state.MyList;
      myList.map(item => {
        if (item.name === country.name) {
          item.love = "Heart";
        }
      });
      this.setState({
        MyList: myList
      });
    }
  };
  //Edit an item from a list 2
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
  //Remove an item from a list
  delete = country => {
    console.log("finally");
    const filtredList = this.state.MyList.filter(item => item !== country);
    this.setState({
      MyList: filtredList
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
  // handle input text
  handleChange = e => {
    //e.preventDefault();
    this.setState({
      cName: e.target.value
    });
    e.target.focus();
  };
  //Fetch data from 3rd party(using axios)
  SearchCountry = () => {
    console.log("Searching ....");
    axios({
      method: "Get",
      // url: `https://restcountries.eu/rest/v2/name/saudi`
      url: `https://restcountries.eu/rest/v2/name/${this.state.cName}`
    })
      .then(res => {
        console.log("name" + res.data[0].name);
        const CurrentCountry = {
          ItemName: res.data[0].name,
          name: res.data[0].name,
          region: res.data[0].region,
          languages: res.data[0].languages[0].name,
          capital: res.data[0].capital,
          currencies: res.data[0].currencies[0].code,
          timezones: res.data[0].timezones[0],
          flag: res.data[0].flag,
          love: "Heart" //IoMdHeart // IoMdHeartHalf
        };
        this.setState({
          Countries: [CurrentCountry],
          cName: " "
        });
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };
  render() {
    return (
      <div className="style">
        <Router>
          <div>
            <div className="link">
              <Link className="links" to="/List">
                Country
              </Link>{" "}
              {"  |  "}
              <Link className="links" to="/Fav">
                Saved Country
              </Link>{" "}
              {"   "}
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
                  modify={this.modify}
                  modifyItemName={this.modifyItemName}
                  handleDeletedChange={this.handleDeletedChange}
                  deletedSelectedItem={this.deletedSelectedItem}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}
