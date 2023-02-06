import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";
import { Header } from "../components/Header";
import { LoginBox } from "../components/LoginBox";

const IndexPage = () => {
  const { user, error, isLoading } = useUser();
  return (
    <main>
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
        {false ? (
          <div>
            <Header />
            <h1>Welcome {user.name}</h1>
          </div>
        ) : (
          <LoginBox />
        )}
      </Box>
    </main>
  );
};

export default IndexPage;
