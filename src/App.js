import React, { Component } from 'react';
import './sass/app.scss';

import { Waypoint } from 'react-waypoint';

// Utils
import { isMobileOrTablet } from './utils/device';

// Components
import NavBar from './components/nav-bar.component';
import Hero from './components/hero.component';
import SiteSection from './components/site-section.component';
import ExperienceCard from './components/experience-card.component';
import ProjectCard from './components/project-card.component';

// Data
import experience from './data/experience';
import projects from './data/projects';
import posed from 'react-pose';

const NAV_HEIGHT = 53;

const SlideInContainer = posed.div({
  out: { x: "-100%" },
  in: {
    x: "0%",
    delay: 500,
    delayChildren: 500,
    staggerChildren: 100,
  }
});

const SlideInItem = posed.div({
  out: { x: '-300%', opactity: 0 },
  in: {
    x: '0%',
    opacity: 1
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      populated: {
        experience: false,
        projects: false
      }
    };

    this.navRef = React.createRef();
    this.sectionRefs = {
      hero: React.createRef(),
      experience: React.createRef(),
      projects: React.createRef(),
    };
    
    this.isMobileOrTablet = isMobileOrTablet();
  }

  componentDidMount() {
    // Populate sections if the user loads the page scrolled to the bottom
    for (const section in this.state.populated) {
      if (this.state.populated.hasOwnProperty(section)) {
        const s = this.sectionRefs[section];
        if (window.scrollY >= s.current.offsetTop - NAV_HEIGHT) {
          this.populateSection(section);
        }
      }
    }
  }

  populateSection = (section) => {
    this.setState({
      populated: {
        ...this.state.populated,
        [section]: true
      }
    });
  }

  scrollTo = (section) => {
    let scrollTop;
    if (section === "hero") {
      scrollTop = 0;
    } else {
      scrollTop = this.sectionRefs[section].current.offsetTop - NAV_HEIGHT;
    }

    if (this.isMobileOrTablet) {
      window.scrollTo(0, scrollTop);
    } else {
      window.scrollTo({top: scrollTop, left: 0, behavior: "smooth"});
    }
  }

  renderExperience = () => {
    let cards = [];
    for (let i = 0; i < experience.length; i++) {
      const e = experience[i];
      cards.push(
        <SlideInItem
        key={i}
        pose={this.state.populated.experience ? 'in' : 'out'}
        >
          <ExperienceCard
            key={i}
            img={e.img}
            position={e.position}
            company={e.company}
            location={e.location}
            dates={e.dates}
            length={e.length}
          />
        </SlideInItem>
      );
    }

    return cards;
  }

  renderProjects = () => {
    let cards = [];
    for (let i = 0; i < projects.length; i++) {
      const p = projects[i];
      cards.push(
        <SlideInItem
          key={i}
          className="column is-one-third" 
          pose={this.state.populated.projects ? 'in' : 'out'}
        >
          <ProjectCard
            img={p.img}
            title={p.title}
            description={p.description}
          />
        </SlideInItem>
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

          <Waypoint 
            onEnter={() => this.populateSection('experience')}
          />

          <div style={{maxWidth: "1200px", margin: "auto"}}>
            <SiteSection title="experience" sectionRef={this.sectionRefs.experience}>
              <SlideInContainer pose={this.state.populated.experience ? 'in' : 'out'}>
                {this.renderExperience()}
              </SlideInContainer>
            </SiteSection>

            

            <SiteSection title="projects" sectionRef={this.sectionRefs.projects}>
              <Waypoint 
                onEnter={() => this.populateSection('projects')}
              >
              <SlideInContainer className="columns is-multiline" pose={this.state.populated.projects ? 'in' : 'out'}>
                {this.renderProjects()}
              </SlideInContainer>
              </Waypoint>
            </SiteSection>
          </div>
        </main>

      </div>
    );
  }
}

export default App;
