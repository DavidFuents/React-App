import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class EventForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date: "",
      time: "",
      description: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    let day = this.state.date.split('-')
    let data = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      description: this.state.description,
      day: day[2],
    };

    let dayData = {
      date: this.state.date,
      day: day[2],
    }
    
    this.props.addDay(dayData);
    this.props.addEvent(data);
    this.setState({
      name: '',
      date: '',
      time: '',
      description: '',
    })
  };

  render() {
    return (
      <div>
        <Link to="/events">Back to events</Link>
        <Form onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="e.g. Final Exam"
              defaultValue={this.state.name}
              onChange={(event) => this.handleChange(event)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="e.g. November 12, 2021"
              defaultValue={this.state.date}
              onChange={(event) => this.handleChange(event)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="time">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              placeholder="e.g. 12:00:00 PM"
              defaultValue={this.state.time}
              onChange={(event) => this.handleChange(event)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="e.g. Computer Science"
              defaultValue={this.state.description}
              onChange={(event) => this.handleChange(event)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
