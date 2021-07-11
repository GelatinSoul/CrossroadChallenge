import React, { Component } from 'react';
import SearchBar from './SearchBar';
import TitlesList from './TitlesList';
import './Landing.css';

export class Landing extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar/>
                <TitlesList/>
            </div>
        )
    }
}

export default Landing