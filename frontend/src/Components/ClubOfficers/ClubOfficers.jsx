import React, { Component } from 'react';
import './ClubOfficers.css';

import ClubOfficer from "../ClubOfficer/ClubOfficer";

class ClubOfficers extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {

        const items = this.props.officers.map((officer, index) =>
            <ClubOfficer
                key={index}
                officer={officer}
                image={this.props.images[index]}
            />
        );

        return (
            <div className="ClubOfficers-Component">
                <h4>Officers</h4>
                <div className="row">
                    {items}
                </div>
            </div>
        );
    }
}

export default ClubOfficers;