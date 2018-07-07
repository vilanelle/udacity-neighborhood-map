import React, { Component } from 'react';
import './App.css';
import MainMap from './Map';

class App extends Component {
  state = {
    usingMobile: false
  }

  checkUserDevice = () => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      this.setState( {usingMobile: true} );
     }
  }

  componentDidMount() {
    this.checkUserDevice();
  }

  render() {
    return (
      <div className="App">
         <MainMap />
      </div>
    );
  }
}

export default App;
