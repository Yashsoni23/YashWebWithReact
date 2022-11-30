import React from 'react';
import './App.css';
import { HashRouter,Route,Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Sketches from './Components/Sketches';
import Contact from './Components/Contact';



function App() {
  return (
    <>
       <HashRouter>
       <Routes>
       < Route path="/" element={<Home/>} />
       < Route path="/About" element={<About />} />
       < Route path="/Projects" element={<Project />} />
       < Route path="/Sketches" element={<Sketches />} />
       < Route path="/Contact" element={<Contact />} />
       </Routes>
       </HashRouter>
   {/* <Header/>  */}
    </>
  );
}

export default App;
