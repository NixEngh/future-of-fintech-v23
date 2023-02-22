import NavBar from "../../components/NavBar";
import dynamic from "next/dynamic";
import { Box, Typography, Card, Divider } from "@mui/material";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import UploadButton from "../../components/UploadButton";

const ChartDataFromAPI = dynamic(
  () => import("../../components/ChartDataFromAPI"),
  {
    ssr: false,
  }
);

const Consumption = ({ user }) => {
  return (
    <>
      <NavBar />
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">Consumption overview</Typography>

        <Divider orientation="horizontal"/>

        <ChartDataFromAPI />

        <UploadButton />
      </Box>
    </>
  );
};

export default Consumption;

export const getServerSideProps = withPageAuthRequired();
