import React, { Component } from "react";
import Event from "./Event";
import "./styles/Events.css";

export default class Events extends Component {
  render() {
    return (
      <div>
        <p className="title">Today's Events</p>
        <Event />
        <Event />
        <p className="title">Upcoming Events</p>
        <Event />
        <Event />
      </div>
    );
  }
}
