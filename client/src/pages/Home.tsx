import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Tabs, Tab } from '@mui/material';


const Home: React.FC = () => {
const [tabIndex, setTabIndex] = useState(0);


return (
<Box
display="flex"
flexDirection="column"
minHeight="100vh"
bgcolor="#ADD8E6" // Light blue background
>
<Box
     component="main"
     flexGrow={1}
     display="flex"
     flexDirection="column"
     alignItems="center"
     justifyContent="center"
     textAlign="center"
     px={3}
   >
<Typography variant="h3" mb={3}>
Welcome to TradeX
</Typography>
<Typography variant="h5" mb={5}>
Please log in or sign up to continue
</Typography>


    <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)} centered>
      <Tab label="Login" />
      <Tab label="Sign Up" />
    </Tabs>
    
    <Box 
      width={{ xs: '90%', sm: '60%', md: '40%' }} 
      p={4} 
      bgcolor="white" 
      borderRadius={2} 
      boxShadow={3}
      mt={2}
    >
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{ display: tabIndex === 1 ? 'block' : 'none' }}
      />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color={tabIndex === 0 ? "primary" : "secondary"}
        href="/dashboard"
        sx={{ mt: 3 }}
      >
        {tabIndex === 0 ? "Login" : "Sign Up"}
      </Button>
    </Box>
  </Box>
</Box>

);
};


export default Home;