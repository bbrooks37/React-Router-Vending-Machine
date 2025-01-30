import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';
import NavBar from './NavBar'; // Import the NavBar
import './App.css'; // Import your CSS file (if you have one)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />  {/* Add the NavBar component */}
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;