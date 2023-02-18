import { Divider, Grid, Paper, Typography } from "@mui/material";
import AnimatedLogo from "./Logo";
import Button from "@mui/material/Button";

const LoginBox = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "1",
        maxHeight: "300px",
        width: "100vh",
        maxWidth: "400px",
        color: "primary.secondary",
      }}
    >
      <Grid container spacing={2} justifyContent="space-evenly">
        <Grid item xs={3.5} align="right">
          <AnimatedLogo
            viewBox="0 0 54 54"
            sx={{ width: "50px", height: "50px" }}
          />
        </Grid>

        <Grid item xs={0.5} align="center">
          <Divider orientation="vertical" />
        </Grid>

        <Grid item xs={8} align="left">
          <Typography variant="h3">Stracc</Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="p">Log in to continue</Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Button variant="contained" color="primary" href="/api/auth/login">
            Login
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginBox;
