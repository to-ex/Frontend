import React from 'react';
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import WriteClick from './pages/WriteClick';
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
      <Header />
      <ScrollToTop />    
      <Routes>
        <Route path="/community" element={<Community />} />
        <Route path="/WriteClick/:boardId" element={<WriteClick />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
