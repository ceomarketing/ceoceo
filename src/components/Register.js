import React, { Component } from "react";
import '../css/register.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import { Formik } from 'formik';

class Register extends Component {
  render() {
    return (
      <div className="registerContainer">
        <div className="register">
          <div className="registerInner">
            <h2 className="registerTitle">Register</h2>
            <p className="registerNote">Please fill in all the required blanks with *</p>
            <Form>
              <Form.Group>
                <Form.Label>First Name *</Form.Label>
                <Form.Control required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name *</Form.Label>
                <Form.Control required />
              </Form.Group>
              <Form.Group>
                <Form.Label>中文名 (Chinese Name, if applicable)</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password *</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Permanent Email Address *</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Wechat ID</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Are you a Stanford affiliated?
                </Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Students"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="Alumni"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="Faculty/Staffs"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="Others:"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="Not affiliated"
                    name="formHorizontalRadios"
                  />
                </Col>
              </Form.Group>

              <Form.Group>
                <Form.Label>Stanford Email Address (If applicable)</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                  />
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@stanford.edu</InputGroup.Text>
                  </InputGroup.Prepend>
                </InputGroup>
              </Form.Group>

              <Form.Group>
                <Form.Label>What is your (expected) year of graduation </Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group>
                <Form.Label>Please provide your LinkedIn profile link:</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Which of the following describes you the best? *
                </Form.Label>
                <Col>
                  <Form.Check
                    type="radio"
                    label="I'm running a startup"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="I'm planning to start a startup"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="I'm in a startup"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="I'm planning to join a startup"
                    name="formHorizontalRadios"
                  />
                  <Form.Check
                    type="radio"
                    label="I'm not planning to start or join a startup in the near future"
                    name="formHorizontalRadios"
                  />
                </Col>
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Which industry are you in or will you join? *
                </Form.Label>
                <Col>
                  <Form.Check label="Health" />
                  <Form.Check label="Financial Services" />
                  <Form.Check label="Consumer Products and Services" />
                  <Form.Check label="Logistics and Transportations" />
                  <Form.Check label="Business Products and Services" />
                  <Form.Check label="Construction" />
                  <Form.Check label="Real Estate" />
                  <Form.Check label="Retail" />
                  <Form.Check label="Security" />
                  <Form.Check label="Hospitality" />
                  <Form.Check label="Energy" />
                  <Form.Check label="Media" />
                  <Form.Check label="Other" />
                  <Form.Control
                    type="text"
                    size="sm"
                    aria-describedby="inputGroupPrepend"
                  />
                </Col>
              </Form.Group>

              <Form.Group>
                <Form.Label>Which best describes your background? *</Form.Label>
                <Form.Control as="select">
                  <option>Entrepreneur</option>
                  <option>Researcher</option>
                  <option>Software Engineer</option>
                  <option>Product Manager</option>
                  <option>Designer</option>
                  <option>Consultant</option>
                  <option>Marketing</option>
                  <option>Data Scientist</option>
                  <option>Engineer</option>
                  <option>Other</option>
                </Form.Control>
                <Form.Label>Please specify if selected "Other" above:</Form.Label>
                <Form.Control size="sm" />
              </Form.Group>

              <Form.Group>
                <Form.Label>What company are you working for?</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group>
                <Form.Label>Would you like to stay connected with us through CEO Wechat Group? * (If yes, please scan the QR Code below to add CEO全能小助手 as your contact.)</Form.Label>
                <Form.Check type="radio" label="Yes!" />
                <img width="200" src="images/CEO小助手.jpeg" alt="CEO小助手啦啦啦" />
                <Form.Check type="radio" label="Not Now" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Please tell us anything else you would like us to know</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Follow CEO's Wechat account NOW!</Form.Label>
                <div />
                <img width="200" height="200" src="images/ceo-qr-code.png" alt="在微信搜索CEO公众号😝" />
              </Form.Group>

              <Form.Group className="submitButton">
                <Button type="submit">
                  Create Account
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

