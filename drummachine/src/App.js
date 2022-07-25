import './App.css';
import { Component } from 'react';

const buttons = [
  {
    keyTrigger: 'Q',
    id: 's1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyTrigger: 'W',
    id: 's2',
    url: 'https://s3amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }
];

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Q: "",
    };


  }

  render() {
    return (
      <div>
        <div id='drum-machine'>
          <div id='display'>
            <button className='drum-pad' onClick={"src: https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}>Q</button>
            <button className='drum-pad'>W</button>
            <button className='drum-pad'>E</button>
            <button className='drum-pad'>A</button>
            <button className='drum-pad'>S</button>
            <button className='drum-pad'>D</button>
            <button className='drum-pad'>Z</button>
            <button className='drum-pad'>X</button>
            <button className='drum-pad'>C</button>
          </div>
        </div>
      </div>
    );
  }
}
