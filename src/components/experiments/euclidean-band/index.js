import React, { Component } from "react";
import Pizzicato from "pizzicato";

const SOUNDS_URL = "/assets/experiments/play-audio/808_drum_kit";
const SOUND_URLS = {
  kick: "kicks/808-Kicks03.wav",
  snare: "snares/808-Snare03.wav",
  rim: "snares/808-Rim3.wav",
  clap: "snares/808-Clap03.wav",
  clave: "percussion/808-Clave3.wav",
  conga: "percussion/808-Conga3.wav",
  cowbell: "percussion/808-Cowbell3.wav",
  stick: "percussion/808-Stick2.wav",
  tom: "percussion/808-Tom3.wav",
  maracas: "percussion/808-Maracas3.wav",
  hihats: "hihats/808-HiHats02.wav",
  openhihats: "hihats/808-OpenHiHats02.wav",
  ride: "hihats/808-Ride2.wav",
};

class EuclideanBandExperiment extends Component {
  constructor(props) {
    super(props);

    this.sounds = {};
    for (const sound in SOUND_URLS) {
      if (SOUND_URLS.hasOwnProperty(sound)) {
        const fname = SOUND_URLS[sound];
        let url = `${SOUNDS_URL}/${fname}`;
        let audio = new Pizzicato.Sound({
          source: "file",
          options: { path: url },
        });
        this.sounds[sound] = audio;
      }
    }
  }

  play(sound) {
    let s = this.sounds[sound];
    s.stop();
    s.play();
  }

  render() {
    return (
      <div>
        <h1>Euclidean Band</h1>
        {Object.keys(this.sounds).map((sound) => (
          <button key={sound} onClick={() => this.play(sound)}>
            {sound}
          </button>
        ))}
      </div>
    );
  }
}

export default EuclideanBandExperiment;
