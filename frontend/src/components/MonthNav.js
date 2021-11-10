import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./styles/MonthNav.css";

export default class MonthNav extends Component {
  render() {
    const { currentMonth, currentYear} = this.props.data;
    return (
      <div>
        <Row>
          <Col className='left'>
            <button type='button' className="nav-btn"> {"< "}</button>
          </Col>
          <Col>
            <h1 className="month">{currentMonth} {currentYear}</h1>
          </Col>
          <Col>
            <button type='button' className="nav-btn"> {" >"}</button>
          </Col>
        </Row>
      </div>
    );
  }
}
