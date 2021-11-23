import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { addEvent } from "../actions/addEvent.js";
import { addDay } from "../actions/addDay.js";
import EventForm from "../components/EventForm";
import Events from "../components/Events";
import TodayEvents from "../components/TodayEvents";
import "./styles/EventsContainer.css";

class EventsContainer extends Component {
  render() {
    return (
      <div className="events-container">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <TodayEvents />
              </Route>
              <Route exact path="/form">
                <EventForm addEvent={this.props.addEvent} addDay={this.props.addDay} />
              </Route>
              <Route
                path="/events"
                render={(routerProps) => (
                  <Events {...routerProps} dayEvents={this.props.dayEvents} events={this.props.events} />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (data) => dispatch(addEvent(data)),
    addDay: (data) => dispatch(addDay(data)),
  };
};

export default connect(null, mapDispatchToProps)(EventsContainer);
