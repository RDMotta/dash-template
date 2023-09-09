import React, { useMemo } from 'react'; 
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ptBR } from '@mui/material/locale';
import { themeSettings } from "./theme"; 
import { RootState } from './store';
import RoutesApp from './routes';
import "./service/axios-config"; 
// MSAL imports

import { IPublicClientApplication } from "@azure/msal-browser";


type AppProps = {
  publicClientApplication: IPublicClientApplication;
};

function App({ publicClientApplication }: AppProps) {
  const styleMode = useSelector((state: RootState) => state.theme);
  const theme = useMemo(() => createTheme(themeSettings(styleMode.styleTheme), ptBR), [styleMode]);

  return (     
    <ThemeProvider theme={theme}>     
        <BrowserRouter> 
            <CssBaseline/>               
            <RoutesApp instance={publicClientApplication}/>
        </BrowserRouter> 
    </ThemeProvider>
  );
}

export default App;
