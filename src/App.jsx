import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import LanguagePage from './pages/LanguagePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <LanguagePage />
    </ThemeProvider>
  );
}

export default App;
