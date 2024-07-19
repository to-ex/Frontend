import React from 'react';
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Community from './pages/Community';
import WriteMe from './pages/WriteMe';
import WriteOthers from './pages/WriteOthers';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
      <Routes>
        <Route path="/community" element={<Community />} />
        <Route path="/WriteMe" element={<WriteMe />} />
        <Route path="/WriteOthers" element={<WriteOthers />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
