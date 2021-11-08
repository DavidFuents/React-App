import React, { Component } from 'react';
import './styles/Event.css';

export default class Event extends Component{
  render() {
    return (
      <div>
        <p>
        Event name - Category
        </p>
        <ul>
          <li>Date Time</li>
          <li>Description</li>
        </ul>
      </div>
    )
  }
}