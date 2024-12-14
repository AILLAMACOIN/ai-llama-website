// src/theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b624ff', // Neon purple
      light: '#d355ff',
      dark: '#9100cc',
    },
    secondary: {
      main: '#00f2ff', // Neon cyan
      light: '#33f5ff',
      dark: '#00a9b5',
    },
    background: {
      default: '#000000', // Pure black background
      paper: '#000000', // Also pure black
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3ff', // Light purple tint
    },
  },
  typography: {
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      background: 'linear-gradient(45deg, #b624ff 30%, #00f2ff 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 0 20px rgba(182, 36, 255, 0.5)',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      color: '#b624ff',
      textShadow: '0 0 10px rgba(182, 36, 255, 0.3)',
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      color: '#b624ff',
      textShadow: '0 0 5px rgba(182, 36, 255, 0.3)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          textTransform: 'none',
          backgroundColor: '#b624ff',
          color: '#ffffff',
          border: '1px solid rgba(182, 36, 255, 0.3)',
          boxShadow: '0 0 15px rgba(182, 36, 255, 0.3)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: '#d355ff',
            boxShadow: '0 0 25px rgba(182, 36, 255, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          backgroundColor: 'transparent',
          border: '1px solid #b624ff',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: 'rgba(182, 36, 255, 0.1)',
            border: '1px solid #d355ff',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'transparent !important',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(182, 36, 255, 0.1)',
          boxShadow: '0 0 20px rgba(182, 36, 255, 0.1)',
          '&:hover': {
            boxShadow: '0 0 30px rgba(182, 36, 255, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(182, 36, 255, 0.1)',
          boxShadow: '0 0 20px rgba(182, 36, 255, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 30px rgba(182, 36, 255, 0.2)',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          backgroundColor: '#000000 !important',
          color: '#ffffff',
        },
        '#root': {
          backgroundColor: '#000000 !important',
        },
        '.MuiBox-root': {
          backgroundColor: 'transparent !important',
        },
        '.MuiContainer-root': {
          backgroundColor: 'transparent !important',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent !important',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent !important',
        },
      },
    },
  },
});

// Add a global override for background color
theme.components = {
  ...theme.components,
  MuiCssBaseline: {
    styleOverrides: {
      ...theme.components?.MuiCssBaseline?.styleOverrides,
      '@global': {
        'html, body, #root': {
          backgroundColor: '#000000 !important',
        },
      },
    },
  },
};

export default theme;

