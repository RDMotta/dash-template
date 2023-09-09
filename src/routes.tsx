import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Layout from "./views/layout";  
import Dashboard from './views/Dashboad';
import Users from './views/users/Users';

import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { CustomNavigationClient } from "./msal/utils/CustomNavigationClient";

type MsalProviderProps = {
  instance: IPublicClientApplication;
};

const RoutesApp = ({ instance }: MsalProviderProps) => {
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  instance.setNavigationClient(navigationClient);

  return (
      <MsalProvider instance={ instance }>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} /> 
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/users" element={<Users/>} />
          </Route>
        </Routes>
      </MsalProvider>
    );
}

export default RoutesApp;