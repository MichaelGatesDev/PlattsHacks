import React, { Component, Fragment } from 'react';
import './SearchResults.css';

import SearchResult from '../../Components/SearchResult/SearchResult';

class SearchResults extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
    }


    render() {

        var results = this.props.results.map(function (value, index) {
            return (
                <SearchResult
                    key={index}
                    result={value}
                />
            )
        });

        return (
            <div className="SearchResults-Component">
                {results && results.length > 0 ?
                    results
                    :
                    <p>No results found!</p>
                }
            </div>
        );
    }
}

export default SearchResults;