import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import VisaGuide from "./pages/VisaGuide";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/visa" element={<VisaGuide />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
