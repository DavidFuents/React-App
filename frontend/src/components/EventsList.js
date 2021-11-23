import React from "react";
import { Link } from "react-router-dom";
import "./styles/Events.css"

const EventsList = ({ events, dayEvents }) => {
  const renderEvents = Object.keys(events).map((eventID) => (
    <li><Link key={eventID} to={`/events/${eventID}`}>
      {events[eventID].name}
    </Link></li>
  ));

  const renderDayEvents = Object.keys(dayEvents).map((dayEventID) => (
    <li><Link key={dayEventID} to={`/events/${dayEventID}`}>
      {dayEvents[dayEventID].name}
    </Link></li>
  ));

  return (
    <div>
      <p className="title">Selected Day Events</p>
      <ul>{renderDayEvents}</ul>
      <p className="title">All Events</p>
      <ul>{renderEvents}</ul>
    </div>
  );
};

export default EventsList;
