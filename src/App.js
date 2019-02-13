import React, { Component } from 'react';
import './sass/app.scss';

// Components
import NavBar from './components/nav-bar.component';
import Hero from './components/hero.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.sectionRefs = {
      hero: React.createRef(),
      experience: React.createRef(),
      projects: React.createRef(),
    };
  }

  render() {
    return (
      <div id="site-container">
        <NavBar />

        <Hero />
      </div>
    );
  }
}

export default App;
