import React, { Component } from 'react';

class SiteSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() { 
    let { title } = this.props;
    return (
      <div className="site-section" ref={this.props.sectionRef}>
        <section className="section">
          <div className="header">
            <h1 className="title is-2">{title}</h1>
          </div>
          <div className="content">
            {this.props.children}
          </div>
        </section>
      </div>
    );
  }
}
 
export default SiteSection;