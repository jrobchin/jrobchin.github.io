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
        <section class="hero is-medium is-primary">
          <div class="hero-body">
            <div class="container">
              <p class="title">
                jason chin
              </p>
              <p class="subtitle">
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