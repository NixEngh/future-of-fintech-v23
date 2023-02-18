import NavBar from "../../components/NavBar";
import { Paper, Box, Typography, Divider, Stack } from "@mui/material";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState, useEffect } from "react";

async function fetchData() {
  return await fetch("/api/providers").then((res) => res.json());
}

const Providers = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      <NavBar />
      <Box
        paddingTop={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Stack spacing={2}>
          <Typography variant="h1">Providers</Typography>
          {data.map((provider) => (
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "1",
                minHeight: "20vh",
                width: "100vh",
                maxWidth: "400px",
                color: "primary.secondary",
              }}
            >
              <Typography variant="h3">{provider.name}</Typography>
              {provider.PricingModel.map((pricingModel) => (
                <Box>
                  <Typography variant="h5">
                    Pricing model: {pricingModel.name}
                  </Typography>
                  {pricingModel.PricingParameter.map((pricingParameter) => (
                    <>
                      <Typography variant="p">
                        {pricingParameter.name}: {pricingParameter.value}
                      </Typography>
                      <Divider />
                    </>
                  ))}
                </Box>
              ))}
              {/* <Typography variant="p">{provider.pricingModel.name}</Typography>

            <Typography variant="p">{provider.monthlyFee}</Typography> */}
            </Paper>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default Providers;

export const getServerSideProps = withPageAuthRequired();
