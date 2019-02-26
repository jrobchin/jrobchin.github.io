import React, { Component } from 'react';
import './sass/app.scss';

// Components
import NavBar from './components/nav-bar.component';
import Hero from './components/hero.component';
import SiteSection from './components/site-section.component';
import ExperienceCard from './components/experience-card.component';

// Data
import experience from './data/experience';

class App extends Component {
  constructor(props) {
    super(props);
    this.sectionRefs = {
      hero: React.createRef(),
      experience: React.createRef(),
      projects: React.createRef(),
    };
  }

  renderExperience = () => {
    let cards = [];
    
    for (let i = 0; i < experience.length; i++) {
      const e = experience[i];
      cards.push(
        <ExperienceCard
          img={e.img}
          position={e.position}
          company={e.company}
          location={e.location}
          dates={e.dates}
          length={e.length}
        />
      );
    }

    return cards;
  }

  render() {
    return (
      <div id="site-container">
      
        <NavBar />

        <Hero />

        <SiteSection title="experience">
          {this.renderExperience()}
        </SiteSection>

        <SiteSection title="projects">
          site section
        </SiteSection>

      </div>
    );
  }
}

export default App;
