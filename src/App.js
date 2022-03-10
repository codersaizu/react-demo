
import './App.css';
import Navbar from './components/Navbar';
import Formss from './components/Formss';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]= useState('light');
      
 const toggleMode = () => {
   if(mode==='light'){
    setMode ('dark');
    document.body.style.backgroundColor='grey'
  } 
  else{
    setMode('light');


    document.body.style.backgroundColor='white'

  }
 }

 
  return (
  
    <>
  <Router>

    {/* <Navbar/> */}
    <Navbar title="Saizuc" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <Alert alert="this is alert"/>
    
    <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/">
              <Formss email="Enter your email here" text="enter your text here"/>
         </Route>
          
        </Switch>
 
    
   
    
    

    </div>
  </Router>
    
    </>
  );
}

export default App;
