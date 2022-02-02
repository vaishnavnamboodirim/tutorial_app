import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Router, Link, Routes, Route} from "react-router-dom"

import AddTutorial from './components/AddTutorial';
import TutorialList from './components/TutorialsList';
import Tutorial from './components/Tutorial';

function App(){
  return(
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
      <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Routes>
 
          <Route exact path= "/add" element = {<AddTutorial/>}/>
          <Route exact path= {["/", "/tutorials"]} element = {<TutorialList/>}/>
          <Route exact path= "/tutorials/:id" element = {<Tutorial/>}/>
          
        </Routes>
      </div>
    </div>
  );
}

export default App;