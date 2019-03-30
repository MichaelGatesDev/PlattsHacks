import React from "react";

import "./infoPage.css";
import PhotoBox from "../../Components/PhotoBox/photoBox";

const InfoPage = () => {
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
          {/* <h2 className="leadershipTitle">Leadership:</h2> */}

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
            {/* <iframe
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ff0000&amp;src=ub2amd2rm2ibre7k5vtaiiout0%40group.calendar.google.com&amp;color=%23711616&amp;ctz=America%2FNew_York"
              style="border-width:0"
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
            /> */}
          </div>
          <div className="rightColumnButtons">
            <PhotoBox id="imageButton" />
            <PhotoBox id="calendarButton" />
            <PhotoBox id="forumButton" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
