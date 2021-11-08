import React, { Component } from "react";
import Events from "../components/Events";
import './styles/EventsContainer.css';

export default class EventsContainer extends Component {
  render() {
    return (
      <div className='events-container'>
        <Events />
      </div>
    );
  }
}
