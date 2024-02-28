// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './Components/Header/Navbar'
import OurProd from './Components/subComponents/OurProd';
import AboutUs from './Components/subComponents/AboutUs';
import ContectUs from './Components/subComponents/ContectUs';
import ExoticLine from './Components/subComponents/ExoticLine';
import Hampers from './Components/subComponents/Hampers';
import HealthyLine from './Components/subComponents/HealthyLine';
import OrderAndDelivery from './Components/subComponents/OrderAndDelivery';
import OrderUs from './Components/subComponents/OrderUs';
import WhyUs from './Components/subComponents/WhyUs';
import Home from './Home'
import Footer from './Components/Footer/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const appStyle = {
    backgroundColor: 'lightblue',
    // Add any other styles as needed
  };

  return (
  <>
    <Router>
    <Navbar/>
    
    
   
    <Routes>
        
        <Route path='/' element={<Home/>} />
        <Route path='/ourProd' element={<OurProd/>} />
        <Route path='/healthyLine' element={<HealthyLine/>} />
        <Route path='/exoticLine' element={<ExoticLine/>} />
        <Route path='/hampers' element={<Hampers/>} />
        <Route path='/orderAndDelivery' element={<OrderAndDelivery/>} />
        <Route path='/orderUs' element={<OrderUs/>} />
        <Route path='/whyUs' element={<WhyUs/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contectUs' element={<ContectUs/>} />
      </Routes>
      
    
     
      <br/>
      <br/>
      {/* <Footer/> */}
  
    </Router>
  </>
  );
}

export default App;
