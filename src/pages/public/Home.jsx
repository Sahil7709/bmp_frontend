import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent,
  Link
} from '@mui/material';
import { 
  LocalShipping, 
  Person, 
  EmojiTransportation,
  Star
} from '@mui/icons-material';
import useResponsive from '../../core/hooks/useResponsive';

const Home = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();

  const services = [
    {
      icon: <LocalShipping sx={{ fontSize: isMobile ? 32 : 40 }} />,
      title: 'Send Parcel',
      description: 'Send your parcels securely with our reliable delivery service.'
    },
    {
      icon: <Person sx={{ fontSize: isMobile ? 32 : 40 }} />,
      title: 'Become a Traveler',
      description: 'Earn money by delivering parcels during your travels.'
    },
    {
      icon: <EmojiTransportation sx={{ fontSize: isMobile ? 32 : 40 }} />,
      title: 'Real-time Tracking',
      description: 'Track your parcels in real-time with our advanced GPS system.'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      name: 'Maria Garcia',
      role: 'Operations Manager',
      avatar: '/placeholder-avatar.jpg'
    },
    {
      name: 'David Smith',
      role: 'Tech Lead',
      avatar: '/placeholder-avatar.jpg'
    }
  ];

  const testimonials = [
    {
      quote: 'Book My Parcel made sending my package so easy and affordable!',
      author: 'Sarah Williams',
      rating: 5
    },
    {
      quote: 'As a traveler, I love earning extra income by delivering parcels.',
      author: 'Michael Chen',
      rating: 5
    }
  ];

  const handleBookParcel = () => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      // User is logged in, go to new request page
      navigate('/user/new-request');
    } else {
      // User is not logged in, go to login page
      navigate('/login', { state: { from: { pathname: '/user/new-request' } } });
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          minHeight: isMobile ? '60vh' : '80vh', 
          display: 'flex', 
          alignItems: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Animated Background Elements */}
        <Box 
          sx={{
            position: 'absolute',
            top: '-50px',
            left: '-50px',
            width: isMobile ? '150px' : '200px',
            height: isMobile ? '150px' : '200px',
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.1)',
            animation: 'pulse 3s infinite'
          }}
        />
        <Box 
          sx={{
            position: 'absolute',
            bottom: isMobile ? '-60px' : '-80px',
            right: isMobile ? '-60px' : '-80px',
            width: isMobile ? '200px' : '300px',
            height: isMobile ? '200px' : '300px',
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.1)',
            animation: 'pulse 4s infinite 1s'
          }}
        />
        
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={isMobile ? 2 : 4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant={isMobile ? "h3" : "h2"} 
                component="h1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' }
                }}
              >
                Send & Receive Parcels
              </Typography>
              <Typography 
                variant={isMobile ? "h6" : "h5"} 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                }}
              >
                Connect with travelers to send your parcels securely and affordably
              </Typography>
              <Box sx={{ 
                mt: isMobile ? 2 : 4, 
                display: 'flex', 
                gap: isMobile ? 1 : 2,
                flexDirection: isMobile ? 'column' : 'row'
              }}>
                <Button 
                  variant="contained" 
                  size={isMobile ? "medium" : "large"} 
                  sx={{ 
                    bgcolor: 'white', 
                    color: 'primary.main', 
                    fontWeight: 'bold', 
                    py: isMobile ? 1 : 1.5, 
                    px: isMobile ? 2 : 4,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                    height: isMobile ? 40 : 48
                  }}
                  onClick={handleBookParcel}
                >
                  Book My Parcel
                </Button>
                <Button 
                  variant="outlined" 
                  size={isMobile ? "medium" : "large"} 
                  sx={{ 
                    color: 'white', 
                    borderColor: 'white', 
                    py: isMobile ? 1 : 1.5, 
                    px: isMobile ? 2 : 4,
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
                    height: isMobile ? 40 : 48
                  }}
                  onClick={() => navigate('/services')}
                >
                  Learn More
                </Button>
              </Box>
              
              <Box sx={{ 
                mt: isMobile ? 2 : 3, 
                textAlign: 'center' 
              }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                  }}
                >
                  New to Book My Parcel?{' '}
                  <Link 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); navigate('/register', { state: { from: { pathname: '/' } } }); }}
                    sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }
                    }}
                  >
                    Create an account
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  height: isMobile ? '250px' : '400px', 
                  bgcolor: 'rgba(255,255,255,0.2)', 
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography 
                  variant={isMobile ? "h5" : "h4"}
                  sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
                >
                  Parcel Delivery Illustration
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ 
        py: isMobile ? 4 : 8, 
        bgcolor: '#f5f5f5' 
      }}>
        <Container>
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: isMobile ? 3 : 6,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }
            }}
          >
            Our Services
          </Typography>
          <Grid container spacing={isMobile ? 2 : 4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  height: '100%', 
                  textAlign: 'center', 
                  p: isMobile ? 2 : 3,
                  minHeight: isMobile ? 180 : 220
                }}>
                  <Box sx={{ 
                    color: 'primary.main', 
                    mb: isMobile ? 1 : 2,
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    {service.icon}
                  </Box>
                  <Typography 
                    variant={isMobile ? "h6" : "h5"} 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 'bold',
                      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }
                    }}
                  >
                    {service.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Us Section */}
      <Box sx={{ py: isMobile ? 4 : 8 }}>
        <Container>
          <Grid container spacing={isMobile ? 3 : 6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  height: isMobile ? '200px' : '400px', 
                  bgcolor: '#e0e0e0', 
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography 
                  variant={isMobile ? "h5" : "h4"}
                  sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
                >
                  About Us Image
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant={isMobile ? "h5" : "h4"} 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }
                }}
              >
                About Book My Parcel
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
                }}
              >
                Book My Parcel is a revolutionary platform that connects people who need to send parcels 
                with travelers heading in the same direction. Our mission is to make parcel delivery 
                more affordable, eco-friendly, and convenient.
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
                }}
              >
                With our innovative approach, we're reducing shipping costs while helping travelers 
                earn extra income. Our real-time tracking system ensures your parcels are delivered 
                safely and on time.
              </Typography>
              <Button 
                variant="contained" 
                size={isMobile ? "medium" : "large"} 
                sx={{ 
                  mt: isMobile ? 1 : 2,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                  height: isMobile ? 36 : 44
                }}
                onClick={() => navigate('/about')}
              >
                Learn More About Us
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ 
        py: isMobile ? 4 : 8, 
        bgcolor: '#f5f5f5' 
      }}>
        <Container>
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: isMobile ? 3 : 6,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }
            }}
          >
            Our Team
          </Typography>
          <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ 
                  textAlign: 'center',
                  minHeight: isMobile ? 150 : 180
                }}>
                  {/* <Avatar 
                    sx={{ width: 100, height: 100, mx: 'auto', mt: 2 }} 
                    src={member.avatar}
                  /> */}
                  <CardContent>
                    <Typography 
                      variant={isMobile ? "h6" : "h5"} 
                      gutterBottom
                      sx={{ 
                        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: { xs: '0.8rem', sm: '0.875rem', md: '1rem' }
                      }}
                    >
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: isMobile ? 4 : 8 }}>
        <Container>
          <Typography 
            variant={isMobile ? "h5" : "h4"} 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold', 
              mb: isMobile ? 3 : 6,
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' }
            }}
          >
            What Our Customers Say
          </Typography>
          <Grid container spacing={isMobile ? 2 : 4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: isMobile ? 2 : 3 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    mb: isMobile ? 1 : 2,
                    justifyContent: 'center'
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} sx={{ color: '#FFD700', fontSize: isMobile ? 20 : 24 }} />
                    ))}
                  </Box>
                  <Typography 
                    variant="body1" 
                    fontStyle="italic" 
                    paragraph
                    sx={{ 
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
                    }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    fontWeight="bold"
                    sx={{ 
                      fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }
                    }}
                  >
                    - {testimonial.author}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.15;
          }
          100% {
            transform: scale(1);
            opacity: 0.1;
          }
        }
      `}</style>
    </Box>
  );
};

export default Home;