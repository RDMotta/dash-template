import React , { useState } from "react";
import { Menu as MenuIcon, SettingsOutlined } from "@mui/icons-material";
import { Typography, Box, Button, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FlexBetween from "./FlexBetween";  
import SignInSignOutButton from "../views/Login/microsoft/SignInSignOutButton";
 
interface ProfileProps {
    name: string;
    email?: string;
    avatarURL?: string;
    occupation?: string;    
    onClickSettings?: () => void | undefined
    showLoginLogOut?: boolean
}
const Profile = ({ name, email, avatarURL, occupation, onClickSettings, showLoginLogOut } : ProfileProps) => {
  const theme = useTheme(); 
  const [anchorEl, setAnchorEl] = useState(null); 
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <FlexBetween>
        { onClickSettings != null ?
        <IconButton>
        <SettingsOutlined 
            color="primary"
            sx={{ 
            fontSize: "25px" }} />
        </IconButton> 
        : ''}       
      <Button
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textTransform: "none",
          gap: "1rem",
         }}
        >          
        <Box textAlign="left">
           <Typography
             fontWeight="bold"
             fontSize="0.85rem"
             color="textPrimary"
           >
            {name}
           </Typography>
           <Typography
             fontSize="0.75rem"
             color="textPrimary"
            >
             {occupation}
            </Typography>
            <Typography
             fontSize="0.75rem"
             color="textPrimary"
            >
             {email}
            </Typography>
        </Box>
        { showLoginLogOut ?
           <SignInSignOutButton/>
        : ''}            
        
      </Button>
         
    </FlexBetween> 
  );
};

export default Profile;