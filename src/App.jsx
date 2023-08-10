import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header>
        <Navigation />
      </Header>
      <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<About />} />
          </Routes>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App
