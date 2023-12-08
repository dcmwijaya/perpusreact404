import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Beranda from "./menu/Beranda";
import ManajemenBuku from './menu/ManajemenBuku';
import Footer from "./layout/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={ <Beranda /> } />
        <Route path="/manajemenbuku" exact element={ <ManajemenBuku /> } />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
