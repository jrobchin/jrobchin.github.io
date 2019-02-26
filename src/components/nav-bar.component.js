import React, { Component } from 'react';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mobileDropdown: false,
    };
  }
  
  toggleDropdown = () => {
    this.setState({
      mobileDropdown: !this.state.mobileDropdown
    });
  }

  handleScrollTo = (section) => {
    this.toggleDropdown();
    this.props.scrollTo(section);
  }

  render() {
    return (
      <nav className="navbar" role="navigation" ref={this.props.domRef}>
        <div className="navbar-brand">
          <div id="navbar-item-name" className="navbar-item">
            <button className="is-link" onClick={() => this.handleScrollTo('hero')}>
              jason chin
            </button>
          </div>

          <button onClick={this.toggleDropdown} className={`navbar-burger burger is-link ${this.state.mobileDropdown ? 'is-active' : ''}`} data-target="nav-bar">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div id="nav-bar" className={`navbar-menu ${this.state.mobileDropdown ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <div className="navbar-item">
              <button className="is-link section-link" onClick={() => this.handleScrollTo('experience')}>
                experience
              </button>
            </div>

            <div className="navbar-item">
              <button className="is-link section-link" onClick={() => this.handleScrollTo('projects')}>
                projects
              </button>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <a className="github-link" href="https://github.com/jrobchin">
                github
              </a>
            </div>

            <div className="navbar-item">
              <a className="linkedin-link" href="https://linkedin.com/in/jrobchin">
                linkedin
              </a>
            </div>

            <div className="navbar-item">
              <a className="devpost-link" href="https://devpost.com/JasonChin">
                devpost
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
 
export default NavBar;