import './App.css';
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Footer from './components/Footer'
import NewsLetters from './components/NewsLetters'
import ProductEach from './pages/ProductEach';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Wish from './pages/Wish';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Success from './pages/Success';
import InfiniteBanner from './components/InfiniteBanner';
import Blog from './components/Blog';
import { useLayoutEffect } from 'react';
import YourOrder from './pages/YourOrders';

// import { useSelector } from 'react-redux';
// import PrivateRouting from './components/PrivateRouting';


function App() {

  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <>
      <Announcement />
      <Navbar/> 
      <Routes>
        <Route exact path="/" element={< Home/>}/>
        <Route exact path="/products" element={< ProductList/>}/>
        <Route exact path="/products/:category" element={< ProductList/>}/>
        {/* <Route exact path="/products/:color" element={< ProductList/>}/> */}
        <Route exact path="/product/:id" element={< ProductEach/>}/>
        <Route exact path="/cart" element={< Cart/>}/>
        <Route exact path="/wish" element={< Wish/>}/>
        <Route path="/login" element={<Login />} >
          <Route  path="" element={<Home/>}/>
        </Route >
        <Route exact path="/blogs" element={< Blog/>}/>
        <Route exact path="/register" element={< Register/>}/>
        <Route exact path="/success" element={< Success/>}/>
        <Route exact path="/your-orders" element={< YourOrder/>}/>
      </Routes>
      <InfiniteBanner/>
      <NewsLetters />
      <Footer/>
    </>
  );
}

export default App;
