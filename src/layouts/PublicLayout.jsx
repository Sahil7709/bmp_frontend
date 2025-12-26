import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';
import useResponsive from '../core/hooks/useResponsive';
import FloatingChat from '../core/common/FloatingChat';

const PublicLayout = () => {
  const { isMobile } = useResponsive();
  
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      overflowX: 'hidden'
    }}>
      <PublicHeader />
      <Box 
        component="main" 
        sx={{ 
          flex: 1,
          p: isMobile ? 0 : 0,
          width: '100%',
          maxWidth: '100vw'
        }}
      >
        <Outlet />
        <FloatingChat/>
      </Box>
      <PublicFooter />
    </Box>
  );
};

export default PublicLayout;