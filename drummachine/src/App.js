import './App.css';
import { Component } from 'react';

const buttons = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      // Q:"Q",
      // E:"E",
      // A:"A",
      // S:"S",
      // D:"D",
      // Z:"Z",
      // X:"X",
      // C:"C"
   
    };


  }

  render() {
    return (
      <div>
        <div id='drum-machine'>
          <div id='display'>
            <audio className='clip' id={this.props.keyTrigger} src={this.props.clip} />
            {this.props.keyTrigger}
            {/* https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} */}
          </div>
        </div>
      </div>
    );
  }
}
const conny = () => {
  return ({src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'})
}