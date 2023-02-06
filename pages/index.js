import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import LoginBox from "../components/LoginBox";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const IndexPage = () => {
  const { user, error, isLoading } = useUser();
  return (
    <main>
      {user && (
        <>
          <NavBar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "1",
              bgcolor: "primary.secondary",
              color: "primary.main",
            }}
          >
            <Grid container spacing={2} justifyContent="space-evenly">
              <Grid item xs={12} align="center">
                <Typography variant="h3">Welcome {user.name}</Typography>
              </Grid>
              <Grid item xs={12} align="center">
                <Typography variant="p">You are logged in</Typography>
              </Grid>
              <Grid item xs={12} align="center">
                <Button
                  variant="contained"
                  color="primary"
                  href={user.email + "/consumption"}
                >
                  See your consumption
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      )}

      {!user && (
        <>
          {error && <div>{error.message}</div>}
          {isLoading && <div>Loading...</div>}
          {!isLoading && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "1",
                bgcolor: "primary.main",
                color: "primary.secondary",
              }}
            >
              <LoginBox />
            </Box>
          )}
        </>
      )}
    </main>
  );
};

export default IndexPage;
