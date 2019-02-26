import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExperienceCard extends Component {
  render() {

    let { img, company, position, location, dates, length } = this.props;

    return (
      <div className="card experience-card">
        <article className="media">
          <figure className="media-left">
            <p className="image">
              <img src={img} />
            </p>
          </figure>
          <div className="media-content">
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
          <div className="media-right">
            <button className="button is-white">
              <i className="fas fa-angle-down"></i>
            </button>
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