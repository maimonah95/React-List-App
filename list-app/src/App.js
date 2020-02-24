import React, { Component } from "react";
import Listcountry from "./components/ListCountry";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cname: "",
       Countries:[],
MyList:[],
    }
  }
  handleChange = e => {
    e.preventDefault();
    // console.log("country name");
    // console.log(e.target.value);
    // console.log(e.target);
    this.setState({
      Cname: e.target.value
    });
  };
  SearchCountry = () => {
    //const countrySearch =  [];
    console.log("Searching ....");
        // this.setState({
        //   Cname: e.target.value
        // });
    axios({
      method: "Get",
        // url: `https://restcountries.eu/rest/v2/name/saudi`
url: (`https://restcountries.eu/rest/v2/name/${this.state.Cname}`)
    })
      .then(res => {
        // for(let i=0;i<=res.data.length;i++){
        // console.log("RESPONSE: ", res);
        // console.log("DATA: ", res.data[0].name);
        // let countrySearch = res.data[i];
          this.setState({
            // name:res.data.name,
            // region:res.data.region,
            // capital:res.data.capital,
            // nativeName:res.data.nativeName,
            // currencies:res.data.currencies,
            // languages:res.data.languages,
            //  Countries: [...countrySearch]
            Countries: [...this.state.Countries, res.data[0]]
          });
        //  console.log("what " + countrySearch);
        // }
      })
      .catch(err => {
        console.log("ERROR: ", err);
      });
  };
  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <List todos={this.state.todos}/> */}
            <Link to="/ListCountry">Country</Link> {"||  "}
            {/* <Link to="/List">Task</Link> {'||  '}
            <Link to="/About">About</Link>{'||  '} */}
            <Route
              path="/ListCountry"
              component={() => (
                <Listcountry country={this.state.Countries} />
              )}
            />
            {/* <Route path="/List" component={() => <List tasks={this.state.todos} />} />
          <Route path="/About" component={About} /> */}
          </div>
        </Router>

        <input
          type="name"
          placeholder="Enter country Name"
          value={this.state.Cname}
          onChange={e => this.handleChange(e)}
        />
        <button id="country" onClick={() => this.SearchCountry()}>
          Searching ..
        </button>
        {/* <Listcountry country={this.state.Countries} /> */}
      </div>
    );
  }
}
