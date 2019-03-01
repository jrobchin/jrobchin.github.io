import React, { Component } from 'react';
import './sass/app.scss';

import { Waypoint } from 'react-waypoint';

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
    window.scrollTo(0, 0);
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100);
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
      scrollTop = this.sectionRefs[section].current.offsetTop - 53;
    }
    window.scrollTo({top: scrollTop, left: 0, behavior: "smooth"});
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

            <Waypoint 
              onEnter={() => this.populateSection('projects')}
              />

            <SiteSection title="projects" sectionRef={this.sectionRefs.projects}>
              <SlideInContainer className="columns is-multiline" pose={this.state.populated.projects ? 'in' : 'out'}>
                {this.renderProjects()}
              </SlideInContainer>
            </SiteSection>
          </div>
        </main>

      </div>
    );
  }
}

export default App;
