import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrapPage from "./pages/ScrapPage";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/" element={<ScrapPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
