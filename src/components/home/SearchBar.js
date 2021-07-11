import React, { Component } from 'react';
import { searchTitle, getTitles } from '../../actions/searchActions';
import { connect } from 'react-redux';
import './SearchBar.css';

export class SearchBar extends Component {
    onChange = e => {
        this.props.searchTitle(e.target.value);
    };

    submitForm = e => {
        e.preventDefault();
        this.props.getTitles(this.props.text);
    }

    render() {
        return (
            <div className="searchbar">
                <div className="form-group">
                    <form id="searchForm" onSubmit={this.submitForm}>
                    <input type="text" className="form-control" placeholder="Search and Enter!"
                    onChange={this.onChange}
                    />
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.titles.text
});

export default connect(
    mapStateToProps,
    { searchTitle, getTitles }
  )(SearchBar);