import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
      <Header />  
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
