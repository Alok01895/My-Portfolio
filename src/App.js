import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Qualification from "./component/Qualification";
import Review from "./component/Review"
import Resume from "./component/Resume";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";



function App() {
  return <BrowserRouter>
            
            <Navbar/>
           
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Qualification' element={<Qualification/>}/>
              
              <Route path='/Resume' element={<Resume/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/Review' element={<Review/>}/>
            </Routes>
  
         </BrowserRouter>
}

export default App;
