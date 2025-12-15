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

const TravelerEarnings = () => {
  // Mock data
  const earnings = [
    {
      month: 'June 2023',
      deliveries: 12,
      totalEarnings: '$145.50',
      pending: '$25.00',
      paid: '$120.50'
    },
    {
      month: 'May 2023',
      deliveries: 18,
      totalEarnings: '$210.75',
      pending: '$0.00',
      paid: '$210.75'
    },
    {
      month: 'April 2023',
      deliveries: 15,
      totalEarnings: '$178.25',
      pending: '$0.00',
      paid: '$178.25'
    }
  ];

  const transactions = [
    {
      id: 'TXN001',
      date: '2023-06-15',
      deliveryId: 'DEL001',
      amount: '$25.00',
      status: 'PAID'
    },
    {
      id: 'TXN002',
      date: '2023-06-10',
      deliveryId: 'DEL002',
      amount: '$18.50',
      status: 'PAID'
    },
    {
      id: 'TXN003',
      date: '2023-06-05',
      deliveryId: 'DEL003',
      amount: '$22.75',
      status: 'PENDING'
    }
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Earnings
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Earnings
              </Typography>
              <Typography variant="h4" color="primary">
                $1,240.50
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Pending Payment
              </Typography>
              <Typography variant="h4" color="warning.main">
                $25.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Deliveries
              </Typography>
              <Typography variant="h4" color="success.main">
                86
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Monthly Earnings
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Month</TableCell>
                      <TableCell>Deliveries</TableCell>
                      <TableCell>Total</TableCell>
                      <TableCell>Paid</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {earnings.map((earning, index) => (
                      <TableRow key={index}>
                        <TableCell>{earning.month}</TableCell>
                        <TableCell>{earning.deliveries}</TableCell>
                        <TableCell>{earning.totalEarnings}</TableCell>
                        <TableCell>{earning.paid}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Transactions
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.amount}</TableCell>
                        <TableCell>
                          <Chip 
                            label={transaction.status} 
                            color={transaction.status === 'PAID' ? 'success' : 'warning'} 
                            size="small" 
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelerEarnings;