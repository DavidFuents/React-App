import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDayEvents } from "../actions/fetchDayEvents";
import "./styles/Day.css";

class Day extends Component {
  handleCLick = () => {
    this.props.fetchDayEvents({ day: this.props.date });
  };

  render() {
    return (
      <div className="day-container" onClick={this.handleCLick}>
        <p>{this.props.date}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDayEvents: (day) => dispatch(fetchDayEvents(day)),
  };
};

export default connect(null, mapDispatchToProps)(Day);

