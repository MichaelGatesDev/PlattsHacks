
import React, { Component } from 'react';
import './SearchResult.css';

class SearchResult extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }


    render() {

        return (
            <div className="SearchResult-Component row" >
                <div className="col image-col">
                    <img src="images/300x200.png" alt="" />
                </div>
                <div className="col details-col">
                    <h3>{this.props.result.title}</h3>
                    <h4>{this.props.result.type}</h4>
                </div>
            </div >
        );
    }
}

export default SearchResult;