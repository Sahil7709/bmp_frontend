import React from 'react';
import { Box } from '@mui/material';
import useResponsive from '../core/hooks/useResponsive';

/**
 * A responsive container component that automatically adjusts padding and max-width
 * based on screen size for consistent spacing across the application.
 */
const ResponsiveContainer = ({ 
  children, 
  disableGutters = false, 
  maxWidth = 'lg', 
  sx = {}, 
  ...props 
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  // Padding values based on screen size
  const horizontalPadding = isMobile ? 1 : (isTablet ? 2 : 3);
  const verticalPadding = isMobile ? 1 : (isTablet ? 2 : 3);
  
  // Max width values
  const maxWidthValues = {
    xs: isMobile ? '100%' : '100%',
    sm: isMobile ? '100%' : '540px',
    md: isMobile ? '100%' : '720px',
    lg: isMobile ? '100%' : '960px',
    xl: isMobile ? '100%' : '1140px'
  };
  
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: disableGutters ? '100%' : maxWidthValues[maxWidth],
        mx: disableGutters ? 0 : 'auto',
        px: disableGutters ? 0 : horizontalPadding,
        py: verticalPadding,
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ResponsiveContainer;