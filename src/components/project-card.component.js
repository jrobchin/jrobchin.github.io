import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {

    let { img, title, description } = this.props;

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title">{title}</h1>
          <div className="content">
            {description}
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProjectCard;