import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './ClubCard.css';

class ClubCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }


    getLogo() {
        return "images/" + this.getInternalIDFromName(this.props.club.name) + "/logo.jpg";
    }

    getInternalIDFromName(name) {
        return name.replace(/\s/g, '_');
    }

    render() {

        var coverImage = "images/" + this.getInternalIDFromName(this.props.club.name) + "/logo.jpg";

        return (
            <div className="ClubCard-Component">
                <Link to={"clubs/" + this.props.club._id}>
                    <div className="card">
                        <img className="card-img-top" src={coverImage} alt={this.props.club.name} />
                        <div className="card-body">
                            <p className="card-title">{this.props.club.name}</p>
                            <p className="card-subtitle">{this.props.club.type}</p>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default ClubCard;