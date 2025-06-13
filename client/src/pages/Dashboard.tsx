import React from "react";
import { Box, Typography, IconButton, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from "@mui/material";
import { Dashboard as DashboardIcon, Person as PersonIcon, TrendingUp as TrendingUpIcon, Lightbulb as LightbulbIcon, Store as StoreIcon, PlaylistAdd as PlaylistAddIcon, RssFeed as RssFeedIcon, ExitToApp as LogoutIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


// React Logo SVG as an icon
const ReactLogoIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19ZM12 7C10.34 7 9 8.34 9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10C15 8.34 13.66 7 12 7ZM12 11C11.45 11 11 10.55 11 10C11 9.45 11.45 9 12 9C12.55 9 13 9.45 13 10C13 10.55 12.55 11 12 11Z" fill="white"/>
</svg>
);


const menuItems = [
{ text: "Dashboard", icon: <DashboardIcon /> },
{ text: "AI", icon: <ReactLogoIcon /> },  // React Logo as AI
{ text: "My Account", icon: <PersonIcon /> },
{ text: "Trade", icon: <TrendingUpIcon /> },
{ text: "Suggestions", icon: <LightbulbIcon /> },
{ text: "Market", icon: <StoreIcon /> },
{ text: "Watchlists", icon: <PlaylistAddIcon /> },
{ text: "Feeds", icon: <RssFeedIcon /> },
{ text: "Settings", icon: <SettingsIcon /> }, // New Settings Icon
];


const Dashboard: React.FC = () => {
const navigate = useNavigate();


return (
<Box display="flex" minHeight="100vh">
{/* Sidebar */}
<Box
sx={{
width: 200,
bgcolor: "#1976d2", // Blue background color for sidebar
color: "white",
display: "flex",
flexDirection: "column",
alignItems: "center",
py: 3,
position: "relative",
}}
>
{/* Shiny Wave Effect */}
<Box
sx={{
position: "absolute",
top: 0,
left: 0,
width: "100%",
height: "100%",
background: "linear-gradient(120deg, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0) 50%)",
backgroundSize: "200% 200%",
opacity: 0.5,
pointerEvents: "none",
}}
/>


    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index}>
          <ListItemButton onClick={() => navigate(`/${item.text.toLowerCase()}`)}>
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: "white" }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    {/* Logout Button (Fixed Icon) */}
    <IconButton sx={{ color: "white", mt: "auto" }} onClick={() => navigate("/Home")}>
      <LogoutIcon />
    </IconButton>
  </Box>

  {/* Main Content */}
  <Box
    flexGrow={1}
    display="flex"
    alignItems="flex-start" // Align the text to the top
    justifyContent="center"
    bgcolor="white"
    p={3} // Padding to create some space
  >
    <Typography
      variant="h3"
      color="primary"
      sx={{
        fontFamily: '"Montserrat", sans-serif', // Use Montserrat font
        fontWeight: 600, // Make the font bold
      }}
    >
      Welcome To TradeX
    </Typography>
  </Box>
</Box>

);
};


export default Dashboard;