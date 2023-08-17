import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './pages/Profile';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';


function App() {

  return (
  

    <div className = "app">

    <Navbar/>
    <Routes>
    <Route path ="/Profile" element={<Profile/>}/>
    <Route path ="/Login" element = {<Login/>}/>
    <Route path ="/Cart" element = {<Cart/>}/>
    <Route path ="/SignUp" element = {<SignUp/>}/>
    </Routes>
   
    </div>
  )
}

export default App
