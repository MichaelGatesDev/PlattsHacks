import React, { Component, Fragment } from 'react';
import './StickyFooterNav.css';

class StickyFooterNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }

    onChange(e) {
        let value = e.target.value;
        this.props.onChange(value);
    }

    render() {

        return (
            <div className="StickyFooterNav-Component">
                <nav class="nav  nav-pills nav-fill justify-content-center">
                    <a class="nav-link" href="#section-club-search">Club Search</a>
                    <a class="nav-link" href="#section-calendar">Events this Week</a>
                </nav>
            </div>
        );
    }
}

export default StickyFooterNav;