import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Stack } from "react-bootstrap";
import { fetchEvents } from "./actions/fetchEvents";
import { getCurrentDate } from "./actions/getCurrentDate";
import MonthContainer from "./containers/MonthContainer";
import EventsContainer from "./containers/EventsContainer";
import MonthNav from "./components/MonthNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchEvents();
    this.props.getCurrentDate();
  }

  render() {
    return (
      <div className="app">
        <Container fluid>
          <Row>
            <Col className="left-container" xxl={10}>
              <Stack gap={3}>
                <MonthNav data={this.props.calendarData}/>
                <MonthContainer data={this.props.calendarData}/>
              </Stack>
            </Col>
            <Col className="right-container" xxl={2}>
              <EventsContainer events={this.props.events} data={this.props.calendarData}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.events,
    calendarData: {
      currentDay: state.date.currentDay,
      currentMonth: state.date.currentMonth,
      currentYear: state.date.currentYear,
      calendar: {
        row1: state.date.calendar.row1,
        row2: state.date.calendar.row2,
        row3: state.date.calendar.row3,
        row4: state.date.calendar.row4,
        row5: state.date.calendar.row5,
      },
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEvents: () => dispatch(fetchEvents()),
    getCurrentDate: () => dispatch(getCurrentDate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
