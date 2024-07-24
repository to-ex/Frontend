import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
