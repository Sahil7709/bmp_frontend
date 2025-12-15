import React from 'react';
import { Typography } from '@mui/material';
import useResponsive from '../core/hooks/useResponsive';

/**
 * A responsive typography component that automatically adjusts font sizes
 * based on screen size for consistent text layouts across the application.
 */
const ResponsiveTypography = ({ 
  children, 
  variant = "body1", 
  sx = {}, 
  ...props 
}) => {
  const { isMobile, isTablet } = useResponsive();
  
  // Define responsive font sizes
  const responsiveFontSizes = {
    h1: isMobile ? '2rem' : (isTablet ? '2.25rem' : '2.5rem'),
    h2: isMobile ? '1.75rem' : (isTablet ? '2rem' : '2.25rem'),
    h3: isMobile ? '1.5rem' : (isTablet ? '1.75rem' : '2rem'),
    h4: isMobile ? '1.25rem' : (isTablet ? '1.5rem' : '1.75rem'),
    h5: isMobile ? '1.125rem' : (isTablet ? '1.25rem' : '1.5rem'),
    h6: isMobile ? '1rem' : (isTablet ? '1.125rem' : '1.25rem'),
    subtitle1: isMobile ? '0.9375rem' : (isTablet ? '1rem' : '1.125rem'),
    subtitle2: isMobile ? '0.875rem' : (isTablet ? '0.9375rem' : '1rem'),
    body1: isMobile ? '0.875rem' : (isTablet ? '0.9375rem' : '1rem'),
    body2: isMobile ? '0.8125rem' : (isTablet ? '0.875rem' : '0.9375rem'),
    button: isMobile ? '0.8125rem' : (isTablet ? '0.875rem' : '0.875rem'),
    caption: isMobile ? '0.75rem' : (isTablet ? '0.8125rem' : '0.8125rem'),
    overline: isMobile ? '0.75rem' : (isTablet ? '0.75rem' : '0.75rem')
  };
  
  return (
    <Typography
      variant={variant}
      sx={{
        fontSize: responsiveFontSizes[variant],
        ...sx
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default ResponsiveTypography;