import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchTitleByID } from '../../actions/searchActions'
import './TitleDetails.css'

export class TitleDetails extends Component {
    componentDidMount() {
        this.props.searchTitleByID(this.props.match.params.id);
      }
    render() {
        const { title } = this.props;
        return (
                <div className = "card-wrapper center">
                    <div className="card" styles="width: 18rem;">
                        <div className="card-body">
                            <h5 className="card-title">{title.titleName}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{title.releaseYear} | {title.genre}</h6>
                            <p class="card-text">{title.description}</p>
                        </div>
                    </div>
                </div>
        )
    }
}



const mapStateToProps = state => ({
    title: state.titles.title
  });
  
  export default connect(
    mapStateToProps,
    { searchTitleByID }
  )(TitleDetails);