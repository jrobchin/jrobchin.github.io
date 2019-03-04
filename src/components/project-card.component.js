import React, { Component } from 'react';

class ProjectCard extends Component {
  render() {

    let { img, title, description, site, repo, devpost } = this.props;

    let links = [];

    if (site)
      links.push(<li><a href={site}>website</a></li>);
    if (repo)
      links.push(<li><a href={repo}>code</a></li>);
    if (devpost)
      links.push(<li><a href={devpost}>devpost</a></li>);

    return (
      <div className="project-card card">
        <div className="card-content">
          <h1 className="title">{title}</h1>
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <ul>
            {links}
          </ul>
          <div className="content">
            {description}
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProjectCard;