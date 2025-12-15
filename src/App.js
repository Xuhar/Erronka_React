import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BlowerPage from './pages/BlowerPage';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout compartido para todas las páginas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blowers" element={<BlowerPage />} />
          <Route path="events" element={<Home />} />
          <Route path="teams" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;