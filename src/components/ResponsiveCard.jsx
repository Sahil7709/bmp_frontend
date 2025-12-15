import React from 'react';
import { Card, CardContent, CardActions } from '@mui/material';
import useResponsive from '../core/hooks/useResponsive';

/**
 * A responsive card component that automatically adjusts padding, margins, and sizing
 * based on screen size for consistent card layouts across the application.
 */
const ResponsiveCard = ({ 
  children, 
  actions, 
  sx = {}, 
  contentSx = {},
  actionsSx = {},
  elevation = 1,
  ...props 
}) => {
  const { isMobile, isTablet } = useResponsive();
  
  // Adjust padding based on screen size
  const cardPadding = isMobile ? 1 : (isTablet ? 1.5 : 2);
  const contentPadding = isMobile ? 1 : (isTablet ? 1.5 : 2);
  
  return (
    <Card
      elevation={elevation}
      sx={{
        width: '100%',
        borderRadius: isMobile ? 8 : 12,
        ...sx
      }}
      {...props}
    >
      <CardContent
        sx={{
          p: contentPadding,
          '&:last-child': {
            pb: contentPadding
          },
          ...contentSx
        }}
      >
        {children}
      </CardContent>
      {actions && (
        <CardActions
          sx={{
            p: cardPadding,
            pt: 0,
            ...actionsSx
          }}
        >
          {actions}
        </CardActions>
      )}
    </Card>
  );
};

export default ResponsiveCard;