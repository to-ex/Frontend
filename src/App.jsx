import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VisaGuide from "./pages/VisaGuide";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/visa" element={<VisaGuide />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
