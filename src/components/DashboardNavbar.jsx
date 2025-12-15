import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Menu, MenuItem, useTheme } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/authSlice';
import useResponsive from '../core/hooks/useResponsive';

const DashboardNavbar = ({ title, onMenuClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(state => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const { isMobile, isTablet } = useResponsive();

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
    // Navigate to profile page based on role
    switch(user?.role) {
      case 'USER':
        navigate('/user/profile');
        break;
      case 'TRAVELER':
        navigate('/traveler/profile');
        break;
      case 'ADMIN':
        navigate('/admin/profile');
        break;
      default:
        navigate('/profile');
    }
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ minHeight: isMobile ? 56 : 64 }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ 
            mr: isMobile ? 1 : 2,
            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }
          }}
        >
          <MenuIcon sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' } }} />
        </IconButton>
        <Typography 
          variant={isMobile ? "subtitle1" : "h6"} 
          noWrap 
          component="div" 
          sx={{ 
            flexGrow: 1,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' }
          }}
        >
          {title}
        </Typography>
        <IconButton 
          color="inherit"
          sx={{ 
            mr: isMobile ? 0.5 : 1,
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' }
          }}
        >
          <Badge badgeContent={0} color="secondary">
            <NotificationsIcon sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' } }} />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          onClick={handleMenuOpen}
          sx={{ 
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' }
          }}
        >
          <AccountCircle sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.5rem' } }} />
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
            Profile
          </MenuItem>
          <MenuItem 
            onClick={handleMenuClose}
            sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
          >
            Settings
          </MenuItem>
          <MenuItem 
            onClick={handleLogout}
            sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;