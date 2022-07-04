import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';
import Authentification from './pages/Auth';
import Footer from './components/Footer';
import AddContact from './pages/Contact/Add';
import Contact from './pages/Contact';
import NotFound from './components/Error/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/connection" element={<Authentification />} />
        <Route path="/contact/add" element={<AddContact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:something" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
