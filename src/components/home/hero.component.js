import React, { Component } from 'react';
import FadeTextChanger from './fade-text-changer.component';

const SUBTITLES = [
  'software engineer',
  'ai developer',
  'educator',
  'creator',
];

const MAX_CIRCLES = 100;
const CIRCLE_SPEED_RANGE = [0.25, 4];
const CIRCLE_SPAWN_RATE = 0.1;

function circle(x, y, r, vx, vy=0) {
  return { x, y, r, vx, vy };
}

function distance(c1, c2) {
  // c = sqrt(a^2 + b^2)
  let a = c1.x - c2.x;
  let b = c1.y - c2.y;
  return Math.sqrt(a*a + b*b);
}

function forceGravity(c1, c2) {
  let m1m2 = c1.r * c2.r;
  let r = distance(c1, c2);
  return m1m2 / Math.pow(r, 2);
}

function unitVector(v) {
  let mag = Math.sqrt(v.x*v.x + v.y*v.y);
  return {
    x: v.x / mag,
    y: v.y / mag
  };
}

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitles: SUBTITLES,
    };
    this.heroRef = React.createRef();
    this.canvasRef = React.createRef();

    this.circles = [];

    this.interval = null;
  }

  componentDidMount() {
    // Start updating once component mounts
    this.interval = setInterval(this.renderCanvas, 16)
  }

  componentWillUnmount() {
    // Stop updating once component unmounts
    if (this.interval !== null) clearInterval(this.interval)
  }

  updateCanvas = () => {
    if (Math.random() > 1 - CIRCLE_SPAWN_RATE) {
      let sizeMax = 7;
      let newCircle = circle(
        window.innerWidth, 
        Math.random()*this.heroRef.current.offsetHeight, 
        sizeMax*Math.pow(Math.E, -sizeMax*Math.random()) + 2,
        -Math.random()*(CIRCLE_SPEED_RANGE[1] - CIRCLE_SPEED_RANGE[0]) + CIRCLE_SPEED_RANGE[0]
      );
  
      if (this.circles.length >= MAX_CIRCLES) {
        this.circles.shift();
      } 
      
      this.circles.push(newCircle);
    }

    // Update circle positions
    let nextCircles = [];
    for (let i = 0; i < this.circles.length; i++) {
      const c1 = this.circles[i];

      // Gravity
      for (let j = i + 1; j < this.circles.length; j++) {
        const c2 = this.circles[j];

        let fg = forceGravity(c1, c2);

        let uV = unitVector({ x: c2.x-c1.x, y: c2.y - c1.y });

        c1.vx += uV.x*fg;
        c1.vy += uV.y*fg;

        c2.vx -= uV.x*fg;
        c2.vy -= uV.y*fg;

        this.circles[j] = c2;
      }

      c1.x += c1.vx;
      c1.y += c1.vy;
      if (c1.x > 0 && c1.y > 0) nextCircles.push(c1);
    }
    this.circles = nextCircles;
  }

  drawCanvas = () => {
    let canvas = this.canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let ctx = canvas.getContext('2d');

    // Draw circles
    ctx.strokeStyle = 'rgba(0, 0, 0, 0)';
    this.circles.forEach(c => {
      ctx.fillStyle = `rgba(255, 255, 255, 0.6)`;
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, 2*Math.PI);
      ctx.stroke();
      ctx.fill();
    });
  }

  renderCanvas = () => {
    this.updateCanvas();
    this.drawCanvas();
  }

  render() { 
    return (
      <section className="hero is-medium is-primary" ref={this.heroRef}>
        <canvas 
          className="hero-canvas"
          style={{
            position: "absolute",
          }}
          ref={this.canvasRef}
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