import React from "react";
import './App.css';
import Hero from './components/Hero/Hero.js';
import Manifesto from './components/Manifesto.js'
import Values from "./components/Values";
import Technologies from './components/Technologies.js'
import VideoPlayer from "./components/VideoPlayer";
import Contact from "./components/Contact";

function App() {

  console.log('App Test')

  return (
    <>
      {/* <VideoPlayer /> */}
      <Hero />
      <Technologies />
      <Manifesto />
      <Values />
      <Contact />
    </>
  );
}

export default App;