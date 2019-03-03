import React, { Component } from 'react';
import FadeTextChanger from './fade-text-changer.component';

const SUBTITLES = [
  'software engineer',
  'ai developer',
  'educator',
  'creator',
];

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitles: SUBTITLES,
    };
  }

  setHeroHeight = (e) => {
    if (e) {
      console.log(e.getBoundingClientRect());
      setTimeout(() => {
        console.log(e.getBoundingClientRect());
      }, 1000);
    }
  }

  render() { 
    return (
      <section className="hero is-medium is-primary" ref={this.setHeroHeight}>
        <canvas 
          className="hero-canvas"
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
        </canvas>
        <div className="hero-body">
          <div className="container">
            <p className="title is-1">
              jason chin
            </p>
            <p className="subtitle">
              <FadeTextChanger 
                textList={this.state.subtitles}
              />
            </p>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Hero;