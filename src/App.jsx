import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
