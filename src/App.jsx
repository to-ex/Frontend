import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import MyInfo from "./pages/MyInfo";
import VisaGuide from "./pages/VisaGuide";
import MainPage from "./pages/MainPage";
import MyPage from "./pages/MyPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/visa" element={<VisaGuide />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myinfo" element={<MyInfo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
