import React from "react";
import { Link } from "react-router-dom";
import './styles/TodayEvents.css'

const TodayEvents = () => (
  <div>
    <p className="title">Today's Events</p>
    <p>None</p>
    <Link to='/events'>See Upcoming Events</Link>
    <Link to='/form'>Add Event</Link>
  </div>
);

export default TodayEvents;