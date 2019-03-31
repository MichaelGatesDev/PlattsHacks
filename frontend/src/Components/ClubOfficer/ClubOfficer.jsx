import React, { Component } from 'react';
import './ClubOfficer.css';

class ClubOfficer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        console.log("image: " + this.props.image);
    }

    render() {

        return (
            <div className="ClubOfficer-Component">
                <img
                    src={"/" + this.props.image}
                    alt={"Image of " + this.props.officer.name}
                />
                <p className="title">{this.props.officer.name}</p>
                <p>{this.props.officer.role}</p>
            </div>
        );
    }
}

export default ClubOfficer;