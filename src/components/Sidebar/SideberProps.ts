import React from "react";  

export interface NavItemAppProps {
    text: string;
    router: string;
    icon?: JSX.Element | null;  
};

export interface SidebarAppProps {
    drawerWidth: string;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
    isNonMobile: boolean;
    navItemMenu: Array<NavItemAppProps>;
    isVisibleProfile?: boolean | false;
    footerMessageBar?: string;
}
 