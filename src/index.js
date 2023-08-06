import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './todo/App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import '@fontsource/rubik-mono-one';
import '@fontsource-variable/antonio';


const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'black',
      },
      'h2': {
        color: 'gray.500',
      },
      'p': {
        color: 'white',
      },
    }
  },
  fonts: {
    heading: `'Rubik Mono One', sans-serif`,
    body: `'Antonio', sans-serif`,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
