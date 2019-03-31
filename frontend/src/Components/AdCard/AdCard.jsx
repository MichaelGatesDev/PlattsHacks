import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './AdCard.css';

class AdCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="AdCard-Component">
                <div class="card">
                    <div class="card-body">
                        <h3>{this.props.title}</h3>
                        <p class="card-text">{this.props.description}</p>
                        <a class="btn btn-primary" href={this.props.href} role="button">{this.props.buttonText}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdCard;