import React, { Component } from "react";
import Listcountry from "./components/ListCountry";
import Fav from './components/fav';
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
      hideToolTips:'display'
      // HideInput:false,
      // HideButton:false
    };

  }

handleHide = (e) =>{
  console.log("hi");
if(this.state.hideToolTips === 'none'){
  this.setState({ hideToolTips: "display" })
}else{
    this.setState({ hideToolTips: "none" })
  }
  }
  add = country => {
          console.log("wpppp");
          console.log(country.name);
          this.setState({
            MyList: [...this.state.MyList, country]
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
          Countries: [ res.data[0]],
          // Countries: [...this.state.Countries, res.data[0]],
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
          <div >
            <Link to="/List">Country</Link> {"||  "}
            <Link to="/Fav">Saved Country</Link> {"||  "}
            <br/><br/>
            <div >
              <input
                type="name"
                placeholder="Enter country Name"
                value={this.state.Cname}
                onChange={e => this.handleChange(e)}
              />
              <button
                onClick={() => this.SearchCountry()}
              >
                Searching ..
              </button>
            </div>
            <Route
              path="/List"
              component={() => (
                <Listcountry country={this.state.Countries} add={this.add} />
              )}
            />
            <Route
              path="/Fav"
              component={() => <Fav SavedCountry={this.state.MyList} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}
