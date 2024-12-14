// src/pages/Home.js
import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Link, IconButton, Chip, Stack, LinearProgress, Modal, Alert, AlertTitle } from '@mui/material';
import { motion } from 'framer-motion';
import { 
  Speed, Security, Savings, Group, Twitter, Telegram, Reddit, Rocket, Bolt, 
  EmojiEvents, TrendingUp, Timeline as TimelineIcon, Lock, Code, People, Diamond, 
  Diversity3, Gavel, NotificationsActive, AccountBalanceWallet, SwapHoriz, ShoppingCart, Help, Collections, SportsEsports, ViewInAr, PlayArrow, VolumeUp, Close, Psychology, Casino, Hub, Engineering, Chat
} from '@mui/icons-material';
import llamaImage from '../assets/neon-llama.png';
import backVideo from '../assets/Background-video.mp4';
import introVideo from '../assets/Intro-video.mp4';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

const Home = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const features = [
    {
      icon: <Speed sx={{ fontSize: 40, color: '#b624ff' }} />,
      title: 'Lightning Fast',
      description: 'Experience instant transactions on SUI network with near-zero latency 🚀',
      animation: { rotate: [0, 10, 0], scale: [1, 1.1, 1] }
    },
    {
      icon: <Lock sx={{ fontSize: 40, color: '#b624ff' }} />,
      title: 'Ultra Secure',
      description: 'Built on SUI with military-grade security and audited smart contracts 🔒',
      animation: { y: [0, -10, 0], scale: [1, 1.05, 1] }
    },
    {
      icon: <Diamond sx={{ fontSize: 40, color: '#b624ff' }} />,
      title: 'Community First',
      description: 'Join thousands of diamond-handed llamas in our growing family 💎',
      animation: { x: [-5, 5, -5], rotate: [-5, 5, -5] }
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40, color: '#b624ff' }} />,
      title: 'Moon Potential',
      description: 'Chart-breaking tokenomics designed for explosive growth 📈',
      animation: { y: [0, 10, 0], scale: [1, 1.1, 1] }
    }
  ];

  const buttonStyle = {
    backgroundColor: '#b624ff',
    color: 'white',
    border: '1px solid #b624ff',
    boxShadow: '0 0 10px rgba(182, 36, 255, 0.5)',
    '&:hover': {
      backgroundColor: '#d355ff',
      boxShadow: '0 0 20px rgba(182, 36, 255, 0.7)',
      border: '1px solid #d355ff',
    }
  };

  const outlinedButtonStyle = {
    color: 'white',
    border: '1px solid #b624ff',
    boxShadow: '0 0 10px rgba(182, 36, 255, 0.5)',
    '&:hover': {
      border: '1px solid #d355ff',
      boxShadow: '0 0 20px rgba(182, 36, 255, 0.7)',
      backgroundColor: 'rgba(182, 36, 255, 0.1)',
    }
  };

  const FeatureCard = ({ icon, title, description, animation }) => (
    <Paper elevation={3} sx={{ 
      p: 3, 
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(182, 36, 255, 0.2)',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 0 30px rgba(182, 36, 255, 0.2)',
        border: '1px solid rgba(182, 36, 255, 0.5)',
      }
    }}>
      <motion.div
        animate={animation}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography variant="h6" sx={{ ml: 1, background: 'linear-gradient(45deg, #fff 30%, #b3b3ff 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent' }}>{title}</Typography>
        </Box>
      </motion.div>
      <Typography variant="body1" color="text.secondary">{description}</Typography>
    </Paper>
  );

  return (
    <Box>
      {/* Main Banner Section */}
      <Box sx={{ 
        flexGrow: 1, 
        pt: { xs: 12, md: 16 },
        pb: 8,
        minHeight: '90vh',
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Video (Muted) */}
        <Box
          component="video"
          src={backVideo}
          autoPlay
          muted
          loop
          playsInline
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.2,
            filter: 'blur(3px) brightness(0.7)',
            zIndex: 0
          }}
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)',
            zIndex: 1
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Chip
                    icon={<TrendingUp />}
                    label="🔥 Trending on SUI"
                    sx={{
                      backgroundColor: 'rgba(182, 36, 255, 0.2)',
                      color: '#fff',
                      border: '1px solid #b624ff',
                      mb: 2,
                      '& .MuiChip-icon': { color: '#b624ff' },
                      boxShadow: '0 0 10px rgba(182, 36, 255, 0.3)',
                    }}
                  />
                </motion.div>

                <Typography variant="h1" gutterBottom sx={{ 
                  background: 'linear-gradient(45deg, #b624ff 30%, #00f2ff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  textShadow: '0 0 30px rgba(182, 36, 255, 0.8)',
                  mb: 2,
                  fontWeight: 'bold'
                }}>
                  AI LLAMACOIN
                  <Box component="span" sx={{ 
                    display: 'block', 
                    fontSize: '0.5em', 
                    mt: 1,
                    textShadow: '0 0 20px rgba(182, 36, 255, 0.8)'
                  }}>
                    The Next Gen Meme Revolution 🦙
                  </Box>
                </Typography>

                <Typography variant="h5" paragraph sx={{ 
                  textAlign: { xs: 'center', md: 'left' },
                  mb: 3,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  color: '#fff',
                  textShadow: '0 0 10px rgba(182, 36, 255, 0.5)',
                  fontWeight: 500
                }}>
                  Where AI Meets Memes, NFTs, and Gaming on the Fastest Blockchain 🚀
                </Typography>

                <Stack 
                  direction="row" 
                  spacing={1} 
                  flexWrap="wrap" 
                  sx={{ 
                    mb: 4,
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    gap: 1
                  }}
                >
                  <Chip
                    icon={<Bolt sx={{ color: '#b624ff' }} />}
                    label="Zero Tax"
                    sx={{ 
                      bgcolor: 'rgba(182, 36, 255, 0.2)', 
                      color: '#fff', 
                      border: '1px solid #b624ff',
                      boxShadow: '0 0 10px rgba(182, 36, 255, 0.3)',
                    }}
                  />
                  <Chip
                    icon={<EmojiEvents sx={{ color: '#b624ff' }} />}
                    label="100B Supply"
                    sx={{ 
                      bgcolor: 'rgba(182, 36, 255, 0.2)', 
                      color: '#fff', 
                      border: '1px solid #b624ff',
                      boxShadow: '0 0 10px rgba(182, 36, 255, 0.3)',
                    }}
                  />
                  <Chip
                    icon={<Rocket sx={{ color: '#b624ff' }} />}
                    label="SUI Powered"
                    sx={{ 
                      bgcolor: 'rgba(182, 36, 255, 0.2)', 
                      color: '#fff', 
                      border: '1px solid #b624ff',
                      boxShadow: '0 0 10px rgba(182, 36, 255, 0.3)',
                    }}
                  />
                </Stack>

                <Box sx={{ 
                  mb: 4,
                  p: 2,
                  bgcolor: 'rgba(182, 36, 255, 0.2)',
                  borderRadius: '8px',
                  border: '1px solid #b624ff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 2,
                  boxShadow: '0 0 20px rgba(182, 36, 255, 0.3)',
                }}>
                  <Typography variant="h6" sx={{ 
                    color: '#00f2ff',
                    textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
                  }}>
                    $LLAMA is available on Cetus (DEX) for now. 
                    Further listings are coming soon.
                  </Typography>
                  
                </Box>

                <Box sx={{ 
                  display: 'flex', 
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                  <Button 
                    variant="contained" 
                    size="large"
                    onClick={() => window.open('https://app.cetus.zone/swap?from=0x2::sui::SUI&to=0x25a4983e22911428d1fea6ca770cbb0172f2debac6b9b8babfcb12018ff9526f::llamacoin::LLAMACOIN', '_blank')}
                    sx={buttonStyle}
                    startIcon={<Rocket />}
                  >
                    Buy Now
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    href="#about"
                    sx={outlinedButtonStyle}
                  >
                    Learn More
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  onClick={() => setVideoModalOpen(true)}
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover .play-overlay': {
                      opacity: 1,
                    }
                  }}
                >
                  {/* Neon glow effect */}
                  <Box sx={{
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: 'radial-gradient(circle, rgba(182, 36, 255, 0.2) 0%, transparent 70%)',
                    animation: 'pulse 3s ease-in-out infinite',
                  }} />

                  {/* Llama Image */}
                  <Box
                    component="img"
                    src={llamaImage}
                    alt="Neon Llama"
                    sx={{
                      width: '100%',
                      maxWidth: 500,
                      height: 'auto',
                      borderRadius: '20px',
                      border: '2px solid #b624ff',
                      boxShadow: '0 0 30px rgba(182, 36, 255, 0.3)',
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      zIndex: 1,
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 0 40px rgba(182, 36, 255, 0.5)',
                      }
                    }}
                  />

                  {/* Play button overlay */}
                  <Box
                    className="play-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0, 0, 0, 0.4)',
                      borderRadius: '20px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out',
                      zIndex: 2,
                    }}
                  >
                    <IconButton
                      sx={{
                        backgroundColor: '#b624ff',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#d355ff',
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                    >
                      <PlayArrow sx={{ fontSize: 40 }} />
                    </IconButton>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Video Modal */}
      <Modal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ 
          position: 'relative',
          width: '90vw',
          maxWidth: '800px',
          aspectRatio: '1/1',
          backgroundColor: 'black',
          borderRadius: '20px',
          overflow: 'hidden',
          border: '2px solid #b624ff',
          boxShadow: '0 0 30px rgba(182, 36, 255, 0.3)',
        }}>
          <IconButton
            onClick={() => setVideoModalOpen(false)}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              zIndex: 2,
              '&:hover': {
                backgroundColor: 'rgba(182, 36, 255, 0.5)',
              }
            }}
          >
            <Close />
          </IconButton>
          <Box
            component="video"
            src={introVideo}
            autoPlay
            controls
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Modal>
  {/* How to Buy Section */}
  <Box id="how-to-buy" sx={{ 
    py: { xs: 12, md: 16 }, 
    position: 'relative',
    mt: 8 
  }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" 
              align="center" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #b624ff 30%, #00f2ff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 6,
                textShadow: '0 0 30px rgba(182, 36, 255, 0.5)',
              }}
            >
              How to Buy $LLAMA
            </Typography>

            <Grid container spacing={4}>
              {[
                {
                  icon: <AccountBalanceWallet sx={{ fontSize: 40, color: '#b624ff' }} />,
                  title: '1. Setup SUI Wallet',
                  description: [
                    'Download Sui Wallet from Chrome Store, or as an app on your mobile.',
                    'Create a new wallet or import existing one.',
                    'Save your recovery phrase safely.'
                  ]
                },
                {
                  icon: <SwapHoriz sx={{ fontSize: 40, color: '#b624ff' }} />,
                  title: '2. Get SUI Tokens',
                  description: [
                    'Buy SUI from major exchanges like Binance.',
                    'Transfer some $SUI to your Sui Wallet.',
                    'Ensure you have extra $SUI for fees.'
                  ]
                },
                {
                  icon: <ShoppingCart sx={{ fontSize: 40, color: '#b624ff' }} />,
                  title: '3. Buy on Cetus',
                  description: [
                    'Visit Cetus DEX through our button.',
                    'Connect your Sui Wallet.',
                    'Select SUI/LLAMA trading pair.',
                    'Set amount and complete swap!'
                  ]
                }
              ].map((step, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Paper elevation={3} sx={{ 
                      p: 4,
                      height: '100%',
                      minHeight: 400,
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(182, 36, 255, 0.2)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 0 30px rgba(182, 36, 255, 0.2)',
                        border: '1px solid rgba(182, 36, 255, 0.5)',
                      }
                    }}>
                      <Box sx={{ mb: 3 }}>
                        {step.icon}
                      </Box>
                      <Typography variant="h5" gutterBottom sx={{ 
                        color: '#fff',
                        fontWeight: 600,
                        mb: 3
                      }}>
                        {step.title}
                      </Typography>
                      <Box component="ul" sx={{ 
                        p: 0, 
                        m: 0, 
                        listStyle: 'none',
                        flex: 1
                      }}>
                        {step.description.map((item, itemIndex) => (
                          <Box
                            component="li"
                            key={itemIndex}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 2.5,
                              color: '#fff'
                            }}
                          >
                            <Box
                              sx={{
                                minWidth: 28,
                                minHeight: 28,
                                width: 28,
                                height: 28,
                                borderRadius: '50%',
                                backgroundColor: 'rgba(182, 36, 255, 0.1)',
                                border: '1px solid #b624ff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mr: 2,
                                mt: 0.5,
                                fontSize: '14px',
                                color: '#b624ff',
                                flexShrink: 0
                              }}
                            >
                              {itemIndex + 1}
                            </Box>
                            <Typography 
                              variant="body1" 
                              sx={{
                                lineHeight: 1.5,
                                flex: 1
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      {index === 2 && (
                        <Button
                          variant="contained"
                          fullWidth
                          startIcon={<Rocket />}
                          onClick={() => window.open('https://app.cetus.zone/swap?from=0x2::sui::SUI&to=0x25a4983e22911428d1fea6ca770cbb0172f2debac6b9b8babfcb12018ff9526f::llamacoin::LLAMACOIN', '_blank')}
                          sx={{
                            mt: 3,
                            backgroundColor: '#b624ff',
                            color: 'white',
                            py: 1.5,
                            '&:hover': {
                              backgroundColor: '#d355ff',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 0 20px rgba(182, 36, 255, 0.5)',
                            }
                          }}
                        >
                          Buy Now
                        </Button>
                      )}
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
      
      {/* About Section */}
      <Box id="about" sx={{ 
        py: { xs: 12, md: 16 },
        mt: 8,
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(182,36,255,0.1) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>

              <Typography variant="h2" gutterBottom align="center" 
                sx={{ 
                  background: 'linear-gradient(45deg, #b624ff 30%, #00f2ff 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(182, 36, 255, 0.5)',
                }}>
                Why Choose $LLAMA?
              </Typography>
            </Box>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

    

      {/* Roadmap Section */}
      <Box id="roadmap" sx={{ 
        py: { xs: 12, md: 16 }, 
        position: 'relative',
        mt: 8 
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" 
              align="center" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #b624ff 30%, #00f2ff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 6,
                textShadow: '0 0 30px rgba(182, 36, 255, 0.5)',
              }}
            >
              Roadmap to Llama Dominance 🚀
            </Typography>

            <Timeline 
              position="alternate"
              sx={{
                [`@media (max-width: 600px)`]: {
                  '.MuiTimelineItem-root': {
                    '&:before': {
                      display: 'none'
                    },
                    flexDirection: 'row !important'
                  },
                  '.MuiTimelineContent-root': {
                    textAlign: 'left !important',
                    marginLeft: '16px !important',
                    marginRight: '0 !important',
                    padding: '8px 16px !important',
                    width: 'calc(100% - 90px) !important'
                  },
                  '.MuiTimelineSeparator-root': {
                    position: 'relative',
                    marginLeft: '0 !important'
                  },
                  '.MuiTimelineDot-root': {
                    margin: '0 !important',
                    marginTop: '10px !important'
                  },
                  '.MuiTimelineConnector-root': {
                    minHeight: '100px !important'
                  }
                }
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#b624ff' }}>
                    <Rocket />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: '#b624ff' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    bgcolor: 'rgba(182, 36, 255, 0.1)', 
                    border: '1px solid #b624ff',
                    boxShadow: '0 0 20px rgba(182, 36, 255, 0.2)'
                  }}>
                    <Typography variant="h6" color="#00f2ff">Phase 1: Launch & Community</Typography>
                    <Typography color="white">
                      • Fair Launch on Cetus DEX<br/>
                      • Website Launch & Social Media Setup<br/>
                      • Initial Marketing Campaign<br/>
                      • CoinGecko & CMC Listings
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#00f2ff' }}>
                    <Psychology />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: '#00f2ff' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    bgcolor: 'rgba(0, 242, 255, 0.1)', 
                    border: '1px solid #00f2ff',
                    boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
                  }}>
                    <Typography variant="h6" color="#b624ff">Phase 2: AI Integration</Typography>
                    <Typography color="white">
                      • Launch AI Price Prediction Bot<br/>
                      • Community Voting Platform<br/>
                      • AI Trading Signals for Holders<br/>
                      • Partnerships with AI Projects
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#b624ff' }}>
                    <Casino />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: '#b624ff' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    bgcolor: 'rgba(182, 36, 255, 0.1)', 
                    border: '1px solid #b624ff',
                    boxShadow: '0 0 20px rgba(182, 36, 255, 0.2)'
                  }}>
                    <Typography variant="h6" color="#00f2ff">Phase 3: NFT & Gaming</Typography>
                    <Typography color="white">
                      • Limited NFT Collection (1,000 Unique Llamas)<br/>
                      • NFT Staking with $LLAMA Rewards<br/>
                      • Simple Browser Game Development<br/>
                      • NFT Holder Benefits Program
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#00f2ff' }}>
                    <Hub />
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: '#00f2ff' }} />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    bgcolor: 'rgba(0, 242, 255, 0.1)', 
                    border: '1px solid #00f2ff',
                    boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
                  }}>
                    <Typography variant="h6" color="#b624ff">Phase 4: Ecosystem Expansion</Typography>
                    <Typography color="white">
                      • Major CEX Listings<br/>
                      • AI-Powered DeFi Features<br/>
                      • Cross-Chain Bridge Development<br/>
                      • Game Rewards Integration
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: '#b624ff' }}>
                    <Engineering />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ 
                    p: 3, 
                    bgcolor: 'rgba(182, 36, 255, 0.1)', 
                    border: '1px solid #b624ff',
                    boxShadow: '0 0 20px rgba(182, 36, 255, 0.2)'
                  }}>
                    <Typography variant="h6" color="#00f2ff">Phase 5: Global Adoption</Typography>
                    <Typography color="white">
                      • Enhanced AI Features<br/>
                      • Mobile Game Launch<br/>
                      • Strategic Marketing Expansion<br/>
                      • Community-Driven Development
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </motion.div>
        </Container>
      </Box>

      {/* Tokenomics Section */}
      <Box id="tokenomics" sx={{ 
        py: { xs: 12, md: 16 }, 
        position: 'relative',
        mt: 8 
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" 
              align="center" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #b624ff 30%, #00f2ff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 6,
                textShadow: '0 0 30px rgba(182, 36, 255, 0.5)',
              }}
            >
              Tokenomics
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.3)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(182, 36, 255, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 30px rgba(182, 36, 255, 0.2)',
                    border: '1px solid rgba(182, 36, 255, 0.5)',
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Diamond sx={{ color: '#b624ff', fontSize: 30, mr: 1 }} />
                    <Typography variant="h4" gutterBottom sx={{ 
                      color: '#fff',
                      fontWeight: 600
                    }}>
                      Token Details
                    </Typography>
                  </Box>
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="subtitle1" sx={{ 
                        color: '#b624ff',
                        mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}>
                        <span>Total Supply:</span>
                        <Chip 
                          label="100B LLAMA" 
                          sx={{ 
                            backgroundColor: 'rgba(182, 36, 255, 0.1)',
                            color: '#fff',
                            border: '1px solid #b624ff',
                          }}
                        />
                      </Typography>
                    </Box>

                    <Box sx={{ 
                      p: 2,
                      border: '1px solid rgba(182, 36, 255, 0.2)',
                      borderRadius: 1,
                      '&:hover': { borderColor: '#b624ff' }
                    }}>
                      <Typography variant="h6" color="#00f2ff" gutterBottom>
                        Fair Launch
                      </Typography>
                      <Typography color="white">
                        • No Team Tokens<br/>
                        • No Private Sale<br/>
                        • 100% Fair Launch
                      </Typography>
                    </Box>

                    <Box sx={{ 
                      p: 2,
                      border: '1px solid rgba(182, 36, 255, 0.2)',
                      borderRadius: 1,
                      '&:hover': { borderColor: '#b624ff' }
                    }}>
                      <Typography variant="h6" color="#00f2ff" gutterBottom>
                        Security
                      </Typography>
                      <Typography color="white">
                        • Liquidity Locked<br/>
                        • Contract Verified<br/>
                        • No Mint Function
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ 
                  p: 4, 
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.3)', 
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(182, 36, 255, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 30px rgba(182, 36, 255, 0.2)',
                    border: '1px solid rgba(182, 36, 255, 0.5)',
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <TimelineIcon sx={{ color: '#b624ff', fontSize: 30, mr: 1 }} />
                    <Typography variant="h4" gutterBottom sx={{ 
                      color: '#fff',
                      fontWeight: 600
                    }}>
                      Distribution
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ mb: 1, color: 'white' }}>Initial Liquidity (80%)</Typography>
                      <LinearProgress variant="determinate" value={80} sx={{ 
                        height: 10, 
                        borderRadius: 5,
                        backgroundColor: 'rgba(182, 36, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#b624ff',
                        }
                      }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ mb: 1, color: 'white' }}>Marketing & CEX Listings (10%)</Typography>
                      <LinearProgress variant="determinate" value={10} sx={{ 
                        height: 10, 
                        borderRadius: 5,
                        backgroundColor: 'rgba(182, 36, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#b624ff',
                        }
                      }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ mb: 1, color: 'white' }}>NFT & Game Development (5%)</Typography>
                      <LinearProgress variant="determinate" value={5} sx={{ 
                        height: 10, 
                        borderRadius: 5,
                        backgroundColor: 'rgba(182, 36, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#b624ff',
                        }
                      }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ mb: 1, color: 'white' }}>AI Development Fund (5%)</Typography>
                      <LinearProgress variant="determinate" value={5} sx={{ 
                        height: 10, 
                        borderRadius: 5,
                        backgroundColor: 'rgba(182, 36, 255, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: '#b624ff',
                        }
                      }} />
                    </Box>

                    <Box sx={{ 
                      mt: 2,
                      p: 2,
                      border: '1px solid rgba(182, 36, 255, 0.2)',
                      borderRadius: 1,
                      '&:hover': { borderColor: '#b624ff' }
                    }}>
                      <Typography variant="h6" color="#00f2ff" gutterBottom>
                        Utility (coming soon)
                      </Typography>
                      <Typography color="white">
                        • NFT Staking Rewards<br/>
                        • Game Rewards Currency<br/>
                        • AI Features Access<br/>
                        • Community Governance
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Community Section */}
      <Box id="community" sx={{ 
        py: { xs: 12, md: 16 }, 
        position: 'relative',
        mt: 8 
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography variant="h2" 
              align="center" 
              gutterBottom
              sx={{
                background: 'linear-gradient(45deg, #b624ff 30%, #00f2ff 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 6,
                textShadow: '0 0 30px rgba(182, 36, 255, 0.5)',
              }}
            >
              Join Our Community
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ 
                  p: 4,
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(182, 36, 255, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 30px rgba(182, 36, 255, 0.2)',
                    border: '1px solid rgba(182, 36, 255, 0.5)',
                  }
                }}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h4" gutterBottom sx={{ 
                      color: '#fff',
                      fontWeight: 600
                    }}>
                      Why Join $LLAMA?
                    </Typography>
                    <Typography color="white" paragraph>
                      Be part of the next generation AI-powered meme revolution on the SUI Network!
                    </Typography>
                  </Box>

                  <Stack spacing={2}>
                    {[
                      {
                        icon: <Rocket sx={{ color: '#b624ff' }} />,
                        title: 'Early Access',
                        description: 'Get early access to our AI features, NFT drops, and gaming rewards.'
                      },
                      {
                        icon: <Psychology sx={{ color: '#b624ff' }} />,
                        title: 'AI Integration',
                        description: 'Benefit from AI-powered trading signals and price predictions.'
                      },
                      {
                        icon: <Casino sx={{ color: '#b624ff' }} />,
                        title: 'NFT & Gaming',
                        description: 'Participate in our NFT collection and upcoming browser game.'
                      },
                      {
                        icon: <People sx={{ color: '#b624ff' }} />,
                        title: 'Community Power',
                        description: 'Vote on future developments and shape the project direction.'
                      }
                    ].map((item, index) => (
                      <Box key={index} sx={{
                        p: 2,
                        border: '1px solid rgba(182, 36, 255, 0.2)',
                        borderRadius: 1,
                        '&:hover': { borderColor: '#b624ff' }
                      }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          {item.icon}
                          <Typography variant="h6" color="#00f2ff" sx={{ ml: 1 }}>
                            {item.title}
                          </Typography>
                        </Box>
                        <Typography color="white">
                          {item.description}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ 
                  p: 4,
                  height: '100%',
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(182, 36, 255, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 30px rgba(182, 36, 255, 0.2)',
                    border: '1px solid rgba(182, 36, 255, 0.5)',
                  }
                }}>
                  <Typography variant="h4" gutterBottom sx={{ 
                    color: '#fff',
                    fontWeight: 600,
                    mb: 3
                  }}>
                    Connect With Us
                  </Typography>

                  <Stack spacing={3}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<Telegram />}
                      onClick={() => window.open('https://t.me/AiLlamacoinSUI', '_blank')}
                      sx={{
                        py: 1.5,
                        backgroundColor: 'rgba(182, 36, 255, 0.1)',
                        border: '1px solid #b624ff',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(182, 36, 255, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 0 20px rgba(182, 36, 255, 0.3)',
                        }
                      }}
                    >
                      Join Telegram Community
                    </Button>

                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<Twitter />}
                      onClick={() => window.open('https://x.com/AILLAMACOIN', '_blank')}
                      sx={{
                        py: 1.5,
                        backgroundColor: 'rgba(0, 242, 255, 0.1)',
                        border: '1px solid #00f2ff',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 242, 255, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)',
                        }
                      }}
                    >
                      Follow on Twitter
                    </Button>

                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<Chat />}
                      onClick={() => window.open('https://discord.gg/KxXsAKA3ja', '_blank')}
                      sx={{
                        py: 1.5,
                        backgroundColor: 'rgba(182, 36, 255, 0.1)',
                        border: '1px solid #b624ff',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(182, 36, 255, 0.2)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 0 20px rgba(182, 36, 255, 0.3)',
                        }
                      }}
                    >
                      Join Discord Community
                    </Button>

                    <Box sx={{ 
                      p: 3, 
                      border: '1px solid rgba(182, 36, 255, 0.2)',
                      borderRadius: 1,
                      textAlign: 'center'
                    }}>
                      <Typography variant="h6" color="#00f2ff" gutterBottom>
                        Coming Soon
                      </Typography>
                      <Stack spacing={2}>
                        <Typography color="white">
                          • Discord Community<br/>
                          • AI Trading Signals Group<br/>
                          • NFT Holders Channel<br/>
                          • Gaming Community
                        </Typography>
                      </Stack>
                    </Box>

                    <Alert 
                      severity="info" 
                      sx={{ 
                        bgcolor: 'rgba(182, 36, 255, 0.1)',
                        border: '1px solid #b624ff',
                        '& .MuiAlert-icon': { color: '#b624ff' }
                      }}
                    >
                      <AlertTitle sx={{ color: '#00f2ff' }}>Stay Updated!</AlertTitle>
                      <Typography color="white">
                        Join our community to get early access to features and exclusive updates about our upcoming launches!
                      </Typography>
                    </Alert>
                  </Stack>
                </Paper>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
