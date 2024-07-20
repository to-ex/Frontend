import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import PostWrite from './pages/PostWrite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
      <Routes>
        <Route path="/PostWrite" element={<PostWrite />} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
