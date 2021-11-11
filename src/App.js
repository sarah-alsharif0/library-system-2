import './App.css';
import { SearchBar } from './components/SearchBar';
import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Footer/>
    </div>
  );
}

export default App;
