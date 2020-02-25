import React, { Component } from "react";
import Listcountry from "./components/ListCountry";
import Fav from "./components/fav";
export default class Home extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   Cname: "",
    //   Countries: [],
    //   MyList: []
    // };
  }
  render() {
    return (
      <div>
              <input
                type="name"
                placeholder="Enter country Name"
                value={this.state.Cname}
                onChange={e => this.handleChange(e)}
              />
              <button onClick={() => this.SearchCountry()}>Searching ..</button>
      </div>
    );
  }
}
