import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import LoginBox from "../components/LoginBox";
import Dashboard from "../components/Dashboard";


const IndexPage = () => {
  const { user, error, isLoading } = useUser();
  return (
    <main>
      {user ? (
        <>
          <NavBar />
          <Dashboard />
          
        </>
      ):(
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
