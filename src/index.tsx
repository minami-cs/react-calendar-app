import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Calendar from './Calendar';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme }}>
      <Calendar />
    </ThemeProvider>
  </React.StrictMode>
);
