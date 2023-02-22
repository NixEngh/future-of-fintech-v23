import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import NavBar from "../components/NavBar";
import LoginBox from "../components/LoginBox";
import Dashboard from "../components/Dashboard";
import { useEffect } from "react";

const fetchUser = async () => {
  return await fetch("/api/user").then((res) => res.json());
};

const createUser = () => {
  fetch("/api/user", {
    method: "POST",
    
  });
  return;
};

const IndexPage = () => {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      const fetchedUser = User().catch(console.error);
      if (fetchedUser.length === 0) {
        createUser();
      }
    }
  }, [user]);

  return (
    <main>
      {user ? (
        <>
          <NavBar />
          <Dashboard />
        </>
      ) : (
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
