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
    this.navRef = React.createRef();
    this.sectionRefs = {
      hero: React.createRef(),
      experience: React.createRef(),
      projects: React.createRef(),
    };
  }

  scrollTo = (section) => {
    let scrollTop;
    if (section === "hero") {
      scrollTop = 0;
    } else {
      scrollTop = this.sectionRefs[section].current.offsetTop - 53;
    }
    window.scrollTo({top: scrollTop, left: 0, behavior: "smooth"});
  }

  renderExperience = () => {
    let cards = [];
    
    for (let i = 0; i < experience.length; i++) {
      const e = experience[i];
      cards.push(
        <ExperienceCard
          key={i}
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
      
        <NavBar domRef={this.navRef} scrollTo={this.scrollTo}/>

        <main style={{marginTop: 52}}>

          <Hero />

          <SiteSection title="experience" sectionRef={this.sectionRefs.experience}>
            {this.renderExperience()}
          </SiteSection>

          <SiteSection title="projects" sectionRef={this.sectionRefs.projects}>
            site section
            {this.renderExperience()}
          </SiteSection>
          
        </main>

      </div>
    );
  }
}

export default App;
