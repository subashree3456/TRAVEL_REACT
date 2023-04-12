import React from "react";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";

 function App(){
  return(
    <div className="App"> 

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
 
      
    </div>
  )
}

export default App;


// notes

// if u r using react router dom u have to use link

