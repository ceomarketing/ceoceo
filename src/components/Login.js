import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/Login.css';

class Login extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="login">
        <Nav.Link className="login" onClick={this.handleShow}>
          LOGIN
        </Nav.Link>

        <Modal 
          className="login-modal"
          show={this.state.show} 
          onHide={this.handleClose}
          centered>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Email
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="email" placeholder="Email Address" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
            </Form>
            <p>
            Don't have an account yet?&nbsp;
            <a 
              className="modal-register" 
              href="#/register"
              onClick={this.handleClose}>
              Register
            </a>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
 
export default Login;