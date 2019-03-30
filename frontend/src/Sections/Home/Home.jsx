
import React, { Component, Fragment } from 'react';
import './Home.css';

import SearchBar from "../../Components/SearchBar/SearchBar";
import ClubCardsGrid from "../../Components/ClubCardsGrid/ClubCardsGrid";

var _ = require('underscore');

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            searchValue: '',
            clubs: [],
        };

        this.onSearchUpdate = this.onSearchUpdate.bind(this);
    }

    componentDidMount() {
        var exampleA = {
            id: 'a',
            title: "Baseball Club",
            type: "Sports"
        };
        var exampleB = {
            id: 'b',
            title: "V-Nation",
            type: "Cultural"
        };
        var exampleC = {
            id: 'c',
            title: "Software Engineering Club",
            type: "Department"
        };
        let examples = [
            exampleA, exampleB, exampleC
        ];

        this.setState({ clubs: examples });
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

    onSearchUpdate(newValue) {
        this.setState({
            searchValue: newValue
        });
    }


    render() {

        // if (this.state.loading) {
        //     // return splashscreen
        //     return <p>Loading...</p>
        // }

        var query = this.state.searchValue;
        var queries = query.split(" ");

        var filteredClubs = _(this.state.clubs).chain().sortBy(function (club) {
            return club.type;
        }, this).sortBy(function (club) {
            return club.title;
        }, this).value();

        for (const q of queries) {
            filteredClubs = filteredClubs.filter(function (club) {
                return (club.title.toLowerCase().includes(q) || club.type.toLowerCase().includes(q));
            }, this);
        }

        return (
            <section id="home-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center">
                            <h2>Clubs &amp; Organizations</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 mx-auto">
                            <SearchBar
                                onChange={this.onSearchUpdate}
                            />
                        </div>
                    </div>

                    <ClubCardsGrid
                        clubs={filteredClubs}
                    />

                </div>
            </section>
        );
    }
}

export default Home;