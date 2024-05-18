import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import LoginSuccess from "./pages/LoginSuccess";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <LoginSuccess></LoginSuccess>
    </ThemeProvider>
  );
}

export default App;
