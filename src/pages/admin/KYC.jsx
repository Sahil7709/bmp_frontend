import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Box, 
  Typography, 
  Paper, 
  LinearProgress, 
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Chip
} from '@mui/material';
import { getPendingKYCs, approveKYC } from '../../store/slices/adminSlice';

const AdminKYC = () => {
  const dispatch = useDispatch();
  const { kycDocs, loading, error } = useSelector(state => state.admin);
  
  useEffect(() => {
    dispatch(getPendingKYCs({}));
  }, [dispatch]);
  
  const handleApprove = (kycId) => {
    dispatch(approveKYC(kycId));
  };
  
  if (loading) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Pending KYC Documents
        </Typography>
        <LinearProgress />
      </Box>
    );
  }
  
  if (error) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>
          Pending KYC Documents
        </Typography>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Pending KYC Documents
      </Typography>
      
      {kycDocs.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No pending KYC documents.
        </Alert>
      ) : (
        <Paper sx={{ mt: 2 }}>
          <List>
            {kycDocs.map((doc) => (
              <ListItem key={doc._id} divider>
                <ListItemText
                  primary={`User: ${doc.userId?.name || 'Unknown'}`}
                  secondary={
                    <>
                      <Typography component="span" variant="body2" color="textPrimary">
                        {`Document Type: ${doc.docType}`}
                      </Typography>
                      <br />
                      {`Submitted: ${new Date(doc.createdAt).toLocaleDateString()}`}
                    </>
                  }
                />
                <ListItemSecondaryAction>
                  <Chip 
                    label={doc.status} 
                    color="warning" 
                    size="small" 
                    sx={{ mr: 1 }}
                  />
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={() => handleApprove(doc._id)}
                  >
                    Approve
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

export default AdminKYC;