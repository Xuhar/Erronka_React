import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import BlowerPage from './pages/BlowerPage';
import TeamPage from './pages/TeamPage';
import Login from './pages/Login';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout compartido para todas las páginas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blowers">
            <Route index element={<BlowerPage defaultId="oihan" />} />

            <Route path=":id" element={<BlowerPage />} />
          </Route>
          <Route path="events" element={<Home />} />
          <Route path="teams" element={<TeamPage />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;