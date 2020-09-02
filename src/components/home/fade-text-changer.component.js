import React, { Component } from 'react';
import posed from 'react-pose';

class FadeTextChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIndex: 0,
      isVisible: true 
    };
    this.fader = posed.span({
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    });
  }

  componentDidMount = () => {
    setInterval(() => {

      /* If it's visible change the text, otherwise just make it not visible */
      if (this.state.isVisible) {
        this.setState({ 
          isVisible: false,
        });
      } else {
        this.setState({ 
          isVisible: true,
          textIndex: (this.state.textIndex + 1) % this.props.textList.length,
        });
      }

    }, 900);
  }

  render() {
    return (
      <this.fader pose={this.state.isVisible ? 'visible' : 'hidden'}>{this.props.textList[this.state.textIndex]}</this.fader>
    );
  }
}

export default FadeTextChanger;