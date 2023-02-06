import { Button, Link } from "@mui/material"


//q: what's wrong with this code?

const LoginButton = () => {
    return (
        <Button variant="contained" color="primary" href="/api/auth/login">
            Login
        </Button>
    );
}


export default LoginButton;