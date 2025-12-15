import React from 'react';
import { Grid } from '@mui/material';
import useResponsive from '../core/hooks/useResponsive';

/**
 * A responsive grid component that automatically adjusts spacing and item sizes
 * based on screen size for consistent layouts across the application.
 */
const ResponsiveGrid = ({ 
  children, 
  spacing = 2, 
  sx = {}, 
  ...props 
}) => {
  const { isMobile, isTablet } = useResponsive();
  
  // Adjust spacing based on screen size
  const responsiveSpacing = isMobile ? 1 : (isTablet ? 1.5 : spacing);
  
  return (
    <Grid
      container
      spacing={responsiveSpacing}
      sx={{
        width: '100%',
        ...sx
      }}
      {...props}
    >
      {children}
    </Grid>
  );
};

/**
 * Responsive grid item that automatically adjusts size based on screen size
 */
export const ResponsiveGridItem = ({ 
  children, 
  xs = 12, 
  sm, 
  md, 
  lg, 
  xl, 
  sx = {}, 
  ...props 
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  // If specific breakpoints are not provided, use responsive defaults
  const responsiveProps = {
    xs: xs,
    sm: sm !== undefined ? sm : xs,
    md: md !== undefined ? md : (sm !== undefined ? sm : xs),
    lg: lg !== undefined ? lg : (md !== undefined ? md : (sm !== undefined ? sm : xs)),
    xl: xl !== undefined ? xl : (lg !== undefined ? lg : (md !== undefined ? md : (sm !== undefined ? sm : xs)))
  };
  
  return (
    <Grid
      item
      {...responsiveProps}
      sx={{
        width: '100%',
        ...sx
      }}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default ResponsiveGrid;