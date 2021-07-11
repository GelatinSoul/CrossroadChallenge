import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitleCard from './TitleCard';
import './TitleList.css';  

export class TitlesList extends Component {
    render() {
      const { titles } = this.props;
      let content = '';
  
      content =
      titles.length > 0
          ? titles.map((title, index) => (
              <TitleCard key={index} title={title}/>
            ))
          : 
          <div className="row text">
            Sorry, no movies found here!
          </div>
      return <div className="row formatting">{content}</div>;
    }
  }

const mapStateToProps = state => ({
    titles: state.titles.titles
})
export default connect(mapStateToProps)(TitlesList)