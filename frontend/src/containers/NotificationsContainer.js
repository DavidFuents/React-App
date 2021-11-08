import React, { Component } from "react";
import { Stack } from "react-bootstrap";
import Time from "../components/Time";
import EventsContainer from "./EventsContainer";
import "./styles/NotificationsContainer.css";

export default class RightContainer extends Component {
  render() {
    return (
      <div className="background-box">
        <Stack space={3}>
          <Time />
          <EventsContainer />
        </Stack>
      </div>
    );
  }
}
