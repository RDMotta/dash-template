import { Typography, Box } from "@mui/material";
import React from "react";

interface HeaderProps {
    title: string,
    subtitle?: string,
}
const Header = ({ title, subtitle}: HeaderProps) => {
   
  return (
    <Box>
      <Typography
        variant="h5"
        color="textPrimary"
      >
        {title}
      </Typography>
      <Typography 
        variant="h5"  
        color="textSecondary"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;