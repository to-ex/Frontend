import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import ScrapPage from "./pages/ScrapPage";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ScrapPage />
    </ThemeProvider>
  );
}

export default App;
