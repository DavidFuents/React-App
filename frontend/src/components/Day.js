import React, { Component } from "react";
import DayEvents from './DayEvents';
import './styles/Day.css';

export default class Day extends Component {
  render() {
    return (
      <div className='day-container'>
        <p>{this.props.date}</p>
        <div>
          <DayEvents />
        </div>
      </div>
    );
  }
}
