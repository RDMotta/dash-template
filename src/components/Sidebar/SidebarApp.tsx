import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FlexBetween from "../FlexBetween"; 
import { RootState } from "../../store"; 
import Profile from "../Profile";
import { SidebarAppProps } from "./SideberProps";

const SidebarApp = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
  navItemMenu,
  isVisibleProfile,
  footerMessageBar,
} : SidebarAppProps) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const profileActivated = useSelector((state: RootState) => state.profile);
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary.main,
              backgroundColor: theme.palette.background.default,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography 
                    variant="h5" 
                    color="textPrimary"
                    fontWeight="bold">
                    Dash-Robson
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItemMenu.map(({ text, router, icon }) => {
                if (!icon) {
                  return (
                    <Typography                      
                      key={text} 
                      color="textPrimary"
                      sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = router.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${router}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary.main
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.text.primary
                            : theme.palette.text.secondary,
                      }}
                    >
                      <ListItemIcon 
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.text.primary
                              : theme.palette.text.secondary,
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          
          <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  color="textPrimary"
              >
                { footerMessageBar }
              </Typography> 
            </FlexBetween> 
             
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 1rem 0 1rem"> 
              { isVisibleProfile ? ( 
                  <Profile
                    name={profileActivated.profile.name}
                    email={profileActivated.profile.email}
                    avatarURL={profileActivated.profile.avatarURL}
                    showLoginLogOut
                  />
              ) : null }            
            </FlexBetween>   
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default SidebarApp;
