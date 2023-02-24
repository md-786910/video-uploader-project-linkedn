import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './page/Home';
import Video from './page/Video';
import VideoListing from './page/VideoListing';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view' element={<VideoListing />} />
        <Route path='/view/:id' element={<Video />} />
      </Routes>


    </div>
  );
}

export default App;
