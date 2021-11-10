import React from "react";
import { Link } from "react-router-dom";
import "./styles/Events.css"

const EventsList = ({ events }) => {
  const renderEvents = Object.keys(events).map((eventID) => (
    <li><Link key={eventID} to={`/events/${eventID}`}>
      {events[eventID].name}
    </Link></li>
  ));

  return (
    <div>
      <p className="title">Upcoming Events</p>
      <ul>{renderEvents}</ul>
    </div>
  );
};

export default EventsList;
