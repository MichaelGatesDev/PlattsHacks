import React, { Component, Fragment } from 'react';
import "./InfoPage.css";


import ClubOfficers from "../../Components/ClubOfficers/ClubOfficers";
import BackToHomeNav from "../../Components/BackToHomeNav/BackToHomeNav";


import PhotoBox from "../../Components/PhotoBox/PhotoBox";
import ImageGallery from "../../Components/ImageGallery/ImageGallery";
import Calendar from "../../Components/Calendar/Calendar";
import Contact from "../../Components/ContactInfo/ContactInfo";

class InfoPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      galleryVisible: false,
      calendarVisible: false,
      infoVisible: true
    };

    this.onclickhandler = this.onclickhandler.bind(this);
  }

  componentDidMount() {
    this.fetchClub();
  }

  fetchClub() {
    fetch('/details/' + this.props.match.params.id)
      .then(response => response.json())
      .then(data => {
        this.setState({
          club: data[0],
          loading: false
        });
      }).catch((error) => {
        console.log("Failed to fetch club");
        console.log(error);
        this.setState({
          club: {
            id: 'abc123',
            name: "Baseball Club",
            type: "Sports"
          },
          loading: false
        });
      });
  }

  onclickhandler(e) {

    if (e.target.id === "imageButton") {
      this.setState({
        galleryVisible: true,
        calendarVisible: false,
        infoVisible: false
      });
    }

    else if (e.target.id === "calendarButton") {
      this.setState({
        galleryVisible: false,
        calendarVisible: true,
        infoVisible: false
      });
    }

    else if (e.target.id === "forumButton") {
      this.setState({
        galleryVisible: false,
        calendarVisible: false,
        infoVisible: true
      });
    }
  }


  getLogo() {
    return "images/" + this.getInternalIDFromName(this.state.club.name) + "/logo.jpg";
  }

  getOfficerImages() {
    let results = [];
    for (var i = 0; i < this.state.club.officers.length; i++) {
      var path = "images/" + this.getInternalIDFromName(this.state.club.name) + "/officers/officer" + (i + 1) + ".jpg";
      results.push(path);
    }
    return results;
  }

  getInternalIDFromName(name) {
    return name.replace(/\s/g, '_');
  }

  render() {

    if (this.state.loading) {
      return <p>Loading</p>;
    }

    return (
      <Fragment>
        <BackToHomeNav />
        <section id="section-info" className="container">
          <div className="row">


            <div className="col left-side">

              <div className="row">
                <div className="col-sm-3">
                  <img src={"/" + this.getLogo()} alt="" className={"club-logo"}/>
                </div>
                <div className="col">
                  <h2>{this.state.club.name}</h2>
                  <h3>{this.state.club.type}</h3>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <p className="description">{this.state.club.description}</p>
                </div>
              </div>

              <div className="row">
                <ClubOfficers
                  officers={this.state.club.officers}
                  images={this.getOfficerImages()}
                />
              </div>

            </div>



            <div className="col right-side">

              <div className="row">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <div>
                      <span><a href={this.state.club.contacts[0].url}>Website</a></span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <span><a href={this.state.club.contacts[0].url}>Email</a></span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="row">
                <ul className="nav-buttons">
                  <li>
                    <div className="circular-button" />
                    <div className="circular-button" />
                    <div className="circular-button" />
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </Fragment>

      // <section id="section-info" className="infoContainer">
      //   <div className="infoBox">
      //     <div className="leftColumn">
      //       <PhotoBox
      //         id="clubLogo"
      //         image={this.getLogo()}
      //       />
      //       <p className="clubTitle">{this.state.club.name}</p>
      //       <p className="clubBreifSummary">{this.state.club.type}</p>
      //       <p className="clubDescription">{this.state.club.description}</p>

      //       <div className="leadershipBoxes">
      //         <PhotoBox id="officer1" />
      //         <PhotoBox id="officer2" />
      //         <PhotoBox id="officer3" />
      //       </div>
      //     </div>

      //     <div className="rightColumn">
      //       <p className="timesTitle">Practice Times:</p>
      //       <p className="meetingTimes">Tues-Fri 8am-10:30am</p>
      //       <div className="calendarDiv">
      //         <ImageGallery visible={this.state.galleryVisible} images={[]} />
      //         <Contact visible={this.state.infoVisible} />
      //         <Calendar visible={this.state.calendarVisible} />
      //       </div>
      //       <div className="rightColumnButtons">
      //         <PhotoBox id="imageButton" onClick={this.onclickhandler} />
      //         <PhotoBox id="calendarButton" onClick={this.onclickhandler} />
      //         <PhotoBox id="forumButton" onClick={this.onclickhandler} />
      //       </div>
      //     </div>
      //   </div>
      // </section>
    );
  }
}

export default InfoPage;
