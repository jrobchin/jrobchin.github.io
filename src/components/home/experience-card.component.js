import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExperienceCard extends Component {

  static defaultProps = {
    description: []
  };
  

  render() {

    let { 
      img, 
      company, 
      position, 
      location, 
      dates, 
      length, 
      description 
    } = this.props;

    let descriptionBullets = []
    for (let i = 0; i < description.length; i++) {
      let d = description[i];

      let marginLeft = 0;
      if (d[0] === "-") {
        d = d.substring(1);
        marginLeft = 20;
      }

      descriptionBullets.push(
        <li key={i} style={{marginLeft}}>
          {d}
        </li>
      );
    }

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
              </p>
              <ul>
                {descriptionBullets}
              </ul>
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
  description: PropTypes.array
};

export default ExperienceCard;