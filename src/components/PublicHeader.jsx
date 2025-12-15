import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useTheme
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import useResponsive from '../core/hooks/useResponsive';

const PublicHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(state => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const { isMobile, isTablet } = useResponsive();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
  };

  const handleProfile = () => {
    // Navigate to dashboard based on role
    switch(user?.role) {
      case 'USER':
        navigate('/user/home');
        break;
      case 'TRAVELER':
        navigate('/traveler/home');
        break;
      case 'ADMIN':
        navigate('/admin/dashboard');
        break;
      default:
        navigate('/');
    }
    handleMenuClose();
  };

  return (
    <>
      {/* Location Ticker */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: isMobile ? 0.25 : 0.5 }}>
        <Container>
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ 
              fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' },
              py: isMobile ? 0.5 : 0
            }}
          >
            Serving 50+ cities across the country | 24/7 Customer Support
          </Typography>
        </Container>
      </Box>

      {/* Main Navigation */}
      <AppBar 
        position="static" 
        sx={{ 
          bgcolor: 'white', 
          color: 'primary.main',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
      >
        <Container>
          <Toolbar sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            px: 0,
            flexWrap: 'wrap',
            minHeight: isMobile ? 56 : 64
          }}>
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              sx={{ 
                fontWeight: 'bold', 
                color: 'primary.main',
                cursor: 'pointer',
                flexGrow: { xs: 1, sm: 0 },
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                mr: isMobile ? 1 : 2
              }}
              onClick={() => navigate('/')}
            >
              Book My Parcel
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 0.5, sm: 1, md: 2 },
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              {!isMobile && (
                <>
                  <Button 
                    color="inherit"
                    onClick={() => navigate('/')}
                    sx={{ 
                      fontWeight: isActive('/') ? 'bold' : 'normal',
                      color: isActive('/') ? 'primary.main' : 'text.primary',
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                      minWidth: 'auto',
                      px: { xs: 0.5, sm: 1, md: 2 }
                    }}
                  >
                    Home
                  </Button>
                  <Button 
                    color="inherit"
                    onClick={() => navigate('/about')}
                    sx={{ 
                      fontWeight: isActive('/about') ? 'bold' : 'normal',
                      color: isActive('/about') ? 'primary.main' : 'text.primary',
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                      minWidth: 'auto',
                      px: { xs: 0.5, sm: 1, md: 2 }
                    }}
                  >
                    About Us
                  </Button>
                  <Button 
                    color="inherit"
                    onClick={() => navigate('/services')}
                    sx={{ 
                      fontWeight: isActive('/services') ? 'bold' : 'normal',
                      color: isActive('/services') ? 'primary.main' : 'text.primary',
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                      minWidth: 'auto',
                      px: { xs: 0.5, sm: 1, md: 2 }
                    }}
                  >
                    Services
                  </Button>
                  <Button 
                    color="inherit"
                    onClick={() => navigate('/contact')}
                    sx={{ 
                      fontWeight: isActive('/contact') ? 'bold' : 'normal',
                      color: isActive('/contact') ? 'primary.main' : 'text.primary',
                      fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                      minWidth: 'auto',
                      px: { xs: 0.5, sm: 1, md: 2 }
                    }}
                  >
                    Contact Us
                  </Button>
                </>
              )}
              
              {!isAuthenticated ? (
                // Single Login/Register button for unauthenticated users
                <Button 
                  variant="contained"
                  onClick={() => navigate('/login', { state: { from: location } })}
                  sx={{ 
                    ml: { xs: 0.5, sm: 1, md: 2 },
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      color: 'white'
                    },
                    fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' },
                    minWidth: { xs: 'auto', sm: 'auto' },
                    px: { xs: 1, sm: 1.5, md: 2 },
                    height: { xs: 32, sm: 36, md: 40 }
                  }}
                >
                  {isMobile ? 'Login' : 'Login / Register'}
                </Button>
              ) : (
                // User icon with dropdown for authenticated users
                <>
                  <IconButton
                    color="inherit"
                    onClick={handleMenuOpen}
                    sx={{ 
                      ml: { xs: 0.5, sm: 1, md: 2 },
                      width: { xs: 30, sm: 35, md: 40 },
                      height: { xs: 30, sm: 35, md: 40 },
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark'
                      }
                    }}
                  >
                    <AccountCircle sx={{ fontSize: { xs: 18, sm: 20, md: 24 } }} />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{ 
                      '& .MuiMenu-paper': { 
                        minWidth: { xs: 120, sm: 150, md: 200 } 
                      } 
                    }}
                  >
                    <MenuItem 
                      onClick={handleProfile}
                      sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
                    >
                      Edit Profile
                    </MenuItem>
                    <MenuItem 
                      onClick={handleLogout}
                      sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default PublicHeader;