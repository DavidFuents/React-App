import { connect } from "react-redux";
import { Container, Row, Col, Stack } from "react-bootstrap";
import MonthContainer from "./containers/MonthContainer";
import NotificationsContainer from "./containers/NotificationsContainer";
import MonthNav from "./components/MonthNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Container fluid>
        <Row>
          <Col className="left-container" xxl={10}>
            <Stack gap={3}>
              <MonthNav />
              <MonthContainer />
            </Stack>
          </Col>
          <Col className="right-container" xxl={2}>
            <NotificationsContainer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
