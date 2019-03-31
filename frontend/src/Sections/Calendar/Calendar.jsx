
import React, { Component, Fragment } from 'react';
import './Calendar.css';

import BackToHomeNav from "../../Components/BackToHomeNav/BackToHomeNav";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {

        return (
            <Fragment>
                <BackToHomeNav />
                <section id="section-calendar" className="section">
                    <div className="container">
                        <div className="row" className="calendar">
                            <div className="col text-center">
                                <div className="section-header">
                                    <p className="header">Events this Week</p>
                                </div>
                                <div className="section-body">
                                    <iframe
                                        className="calendar"
                                        src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=plattsburgh.edu_dklnisut97n2gr0o08uc2d2ock%40group.calendar.google.com&amp;color=%23853104&amp;ctz=America%2FNew_York"
                                        style={{ borderWidth: 0, width: '100%', height: '80vh' }}
                                        frameBorder="0"
                                        scrolling="no"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Home;