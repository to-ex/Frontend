import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Header from "./components/Header";
import CustomCalendar from "./components/CustomCalendar";
import CustomModal from "./components/CustomModal";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Routes>
        <Route path="/calendar" element={<CustomCalendar />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
