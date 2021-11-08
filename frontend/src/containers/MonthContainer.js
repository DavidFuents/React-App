import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Day from "../components/Day";
import "./styles/MonthContainer.css";

export default class MonthContainer extends Component {
  render() {
    return (
      <div className="month-container">
        <Row className="weekday-row">
          <Col className="weekday">
            <p>Sunday</p>
          </Col>
          <Col className="weekday">
            <p>Monday</p>
          </Col>
          <Col className="weekday">
            <p>Tuesday</p>
          </Col>
          <Col className="weekday">
            <p>Wednesday</p>
          </Col>
          <Col className="weekday">
            <p>Thursday</p>
          </Col>
          <Col className="weekday">
            <p>Friday</p>
          </Col>
          <Col className="weekday">
            <p>Saturday</p>
          </Col>
        </Row>
        <Row className="day-row">
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
        </Row>
        <Row className="day-row">
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
        </Row>
        <Row className="day-row">
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
          <Col className="day">
            <Day />
          </Col>
        </Row>
      </div>
    );
  }
}
