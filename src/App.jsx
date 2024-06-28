import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import MainPage from './pages/MainPage';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
