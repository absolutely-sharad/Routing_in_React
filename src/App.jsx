import React from 'react';
import {Routes, Route} from  "react-router-dom";
import './App.css'
import Home from './components/Home';
import Signin from './components/Signin';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signin' element={<Signin/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
