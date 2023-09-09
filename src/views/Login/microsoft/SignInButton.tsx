import { useState } from "react";
import { useMsal } from "@azure/msal-react"; 
import Button from '@mui/material/Button';
import { loginRequest } from "../../../msal/msal-auth-config"; 
import FlexBetween from "../../../components/FlexBetween";
import { Box, Typography } from "@mui/material";

interface SignInButtonProps {
    label: string;
}

export const SignInButton = ({ label }: SignInButtonProps) => {
    const { instance } = useMsal();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleLogin = (loginType: string) => {
        setAnchorEl(null);

        if (loginType === "popup") {
            instance.loginPopup(loginRequest);
        } else if (loginType === "redirect") {
            instance.loginRedirect(loginRequest);
        }
    }

    return (
        <Box>
           <Button onClick={() => handleLogin("popup")} key="popup">
                <FlexBetween textTransform="none" gap="1rem">
                    <img 
                        src={`https://www.microsoft.com/favicon.ico?v2`} 
                        alt={`Sign in with microsoft`} 
                        height={30}
                        width={30}/>
                    <Typography
                        fontWeight="bold"
                        fontSize="0.9rem"
                        color="textPrimary"
                    >
                    { label }
                    </Typography>
                </FlexBetween>
            </Button>
        </Box>
    )
};