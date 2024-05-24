import React from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from './Form'
const App = ()=>{
  return(<>
   <Routes>
              <Route path="/home" element={<Home/>} />
            </Routes>
  </>)
}

export default App;