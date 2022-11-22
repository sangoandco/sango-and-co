import React from "react";
import './App.css';
import Hero from './components/Hero/Hero.js';
import Technologies from './components/Technologies.js'
import Profile from "./components/Profile/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <Hero />
      <Technologies />

      <BrowserRouter>
        <Routes>
          {isAuthenticated &&
          <Route path="/profile" element={<Profile user={user} />} />
          }
        <Route />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;