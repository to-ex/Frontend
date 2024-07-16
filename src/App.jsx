import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import CustomCalendar from "./components/CustomCalendar";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CustomCalendar />
    </ThemeProvider>
  );
}

export default App;
