import React from "react";
import { Link, Route } from "react-router-dom";
import EventsList from "./EventsList";
import Event from "./Event";
import "./styles/Events.css";

const Events = ({ match, events }) => (
  <div>
    {console.log('EVENTS: ', events)}
    <Link to='/'>Go back</Link>
    <EventsList events={events} />
    <Route
      path={`${match.url}/:eventId`}
      render={(routerProps) => <Event {...routerProps} events={events} />}
    />
    <Link to='/form'>Add Event</Link>
  </div>
);

export default Events;