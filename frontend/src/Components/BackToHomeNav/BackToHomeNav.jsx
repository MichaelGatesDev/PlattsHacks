import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './BackToHomeNav.css';

class BackToHomeNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {

        return (
            <div className="BackToHomeNav-Component">
                <a className="nav-link active" href="/">
                    <div className="text-center">
                        <span><i className="fas fa-long-arrow-alt-left"></i> Go Back</span>
                    </div>
                </a>
            </div>
        );
    }
}

export default BackToHomeNav;