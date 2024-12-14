// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem, IconButton, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { KeyboardArrowDown, Rocket, Menu as MenuIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleCloseNavMenu();
  };

  const navItems = [
    { label: 'How to Buy', href: '#how-to-buy' },
    { label: 'About', href: '#about' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Community', href: '#community' }
  ];

  // Function to redirect to Cetus DEX
  const redirectToCetus = () => {
    window.open('https://app.cetus.zone/swap?from=0x2::sui::SUI&to=0x25a4983e22911428d1fea6ca770cbb0172f2debac6b9b8babfcb12018ff9526f::llamacoin::LLAMACOIN', '_blank');
  };
  

  return (
    <AppBar position="fixed" sx={{ 
      background: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(182, 36, 255, 0.2)'
    }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 }, mr: { md: 2 } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                color: '#b624ff',
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}
            >
              $LLAMA
            </Typography>
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                sx={{
                  px: 2,
                  py: 1,
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  border: '1px solid rgba(182, 36, 255, 0.3)',
                  background: 'transparent',
                  backdropFilter: 'blur(10px)',
                  boxShadow: 'none',
                  '&:hover': {
                    border: '1px solid #b624ff',
                    boxShadow: '0 0 15px rgba(182, 36, 255, 0.3)',
                    backgroundColor: 'rgba(182, 36, 255, 0.05)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Buy Now Button */}
          <Button
            variant="contained"
            startIcon={<Rocket />}
            onClick={redirectToCetus}
            sx={{
              display: { xs: 'none', md: 'flex' },
              backgroundColor: '#b624ff',
              color: 'white',
              px: 3,
              py: 1,
              fontSize: '1rem',
              fontWeight: 600,
              border: '2px solid #b624ff',
              background: 'linear-gradient(45deg, #b624ff 30%, #d355ff 90%)',
              boxShadow: '0 0 20px rgba(182, 36, 255, 0.5)',
              '&:hover': {
                background: 'linear-gradient(45deg, #d355ff 30%, #b624ff 90%)',
                transform: 'translateY(-2px) scale(1.05)',
                boxShadow: '0 0 30px rgba(182, 36, 255, 0.7)',
                border: '2px solid #d355ff',
              },
              transition: 'all 0.3s ease-in-out'
            }}
          >
            Buy Now
          </Button>

          {/* Mobile Navigation Menu */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiPaper-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(182, 36, 255, 0.2)',
              }
            }}
          >
            {navItems.map((item) => (
              <MenuItem key={item.label} onClick={() => {
                handleCloseNavMenu();
                scrollToSection(item.href);
              }}>
                <Typography textAlign="center">{item.label}</Typography>
              </MenuItem>
            ))}
            {/* Mobile Buy Now Button */}
            <MenuItem>
              <Button
                fullWidth
                variant="contained"
                startIcon={<Rocket />}
                onClick={redirectToCetus}
                sx={{
                  backgroundColor: '#b624ff',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: '#d355ff',
                  }
                }}
              >
                Buy Now
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
