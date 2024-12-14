// src/App.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: '#000000', minHeight: '100vh' }}>
        <Router>
          <Header />
          <Home />
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
