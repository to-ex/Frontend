import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Login from "./pages/Login";
import Redirection from "./pages/Redirection";
import "./App.css";
import LoginSuccess from "./pages/LoginSuccess";
import MyInfo from "./pages/MyInfo";
import VisaGuide from "./pages/VisaGuide";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginSuccess" element={<LoginSuccess />} />
          <Route
            exact
            path="/api/v1/auth/login/kakao"
            element={<Redirection />}
          />
          <Route path="/visa" element={<VisaGuide />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myinfo" element={<MyInfo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
