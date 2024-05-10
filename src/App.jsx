import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";

function App() {
  return <ThemeProvider theme={Theme}></ThemeProvider>;
}

export default App;
