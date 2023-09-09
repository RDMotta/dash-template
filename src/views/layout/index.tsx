import React, { useState } from "react";

import { Box, useMediaQuery } from "@mui/material";
import { DashboardOutlined, AccountCircleOutlined } from "@mui/icons-material";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import { Outlet } from "react-router-dom";
import SidebarApp from "../../components/Sidebar/SidebarApp";
import Navbar from "../../components/NavBar";
import { NavItemAppProps } from "../../components/Sidebar/SideberProps"; 
import { LoginLogOutApp } from "../Login";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
 
  const navItems: NavItemAppProps[] = [
    {
      text: "Dashboard",
      router: "dashboard", 
      icon: <DashboardOutlined />,
    },
    {
      text: "Opções",
      router: "",
      icon: null,
    },
    {
      text: "Usuários",
      router: "users",
      icon: <AccountCircleOutlined />,
    }
  ];

  return ( 
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    <> 
      <AuthenticatedTemplate>
        <SidebarApp 
          isNonMobile={isNonMobile}
          drawerWidth="250px"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          navItemMenu={navItems}    
          footerMessageBar={"Salve Maria!"}      
        />    
        <Box flexGrow={1}>
          <Navbar 
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            setSearchClick={() => {}}
          />
          <Outlet />
        </Box>      
      </AuthenticatedTemplate>      
      <UnauthenticatedTemplate>
      <LoginLogOutApp/>        
      </UnauthenticatedTemplate>
    </>
  </Box>
  );
};

export default Layout;
