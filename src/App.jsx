import React from 'react';
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import LanguagePage from './pages/LanguagePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import WriteClick from './pages/WriteClick';


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>   
          <Route path="/community" element={<Community />} />
          <Route path="/WriteClick/:boardId" element={<WriteClick />} />
          <Route path="/Language" element={<LanguagePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
