import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Login from "./pages/Login";
import Redirection from "./pages/Redirection";
import "./App.css";
import LoginSuccess from "./pages/LoginSuccess";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/loginSuccess" element={<LoginSuccess />} />
          <Route
            exact
            path="/api/v1/auth/login/kakao"
            element={<Redirection />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
