import styles from "./Chart.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";
import { useEffect, useState } from "react";
// import mui components
import { Typography, Stack, Divider, Chip, Button } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";
import dynamic from "next/dynamic";


const ChartDataFromFile = dynamic(() => import("./ChartDataFromFile"), {
  ssr: false,
});



// here we fetch data from the API
async function fetchData() {
  return await fetch("/api/consumption").then((res) => res.json());
}

export default function ChartDataFromAPI() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  const { user } = useUser();

  if (!data) return <div className={styles.container}>Loading...</div>;
  const convertedData = data.map((item) => {
    // convert from and to, to hours
    item.from = new Date(item.from).getHours();
    item.to = new Date(item.to).getHours();
    return {
      period: `${item.from} - ${item.to}`,
      consumption: item.consumption,
      consumptionUnit: item.unit,
    };
  });

  if (convertedData.length === 0)
    return (
      <Stack spacing={2} direction="column" alignItems="center" >
        <Typography variant="h5" >
          No data for this user
        </Typography>
        
        <Divider width="100%">
          <Chip label="Example Data" />
        </Divider>
        <ChartDataFromFile />
        <Typography variant="h5" >
          The plan is to be able to upload data:
        </Typography>
        <Button variant="contained" color="primary">
          Upload data
        </Button>


      </Stack>
    );

  return (
    <div className={styles.container}>
      <LineChart id="123" width={1000} height={400} data={convertedData}>
        <XAxis dataKey="period">
          <Label value="Period" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Consumption (KWh)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
