import React, { Component, Fragment } from 'react';
import './ClubsDisplayBox.css';

import ClubSearchBar from "../../Components/ClubSearchBar/ClubSearchBar";
import ClubCardsGrid from "../../Components/ClubCardsGrid/ClubCardsGrid";

var _ = require('underscore');

class ClubsDisplayBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchValue: '',
            clubs: [],
        };

        this.onSearchUpdate = this.onSearchUpdate.bind(this);
    }

    componentDidMount() {

        this.fetchClubs();

        var exampleA = {
            id: 'a',
            name: "Baseball Club",
            type: "Sports"
        };
        var exampleB = {
            id: 'b',
            name: "V-Nation",
            type: "Cultural"
        };
        var exampleC = {
            id: 'c',
            name: "Software Engineering Club",
            type: "Department"
        };
        let examples = [
            exampleA, exampleB, exampleC,
            exampleA, exampleB, exampleC,
            exampleA, exampleB, exampleC,
        ];

        // this.setState({ clubs: examples });
    }

    fetchClubs() {
        fetch('/api')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    clubs: [...this.state.clubs, ...data],
                }, function () {
                    console.log(data);
                });
            }).catch((error) => {
                console.log("Failed to fetch clubs");
                console.log(error);
            });
    }

    onSearchUpdate(newValue) {
        this.setState({
            searchValue: newValue
        });
    }

    render() {

        var query = this.state.searchValue;
        var queries = query.split(" ");

        var filteredClubs = _(this.state.clubs).chain().sortBy(function (club) {
            return club.type;
        }, this).sortBy(function (club) {
            return club.name;
        }, this).value();

        for (const q of queries) {
            filteredClubs = filteredClubs.filter(function (club) {
                return (club.name.toLowerCase().includes(q) || club.type.toLowerCase().includes(q));
            }, this);
        }

        console.log(filteredClubs);

        return (
            <div className="ClubsDisplayBox-Component">
                <div className="row">
                    <div className="col">
                        <ClubSearchBar
                            onChange={this.onSearchUpdate}
                            placeholder={"Search for a club/organization here"}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ClubCardsGrid
                            clubs={filteredClubs}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ClubsDisplayBox;