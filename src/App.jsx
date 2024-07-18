import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import CustomCalendar from "./components/CustomCalendar";

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <Routes>
          <Route path="/calendar" element={<CustomCalendar />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
