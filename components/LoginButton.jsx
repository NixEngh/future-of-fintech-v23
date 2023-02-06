import { Button, Link } from "@mui/material";

const LoginButton = () => {
    return (
        <Button variant="contained" color="primary" href="/api/auth/login">
            Login
        </Button>
    );
}


export default LoginButton;