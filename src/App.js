import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import RegisterPage from './RegisterPage';
import NavBar from './Navbar';
import People from './People';

function App() {
  return (
    <div>
      <BrowserRouter>
   <NavBar />
   <Routes>
   <Route path="/" element={<RegisterPage/>}/>
   <Route path="/items" element={<People/>}/>
   </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
