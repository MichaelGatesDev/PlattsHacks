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

    render() {

        var coverImage = "images/300x200.png";
        if (this.props.images) {
            if (this.props.images.mainImages && this.props.images.mainImages.length > 0) {
                coverImage = this.props.images.mainImages[0];
            }
        }

        return (
            <div className="ClubCard-Component">
                <Link to={"clubs/" + this.props.club.id}>
                    <div className="card">
                        <img className="card-img-top" src={coverImage} alt={this.props.club.title} />
                        <div className="card-body">
                            <p className="card-title">{this.props.club.title}</p>
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