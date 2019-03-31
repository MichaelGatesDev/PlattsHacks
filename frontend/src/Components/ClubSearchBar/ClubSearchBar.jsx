import React, { Component, Fragment } from 'react';
import './ClubSearchBar.css';

class ClubSearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
    }

    onChange(e) {
        let value = e.target.value;
        this.props.onChange(value);
    }

    render() {

        return (
            <div className="ClubSearchBar-Component">
                <input
                    type={"text"}
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}
                    value={this.props.value}
                    className={"form-control"}
                />
            </div>
        );
    }
}

export default ClubSearchBar;