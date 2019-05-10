import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import '../css/myAccount.css';
import MyAccountTab from './MyAccountTab';
import MyEventsTab from './MyEventsTab';

class MyAccount extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
		  <Row className="accountRow">
		    <Col sm={3} className="accountPills">
		      <Nav variant="pills" className="flex-column">
		        <Nav.Item className="accountNav">
		          <Nav.Link className="accountTab" eventKey="first">My Account</Nav.Link>
		        </Nav.Item>
		        <Nav.Item className="accountNav">
		          <Nav.Link className="accountTab" eventKey="second">My Events</Nav.Link>
		        </Nav.Item>
		      </Nav>
		    </Col>
		    <Col sm={6} className="accountContent">
		      <Tab.Content>
		        <Tab.Pane eventKey="first">
		        	<MyAccountTab />
		        </Tab.Pane>
		        <Tab.Pane eventKey="second">
		          <MyEventsTab />
		        </Tab.Pane>
		      </Tab.Content>
		    </Col>
		    <Col sm={3}>
		    </Col>
		  </Row>
		</Tab.Container>
      </div>
    );
  }
}
 
export default MyAccount;