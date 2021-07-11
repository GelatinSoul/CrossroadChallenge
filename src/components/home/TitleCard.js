import React, { Component, useState } from 'react';
import './TitleCard.css';
import TitleModal from './TitleModal';
import { getTitlesByID } from '../../actions/searchActions';
import { Link } from 'react-router-dom';

export class TitleCard extends Component {
    render() {
        const { title } = this.props;

        return(
            <div className = "card-wrapper">
                <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">{title.titleName}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{title.releaseYear}</h6>
                        <Link to={'/title/' + title.titleId} className="card-link">
                            More Info~
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default TitleCard