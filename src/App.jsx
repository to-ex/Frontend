import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Header from "./components/Header"; // 헤더 컴포넌트 추가
import CustomCalendar from "./components/CustomCalendar";

function App() {
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <>
          <Header /> {/* 헤더를 항상 렌더링하도록 수정 */}
          <Routes>
            <Route path="/calendar" element={<CustomCalendar />} />
          </Routes>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
