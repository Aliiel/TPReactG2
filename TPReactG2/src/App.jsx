import './App.css'
import Header from './components/Header'
import {Routes, Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Products from './pages/Home';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { useState } from 'react';
import Profile from './pages/Profile';




function App() {

  const [connected, setConnected] = useState(false);





  return (
  

    <div className = "app">

    <Header connected={connected} setConnected={setConnected}/>
    <Routes>
    <Route path ="/Home" element = {<Products/>}/>
    <Route path ="/Login" element = {<LoginForm setConnected={setConnected}/>}/>
    <Route path = "/Profile" element = {<Profile connected={connected} setConnected={setConnected}/>}/>
    <Route path ="/Cart" element = {<Cart/>}/>
    <Route path ="/SignUp" element = {<SignUp/>}/>
    <Route path ="/Product/:id" element ={<ProductDetail/>}/>
    
    </Routes>


   

    <Footer/>

    </div>
  )
}

export default App
