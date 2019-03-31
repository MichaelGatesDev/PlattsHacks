import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

import './Home.css';

import AdCard from "../../Components/AdCard/AdCard";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
    }

    // fetchData(){
    //     fetch('/api/v1/clubs')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 clubs: [...this.state.clubs, ...data],
    //             }, function () {
    //                 this.fetchAllImages();
    //             });
    //         }).catch((error) => {
    //             console.log("Failed to fetch clubs");
    //             console.log(error);
    //         });
    // }

    render() {

        // if (this.state.loading) {
        //     // return splashscreen
        //     return <p>Loading...</p>
        // }

        return (
            <section id="section-landing">
                <div className="tinted">
                    <div className="container">
                        <div className="text-center">
                            <h2>Club Hub</h2>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <AdCard
                                        title={"Search for a Club"}
                                        description="Looking for a specific club but don't know how to find it? Allow our neat search tool to assist you."
                                        href={"/search"}
                                        buttonText={"Search"}
                                    />
                                </div>
                                <div className="col">
                                    <AdCard
                                        title={"Upcoming Events"}
                                        description="Curious what's poppin' this week in the burgh? Check out events calendar for times and dates of events this week!"
                                        href={"/calendar"}
                                        buttonText={"Calendar"}
                                    />
                                </div>
                                <div className="col">
                                    <AdCard
                                        title={"Placeholder"}
                                        description="Functionality TBD"
                                        href={"/"}
                                        buttonText={"TBD"}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;