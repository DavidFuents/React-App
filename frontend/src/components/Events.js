import React from "react";
import { Link, Route } from "react-router-dom";
import EventsList from "./EventsList";
import Event from "./Event";
import "./styles/Events.css";

const Events = ({ match, events, dayEvents }) => (
  <div>
    <Link to='/'>Go back</Link>
    <EventsList events={events} dayEvents={dayEvents} />
    <Route
      path={`${match.url}/:eventId`}
      render={(routerProps) => <Event {...routerProps} dayEvents={dayEvents} events={events} />}
    />
  </div>
);

export default Events;