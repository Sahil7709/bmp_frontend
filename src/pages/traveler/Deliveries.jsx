import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Chip
} from '@mui/material';

const TravelerDeliveries = () => {
  // Mock data
  const deliveries = [
    {
      id: 'DEL001',
      sender: 'John Doe',
      pickup: 'New York, NY',
      drop: 'Boston, MA',
      status: 'DELIVERED',
      date: '2023-06-15',
      amount: '$25.00'
    },
    {
      id: 'DEL002',
      sender: 'Jane Smith',
      pickup: 'Chicago, IL',
      drop: 'Detroit, MI',
      status: 'IN_TRANSIT',
      date: '2023-06-18',
      amount: '$18.50'
    },
    {
      id: 'DEL003',
      sender: 'Robert Johnson',
      pickup: 'Los Angeles, CA',
      drop: 'San Francisco, CA',
      status: 'PICKED_UP',
      date: '2023-06-20',
      amount: '$12.75'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'DELIVERED': return 'success';
      case 'IN_TRANSIT': return 'primary';
      case 'PICKED_UP': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Deliveries
      </Typography>
      
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Delivery ID</TableCell>
                  <TableCell>Sender</TableCell>
                  <TableCell>Pickup</TableCell>
                  <TableCell>Drop-off</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {deliveries.map((delivery) => (
                  <TableRow key={delivery.id}>
                    <TableCell>{delivery.id}</TableCell>
                    <TableCell>{delivery.sender}</TableCell>
                    <TableCell>{delivery.pickup}</TableCell>
                    <TableCell>{delivery.drop}</TableCell>
                    <TableCell>{delivery.date}</TableCell>
                    <TableCell>
                      <Chip 
                        label={delivery.status.replace('_', ' ')} 
                        color={getStatusColor(delivery.status)} 
                        size="small" 
                      />
                    </TableCell>
                    <TableCell>{delivery.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TravelerDeliveries;