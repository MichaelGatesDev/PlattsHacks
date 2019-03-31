import React, { Component } from 'react';
import './ClubCardsGrid.css';

import ClubCard from "../../Components/ClubCard/ClubCard";

class ClubCardsGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {

        const items = this.props.clubs.map((club, index) =>
            <li key={index}>
                <ClubCard
                    club={club}
                />
            </li>
        );

        return (
            <div className="ClubCardsGrid-Component">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default ClubCardsGrid;