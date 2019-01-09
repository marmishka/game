import React from 'react';
import { Button } from 'react-bootstrap';
import pushButtonAudio from './audio/button-push.mp3';

class SoundButton extends Button {
  constructor(props) {
    super(props);
    this.state = {
      soundOn: props.soundOn,
      text: props.text
    }
    this.pushButtonSound = this.pushButtonSound.bind(this);
  }

  pushButtonSound() {
    if (this.state.soundOn) {
      const pushAudio = new Audio(pushButtonAudio);
      pushAudio.play();
    }
  };

  render() {
    return (
      <Button onClick={this.pushButtonSound}>{this.state.text}</Button>
    );
  }
}

export default SoundButton;
