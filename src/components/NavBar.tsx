import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar, 
  IconButton, 
  Toolbar, 
  useTheme,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import { RootState } from "../store";
import { style } from "../store/Theme/Theme.store";
import Profile from "./Profile";

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void
  setSearchClick: () => void

}
const Navbar = ({ isSidebarOpen, setIsSidebarOpen, setSearchClick }: NavbarProps) => {
  const dispatch = useDispatch();
  const theme = useTheme(); 
  const profileActivated = useSelector((state: RootState) => state.profile); 
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
      color="primary"
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon color="primary" />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.default}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
          {/*<SearchBar placeHolder={"Pesquise aqui..."}setSearchClick={()=>{}}/>*/}
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(style())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined color="primary" sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined color="primary" sx={{  fontSize: "25px" }} />
            )}
          </IconButton>
          <Profile
            name={profileActivated.profile.name}
            email={profileActivated.profile.email}            
            showLoginLogOut
          /> 
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
