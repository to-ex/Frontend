import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import MyInfo from "./pages/MyInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Routes>
          <Route path="/myinfo" element={<MyInfo />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
