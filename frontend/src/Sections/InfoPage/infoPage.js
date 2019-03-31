import React from "react";

import "./infoPage.css";
import PhotoBox from "../../Components/PhotoBox/photoBox";
import Gallery from "../../Components/ImageGallery/imageGallery";
import Calendar from "../../Components/Calendar/calendar";
import Contact from "../../Components/ContactInfo/contactInfo";

class InfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryVisible: "false",
      calendarVisible: "false",
      infoVisible: "true"
    };
    this.onclickhandler = this.onclickhandler.bind(this);
  }

  onclickhandler(e) {
    console.log("clicked");
    if (e.target.id === "imageButton") {
      this.setState({
        galleryVisible: "true",
        calendarVisible: "false",
        infoVisible: "false"
      });
    }
    if (e.target.id === "calendarButton") {
      this.setState({
        galleryVisible: "false",
        calendarVisible: "true",
        infoVisible: "false"
      });
    }
    if (e.target.id === "forumButton") {
      this.setState({
        galleryVisible: "false",
        calendarVisible: "false",
        infoVisible: "true"
      });
    }
  }

  render() {
    const { username } = this.state;

    return (
      <div className="infoContainer">
        <div className="infoBox">
          <div className="leftColumn">
            <PhotoBox id="clubLogo" />
            <p className="clubTitle">SUNY Plattsburgh Rugby</p>
            <p className="clubBreifSummary">Collegiate Sports Team</p>

            <p className="clubDescription">
              We are the SUNY Plattsburgh Rugby Team. Our season is in the fall
              every year. We are always looking to have new members join the
              family and make the team better.
            </p>

            <div className="leadershipBoxes">
              <PhotoBox id="officer1" />
              <PhotoBox id="officer2" />
              <PhotoBox id="officer3" />
            </div>
          </div>

          <div className="rightColumn">
            <p className="timesTitle">Practice Times:</p>
            <p className="meetingTimes">Tues-Fri 8am-10:30am</p>
            <div className="calendarDiv">
              <Gallery visible={this.state.galleryVisible} />
              <Contact visible={this.state.infoVisible} />
              <Calendar visible={this.state.calendarVisible} />
            </div>
            <div className="rightColumnButtons">
              <PhotoBox id="imageButton" onClick={this.onclickhandler} />
              <PhotoBox id="calendarButton" onClick={this.onclickhandler} />
              <PhotoBox id="forumButton" onClick={this.onclickhandler} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoPage;
