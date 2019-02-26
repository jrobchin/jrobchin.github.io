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
      subtitles: SUBTITLES
    };
  }

  render() { 
    return (
      <div className="hero">
        <section className="hero is-medium is-primary">
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
      </div>
    );
  }
}
 
export default Hero;