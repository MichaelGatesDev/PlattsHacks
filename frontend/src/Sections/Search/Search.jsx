import React, { Component, Fragment } from 'react';
import './Search.css';

import BackToHomeNav from "../../Components/BackToHomeNav/BackToHomeNav";
import ClubsDisplayBox from "../../Components/ClubsDisplayBox/ClubsDisplayBox";

class Search extends Component {

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
            <Fragment>
                <BackToHomeNav />
                <section id="section-club-search" className="section">
                    <div className="container">

                        <div className="row" className="club-search">
                            <div className="col text-center">
                                <p className="header">Clubs &amp; Organizations</p>
                                <ClubsDisplayBox />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Search;