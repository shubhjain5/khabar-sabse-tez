import './App.css';
import React from 'react';
import { News } from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default function App(){
 
    return(
    <>
    <Router>
     <Navbar/>
          <Routes>
            <Route exact path="/" element={  <News  key="general" pagesize="18" category = "general" />}/>
            <Route exact path="/Business"  element={ <News key="business" pagesize="18" category = "business" />}/>
            <Route exact path="/Entertainment"  element={ <News  key="entertainment" pagesize="18" category = "entertainment" />}/>
            <Route exact path="/Health" element={ <News key = "health" pagesize="18" category = "health" />}/>
            <Route exact path="/Science" element={ <News  key = "science"  pagesize="18" category = "science" />}/>
            <Route exact path="/Sports" element={ <News  key = "sports"  pagesize="18" category = "sports" />}/>
            <Route exact path="/Technology" element={ <News  key = "technology"  pagesize="18" category = "technology" />}/>
          </Routes>
    </Router>
       
    </>
    )
  
}



