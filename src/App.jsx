import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import ScrapPage from "./pages/ScrapPage";
import Modal from "./components/Modal";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ScrapPage />
    </ThemeProvider>
  );
}

export default App;
