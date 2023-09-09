import React from "react";

import { Container } from "@mui/material";
import Header from "../components/Header";

import { ProfileView } from "./Login/Profile";

const Dashboard = () => {   
         
    return ( 
        <Container maxWidth="lg">   
           <Header title="DashBoard"/>    
           <ProfileView/>
        </Container>
    );
  };
  
  export default Dashboard;