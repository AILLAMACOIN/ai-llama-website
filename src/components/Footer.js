// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography, IconButton, Link, Grid, Divider, Stack, Button } from '@mui/material';
import { Twitter, Telegram, Reddit, KeyboardArrowUp, Chat } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Twitter />, url: 'https://x.com/AILLAMACOIN', label: 'Twitter' },
    { icon: <Telegram />, url: 'https://t.me/AiLlamacoinSUI', label: 'Telegram' },
    { icon: <Chat />, url: 'https://discord.gg/KxXsAKA3ja', label: 'Discord' }
    //{ icon: <Reddit />, url: 'https://reddit.com', label: 'Reddit' }
  ];

  const footerSections = [
    { title: 'How to Buy', href: '#how-to-buy' },
    { title: 'About', href: '#about' },
    { title: 'Roadmap', href: '#roadmap' },
    { title: 'Tokenomics', href: '#tokenomics' },
    { title: 'Community', href: '#community' }
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        position: 'relative',
        mt: 'auto',
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(182,36,255,0.1) 100%)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(182, 36, 255, 0.2)',
      }}
    >
      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: -25,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <IconButton
          onClick={scrollToTop}
          sx={{
            backgroundColor: '#b624ff',
            color: 'white',
            '&:hover': {
              backgroundColor: '#d355ff',
              transform: 'translateY(-5px)',
            },
            transition: 'all 0.3s ease-in-out',
            boxShadow: '0 0 20px rgba(182, 36, 255, 0.3)',
          }}
        >
          <KeyboardArrowUp />
        </IconButton>
      </motion.div>

      <Container maxWidth="lg">
        <Box sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Logo and Description */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h6" 
                  noWrap
                  component="div"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: '#b624ff',
                    fontSize: { xs: '1.2rem', md: '1.5rem' }
                  }}
                >
                  $LLAMA
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Join the future of meme coins on SUI network. Community-driven, 
                  secure, and ready for the moon! 🚀
                </Typography>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: '#b624ff' }}>
                  Quick Links
                </Typography>
                <Stack spacing={1}>
                  {footerSections.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      underline="none"
                      sx={{
                        color: 'text.secondary',
                        '&:hover': {
                          color: '#b624ff',
                          transform: 'translateX(10px)',
                        },
                        transition: 'all 0.3s ease-in-out',
                        display: 'inline-block',
                      }}
                    >
                      {link.title}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Social Links */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: '#b624ff' }}>
                  Join Our Community
                </Typography>
                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      component={Link}
                      href={social.url}
                      target="_blank"
                      sx={{
                        color: 'white',
                        border: '1px solid rgba(182, 36, 255, 0.3)',
                        '&:hover': {
                          backgroundColor: 'rgba(182, 36, 255, 0.1)',
                          transform: 'translateY(-5px)',
                          boxShadow: '0 0 20px rgba(182, 36, 255, 0.3)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Stack>
              </motion.div>
            </Grid>
          </Grid>

          {/* Disclaimer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Box sx={{ 
              mt: 6, 
              p: 3, 
              background: 'rgba(182, 36, 255, 0.05)',
              border: '1px solid rgba(182, 36, 255, 0.1)',
              borderRadius: 2,
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at center, rgba(182, 36, 255, 0.1) 0%, transparent 70%)',
                animation: 'pulse 4s ease-in-out infinite',
              }
            }}>
              <Typography 
                variant="body2" 
                align="center"
                sx={{ 
                  color: 'text.secondary',
                  position: 'relative',
                  zIndex: 1,
                  '& strong': {
                    color: '#b624ff',
                    fontWeight: 'bold',
                    textShadow: '0 0 10px rgba(182, 36, 255, 0.3)',
                  }
                }}
              >
                <strong>Legal Disclaimer:</strong> $LLAMA is a meme coin with upcoming AI integrations, NFT features, and gaming utilities. Trading cryptocurrencies involves substantial risk. 
                The project is community-driven and for entertainment purposes. Nothing on this website constitutes financial advice. Always DYOR and invest responsibly.
              </Typography>
            </Box>
          </motion.div>

          <Divider sx={{ my: 4, borderColor: 'rgba(182, 36, 255, 0.2)' }} />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Typography 
              variant="body2" 
              color="text.secondary" 
              align="center"
              sx={{
                '& span': {
                  color: '#b624ff',
                  fontWeight: 'bold'
                }
              }}
            >
              © 2024 <span>AI LLAMACOIN</span>. All rights reserved. Built with 💜 on SUI
            </Typography>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
