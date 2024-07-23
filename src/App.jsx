import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import MainPage from './pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Routes>
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
