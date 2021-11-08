import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./styles/MonthNav.css";

export default class MonthNav extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className='left'>
            <button type='button' className="nav-btn"> {"< "}</button>
          </Col>
          <Col>
            <h1 className="month">November 2021</h1>
          </Col>
          <Col>
            <button type='button' className="nav-btn"> {" >"}</button>
          </Col>
        </Row>
      </div>
    );
  }
}
