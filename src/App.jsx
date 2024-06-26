import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.scss'

import { Layout } from './layout/Layout';
import { Home } from './Pages/HomePage/index.jsx';
import { EngineeringPage } from './Pages/EngineeringPage';
import { ConstructionPage } from './Pages/ConstructionPage';
import { DevelopmentPage } from './Pages/DevelopmentPage';
import { NotFound } from './Pages/NotFound';
import { BlogPage } from './Pages/BlogPage';
import { BlogEntry } from './Pages/BlogEntry/index.jsx';
import { ContactPage } from './Pages/ContactPage/index.jsx';
import { FAQs } from './Pages/FAQs/index.jsx';
import { ProjectsPage } from './Pages/ProjectsPage/index.jsx';
import { MyContextProvider } from './hooks/MyContext.js';
import { ArchitecturePage } from './Pages/ArchitecturePage/index.jsx';

function App() {
    return (
      <>
        <MyContextProvider>            
          {/* <BrowserRouter basename='/solve'> */}
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/engineering' element={<EngineeringPage/>}/>
                <Route exact path='/construction' element={<ConstructionPage/>}/>
                <Route exact path='/architecture' element={<ArchitecturePage/>}/>
                <Route exact path='/blog' element={<BlogPage/>}/>
                <Route exact path='/blogEntry' element={<BlogEntry/>}/>
                <Route exact path='/faqs' element={<FAQs/>}/>
                <Route exact path='/contact' element={<ContactPage/>}/>
                <Route exact path='/projects' element={<ProjectsPage/>}/>
                <Route exact path='/dev' element={<DevelopmentPage/>}/>
                <Route exact path='/*' element={<NotFound/>}/>
              </Routes>
            </Layout>
          </BrowserRouter>
        </MyContextProvider>
      </>
    );
}

export default App;
