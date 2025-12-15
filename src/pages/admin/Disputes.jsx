import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button
} from '@mui/material';

const AdminDisputes = () => {
  // In a real application, this would come from Redux state
  const disputes = [
    // Sample data
    // { id: 1, userId: 'User1', description: 'Package damaged', status: 'Open' },
    // { id: 2, userId: 'User2', description: 'Late delivery', status: 'Resolved' }
  ];
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Disputes Management
      </Typography>
      
      {disputes.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No open disputes at the moment.
        </Alert>
      ) : (
        <Paper sx={{ mt: 2 }}>
          <List>
            {disputes.map((dispute) => (
              <ListItem key={dispute.id} divider>
                <ListItemText
                  primary={`Dispute #${dispute.id}`}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        {`User: ${dispute.userId}`}
                      </Typography>
                      <br />
                      {`Issue: ${dispute.description}`}
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  <Button variant="contained" color="primary">
                    Resolve
                  </Button>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
};

export default AdminDisputes;