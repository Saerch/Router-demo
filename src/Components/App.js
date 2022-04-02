import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import KeyFeatures from './pages/KeyFeatures';
import Testimonial from './pages/Testimonial';
import Pricing from './pages/Pricing';
import Navbar from './Navbar/Navbar';
import Product from './pages/Product';
import First from './pages/First';
import Second from './pages/Second';


function App() {
  return (
    <div className='container'>
      <Navbar/>

      <Routes>

        <Route path="/" element = {<Home/>}></Route>
        <Route path="/features" element = {<KeyFeatures/>}></Route>
          <Route path="/pricing" element = {<Pricing/>}></Route>
        <Route path="/testimonial" element = {<Testimonial/>}></Route>
        <Route path="/demo" element = {<Demo/>}></Route>
        <Route path='/product' element = {<Product/>}>
          <Route path='first' element={<First/>}></Route>
          <Route path='second' element={<Second/>}></Route>
          <Route index element = {<First/>}></Route>

        
        </Route>

 </Routes>
 <h2>Hello</h2>
    </div>
  
     );
}

export default App;
