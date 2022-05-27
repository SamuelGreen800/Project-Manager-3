import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import ProductUpdate from './components/ProductUpdate';

const App = () => {
    
  return(
<div>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} default />
            <Route path="/products/:id" element={<ProductDetail/>} />
            <Route path="/products/edit/:id" element={<ProductUpdate/>} />
          </Routes> 
    </BrowserRouter>
      </div>
  ) 
}
export default App;

