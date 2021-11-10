import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Day from "../components/Day";
import "./styles/MonthContainer.css";

export default class MonthContainer extends Component {
  renderRow1 = () => this.props.data.calendar.row1.map((day, id) => <Col className='day'> <Day key={`${id}`} date={day} /></Col>)
  renderRow2 = () => this.props.data.calendar.row2.map((day, id) => <Col className='day'><Day key={`${id}`} date={day} /></Col>)
  renderRow3 = () => this.props.data.calendar.row3.map((day, id) => <Col className='day'><Day key={`${id}`} date={day} /></Col>)
  renderRow4 = () => this.props.data.calendar.row4.map((day, id) => <Col className='day'><Day key={`${id}`} date={day} /></Col>)
  renderRow5 = () => this.props.data.calendar.row5.map((day, id) => <Col className='day'><Day key={`${id}`} date={day} /></Col>)

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
        <Row className='day-row'>
          {this.renderRow1()}
        </Row>
        <Row className='day-row'>
          {this.renderRow2()}
        </Row>
        <Row className='day-row'>
          {this.renderRow3()}
        </Row>
        <Row className='day-row'>
          {this.renderRow4()}
        </Row>
        <Row className='day-row'>
          {this.renderRow5()}
        </Row>
      </div>
    );
  }
}
