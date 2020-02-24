import React, { Component } from "react";
import "./../App.css";
export default class OneContry extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    
    // };
  }
   render() {
       return (
         <table className="table table-hover">
           <thead>
             <tr>
               <th scope="col">{this.props.country.name}</th>
               <th scope="col">
                 Information
                 <button
                   type="button"
                   className="btn btn-outline-secondary"
                   onClick={() => this.props.add(this.props.country)}
                 >
                   Add To List
                 </button>
               </th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th scope="row">Capital</th>
               <td>{this.props.country.capital}</td>
             </tr>
             <tr>
               <th scope="row">Region</th>
               <td>{this.props.country.region}</td>
             </tr>
             <tr>
               <th scope="row">languages</th>
               <td>{this.props.country.languages[0].name}</td>
             </tr>
             <tr>
               <th scope="row">currencies</th>
               <td> {this.props.country.currencies[0].code}</td>
             </tr>
             <tr>
               <th scope="row">Flag</th>
               <td>
                 <img src={`${this.props.country.flag}`} />
               </td>
             </tr>
           </tbody>
         </table>
       );
   }
}