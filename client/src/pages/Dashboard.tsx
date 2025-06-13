import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box
      height="100%" // fill available vertical space
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={3}
    >
      <Typography variant="h3" mb={3}>
        Welcome to My App
      </Typography>
    </Box>
  );
};

export default Dashboard;
