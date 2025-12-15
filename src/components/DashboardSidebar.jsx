import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Toolbar, Typography } from '@mui/material';
import { 
  Home, 
  AddBox, 
  History, 
  TrackChanges, 
  People, 
  Assignment, 
  Gavel, 
  AccountBox,
  Dashboard,
  PendingActions,
  UploadFile
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import useResponsive from '../core/hooks/useResponsive';

const drawerWidth = 240;

const menuItems = {
  USER: [
    { text: 'Dashboard', icon: <Dashboard />, path: '/user/home' },
    { text: 'New Request', icon: <AddBox />, path: '/user/new-request' },
    { text: 'My Requests', icon: <History />, path: '/user/history' },
    { text: 'Track Parcel', icon: <TrackChanges />, path: '/user/track' },
    { text: 'Profile', icon: <AccountBox />, path: '/user/profile' }
  ],
  TRAVELER: [
    { text: 'Dashboard', icon: <Dashboard />, path: '/traveler/home' },
    { text: 'Available Requests', icon: <Assignment />, path: '/traveler/feed' },
    { text: 'My Deliveries', icon: <TrackChanges />, path: '/traveler/deliveries' },
    { text: 'Earnings', icon: <People />, path: '/traveler/earnings' },
    { text: 'KYC Submission', icon: <UploadFile />, path: '/traveler/kyc-submit' },
    { text: 'Profile', icon: <AccountBox />, path: '/traveler/profile' }
  ],
  ADMIN: [
    { text: 'Dashboard', icon: <Dashboard />, path: '/admin/dashboard' },
    { text: 'KYC Management', icon: <Assignment />, path: '/admin/kyc' },
    { text: 'All Deliveries', icon: <TrackChanges />, path: '/admin/deliveries' },
    { text: 'Users', icon: <People />, path: '/admin/users' },
    { text: 'Disputes', icon: <Gavel />, path: '/admin/disputes' },
    { text: 'Analytics', icon: <Dashboard />, path: '/admin/analytics' },
    { text: 'Profile', icon: <AccountBox />, path: '/admin/profile' }
  ]
};

const DashboardSidebar = ({ role, mobileOpen, handleDrawerToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isMobile } = useResponsive();

  const menuList = menuItems[role] || [];

  const handleNavigation = (path) => {
    navigate(path);
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const isSelected = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <div>
      <Toolbar sx={{ minHeight: isMobile ? 56 : 64 }}>
        <Typography 
          variant={isMobile ? "h6" : "h5"} 
          noWrap 
          component="div"
          sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } }}
        >
          Book My Parcel
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {menuList.map((item, index) => (
          <ListItem 
            button 
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            selected={isSelected(item.path)}
            sx={{ 
              minHeight: isMobile ? 44 : 48,
              px: { xs: 1, sm: 2 },
              '& .MuiListItemIcon-root': {
                minWidth: { xs: 36, sm: 40 }
              }
            }}
          >
            <ListItemIcon sx={{ 
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              color: isSelected(item.path) ? 'primary.main' : 'inherit'
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiTypography-root': {
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                  fontWeight: isSelected(item.path) ? 600 : 400
                }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            minHeight: '100vh'
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            minHeight: '100vh'
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default DashboardSidebar;