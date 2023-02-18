import {
  Box,
  Button,
  Grid,
  Typography,
  Stack,
  Avatar,
  Divider,
} from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";

const Dashboard = () => {
  const { user, error, isLoading } = useUser();

  const pages = ["consumption", "providers"];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          height: "100vh",
          width: "1",
          bgcolor: "primary.secondary",
          color: "primary.main",
          p: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="space-evenly"
          paddingTop={4}
        >
          <Grid item xs={12} align="center">
            <Stack spacing={2} direction="row" justifyContent="center">
              <Typography variant="h3">
                Welcome {user.name || user.nickname}
              </Typography>
              <Avatar alt={user.name || user.nickname} src={user.picture} />
            </Stack>
          </Grid>

          <Stack item xs={12} align="center" spacing={2} divider={<Divider />}>
            {pages.map((page) => (
              <Button
                size="large"
                variant="contained"
                color="primary"
                href={`/${page}`}
                height="100%"
              >
                {page}
              </Button>
            ))}
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
