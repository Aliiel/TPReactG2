import './App.css'
import Navbar from './components/Navbar'
import Profile from './pages/Profile';
import {Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import Products from './pages/Home';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

function App() {

  return (
  

    <div className = "app">

    <Navbar/>
    <Routes>
    <Route path ="/Profile" element={<Profile/>}/>
    <Route path ="/Login" element = {<Login/>}/>
    <Route path ="/Cart" element = {<Cart/>}/>
    <Route path ="/SignUp" element = {<SignUp/>}/>
    <Route path ="/Product/:id" element ={<ProductDetail/>}/>
    <Route path ="/" element= {<Products/>}/>
    </Routes>

  

    <Footer/>

    </div>
  )
}

export default App
