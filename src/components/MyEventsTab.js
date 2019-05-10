import React, { Component } from "react";

class MyEventsTab extends Component {
  render() {
    return (
    	<div className="myEventsTab">
          <h2 className="myEventsTitle">My Events</h2>
          <div className="upcomingEvents">
          	<h2>Upcoming Events</h2>
          </div>
          <div className="pastEvents">
          	<h2>Past Events</h2>
          </div>
        </div>
    );
  }
}
 
export default MyEventsTab;