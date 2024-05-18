import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import LoginSuccess from "./pages/LoginSuccess";

function App() {
  return <ThemeProvider theme={Theme}></ThemeProvider>;
}

export default App;
