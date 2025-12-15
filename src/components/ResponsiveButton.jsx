import React from 'react';
import { Button } from '@mui/material';
import useResponsive from '../core/hooks/useResponsive';

/**
 * A responsive button component that automatically adjusts size, padding, and font size
 * based on screen size for consistent button layouts across the application.
 */
const ResponsiveButton = ({ 
  children, 
  size = "medium", 
  sx = {}, 
  fullWidthOnMobile = false,
  ...props 
}) => {
  const { isMobile, isTablet } = useResponsive();
  
  // Adjust button size based on screen size
  let responsiveSize = size;
  if (isMobile && size === "large") {
    responsiveSize = "medium";
  } else if (isMobile && size === "medium") {
    responsiveSize = "small";
  }
  
  // Adjust height based on screen size
  const buttonHeights = {
    small: isMobile ? 32 : (isTablet ? 34 : 36),
    medium: isMobile ? 36 : (isTablet ? 40 : 44),
    large: isMobile ? 40 : (isTablet ? 48 : 56)
  };
  
  // Adjust font size based on screen size
  const fontSizes = {
    small: isMobile ? '0.75rem' : (isTablet ? '0.8rem' : '0.8125rem'),
    medium: isMobile ? '0.8rem' : (isTablet ? '0.875rem' : '0.875rem'),
    large: isMobile ? '0.875rem' : (isTablet ? '1rem' : '1rem')
  };
  
  return (
    <Button
      size={responsiveSize}
      sx={{
        height: buttonHeights[responsiveSize],
        fontSize: fontSizes[responsiveSize],
        minWidth: isMobile ? (fullWidthOnMobile ? '100%' : 'auto') : 'auto',
        ...sx
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ResponsiveButton;