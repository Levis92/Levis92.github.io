import React, { Component } from 'react';
import './App.css';

import Profile from "./components/profile/profile";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Profile />
      </React.Fragment>
    );
  }
}

export default App;
