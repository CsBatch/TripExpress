import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import React, { useState } from 'react';
import Signin from "./Components/Signin";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";
import Tour from "./Components/Tour";



function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // document.body.style.backgroundImage='url(background-dark.png)';
    }
    else {
      setMode("light");
      // document.body.style.backgroundImage='url(background-light.jpeg)';
    }
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Switch>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Tour" element={<Tour />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Signin" element={<Signin />} />
      </Switch>
    </Router>
  );
}

export default App;