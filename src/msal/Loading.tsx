import { Typography } from "@mui/material";

interface LoadingProps {
    message: string;
}

export const Loading = ({ message }: LoadingProps) => {
    return <Typography variant="h6">{ message }</Typography>
}