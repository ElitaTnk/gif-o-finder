import React, { Component } from 'react';

import './App.css';

import SearchBar from './Containers/SearchBar';
import VideoList from './Containers/VideoList';
import VideoDetail from './Containers/VideoDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="main-title">GIF-o-Finder</h1>
        <SearchBar />
        <VideoDetail />
        <VideoList />
      </div>

    );
  }
}

export default App;
