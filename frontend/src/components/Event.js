import React from "react";
import { Link } from "react-router-dom";
import "./styles/Event.css";

const Event = ({match, events}) => {
  return (
    <div className='event'>
      <Link to='/events'>Close</Link>
      <p>{events[match.params.eventId].name}</p>
      <ul>
        <li>Date: <br></br> {events[match.params.eventId].date}</li>
        <li>Time: <br></br> {events[match.params.eventId].time}</li>
        <li>Description: <br></br> {events[match.params.eventId].description}</li>
      </ul>
    </div>
  );
};

export default Event;