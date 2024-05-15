import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import Login from "./pages/Login";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Login></Login>
    </ThemeProvider>
  );
}

export default App;
