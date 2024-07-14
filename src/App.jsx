import "./App.css";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import VisaGuide from "./pages/VisaGuide";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <VisaGuide></VisaGuide>
    </ThemeProvider>
  );
}

export default App;
