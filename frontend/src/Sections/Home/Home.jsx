import React, { Component, Fragment } from "react";
import "./Home.css";

// import NavBar from "../../Components/NavBar/NavBar";

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {}

  render() {
    if (this.state.loading) {
      // return splashscreen
      // return <p>Loading...</p>
    }

    return (
      <Fragment>
        <section className="container" id="home-section" />
      </Fragment>
    );
  }
}

export default Room;
