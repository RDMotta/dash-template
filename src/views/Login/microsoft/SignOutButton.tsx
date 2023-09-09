import { useState } from "react";
import { useMsal } from "@azure/msal-react";
import IconButton from '@mui/material/IconButton'; 
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ArrowDropDownOutlined } from "@mui/icons-material";

export const SignOutButton = () => {
    const { instance } = useMsal();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleLogout = (logoutType: string) => {
        setAnchorEl(null);

        if (logoutType === "popup") { 
            instance.logoutPopup({
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect();
        }
    }

    return (
        <div>
             
            <IconButton
                onClick={(event) => setAnchorEl(event.currentTarget)}
                color="inherit"
            >
              <ArrowDropDownOutlined
                color="primary"
                sx={{ fontSize: "25px" }}
              />
            </IconButton>
            
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                <MenuItem 
                    onClick={() => handleLogout("popup")} 
                    key="logoutPopup"
                >
                  Logout using Popup
                </MenuItem>
            </Menu>
        </div>
    )
};