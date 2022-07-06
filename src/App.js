import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Checkout from './components/Checkout';
import FooterCom from './components/Footer';

function App() {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="bg-slate-200">
      <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <FooterCom scrollToTop = {scrollToTop} visible = {visible} />
    </div>
  );
}

export default App;
