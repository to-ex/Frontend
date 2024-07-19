import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import LanguagePage from './pages/LanguagePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
      <Routes>
        <Route path="/LanguagePage" element={<LanguagePage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
