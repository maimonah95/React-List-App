import React, { Component } from "react";
import FavItem from './FavItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  displyInfo = (info) =>{
console.log("this is  button ");
  }
  render(){
         let FavCou = this.props.SavedCountry.map((data, index) => {
           return (
             <div>
               <FavItem
                 country={data}
                 key={index}
                 add={this.props.add}
                 displyInfo={this.displyInfo}/>
             </div>
           );
         });
      return <div>{FavCou}</div>;
  }
}