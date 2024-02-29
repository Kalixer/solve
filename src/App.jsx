import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'

import { Layout } from './layout/Layout';
import { Home } from './Pages/HomePage';
import { EngineeringPage } from './Pages/EngineeringPage';

function App() {
    return (
      <>
        <BrowserRouter basename='/solve'>
          <Layout>
            <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/engineering' element={<EngineeringPage/>}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </>
    );
}

export default App;
