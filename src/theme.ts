import { colors, ThemeOptions } from "@mui/material"; 
 
export const themeSettings = (modeTheme: string): ThemeOptions => {
  return { 
    palette: {
      ...(modeTheme === 'dark'
      ? {
        style: 'dark',
        mode: 'dark',
        primary: {
          main: '#5893df',
        },
        secondary: {
          main: '#2ec5d3',
        },
        background: {
          default: '#3d3d3d',
          paper: '#5a5d60', 
        },
      }
      : {
        style: modeTheme,
        mode: 'light',
        primary: {
          main: '#5893df',
        },
        secondary: {
          main: '#2ec5d3',
        },
        background: {
          default: '#E5E8E8',
          paper: '#e3e7ec', 
        },
      })
    }
  };
}; 
