import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';
import useResponsive from '../core/hooks/useResponsive';

const drawerWidth = 240;

const DashboardLayout = ({ role, title }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMobile } = useResponsive();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoleTitle = () => {
    switch(role) {
      case 'USER': return 'User Dashboard';
      case 'TRAVELER': return 'Traveler Dashboard';
      case 'ADMIN': return 'Admin Dashboard';
      default: return 'Dashboard';
    }
  };

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <CssBaseline />
      <DashboardNavbar 
        title={title || getRoleTitle()} 
        onMenuClick={handleDrawerToggle} 
      />
      <DashboardSidebar 
        role={role}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: isMobile ? 1 : 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: '56px', sm: '64px' }, // Height of the navbar
          minHeight: 'calc(100vh - 64px)',
          maxWidth: '100vw'
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

// Higher Order Component (HOC) wrapper
export const withDashboardLayout = (WrappedComponent, role, title) => {
  return (props) => (
    <DashboardLayout role={role} title={title}>
      <WrappedComponent {...props} />
    </DashboardLayout>
  );
};

export default DashboardLayout;