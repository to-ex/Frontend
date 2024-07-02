import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrapPage from "./pages/ScrapPage";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import MyWrotePage from "./pages/MyWrotePage";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/scrap" element={<ScrapPage />} />
          <Route path="/mywrote" element={<MyWrotePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
