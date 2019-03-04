import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExperienceCard extends Component {
  render() {

    let { img, company, position, location, dates, length } = this.props;

    return (
      <div className="card experience-card">
        <article className="media">
          <div className="media-content">
            <p className="image">
              <img src={img} alt=""/>
            </p>
            <div className="content">
              <h1 className="title">{position}</h1>
              <p>
                {company} - {location}
                <br/>
                <small>{dates} <i className="fas fa-caret-right"></i> {length}</small>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

ExperienceCard.propTypes = {
  img: PropTypes.string,
  company: PropTypes.string,
  position: PropTypes.string,
  location: PropTypes.string,
  dates: PropTypes.string,
  length: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ])
}
 
export default ExperienceCard;