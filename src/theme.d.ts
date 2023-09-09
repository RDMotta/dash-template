import { PaletteColorOptions, ThemeOptions } from "@mui/material";
import React from 'react';

declare module'@mui/material/styles' {
    interface Theme { 
        style: string
    }

    interface ThemeOptions {
        style: string
    }
    interface PaletteOptions {
        neutral?: PaletteColorOptions,      
    }
}
