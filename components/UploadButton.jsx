import { Button } from "@mui/material";
import data from "../data/consumption.json";

const UploadButton = () => {
  const newdata = JSON.stringify(
    data.map((unit) => {
      return {
        from: unit.from.toString(),
        to: unit.to.toString(),
        consumption: unit.consumption,
        unit: unit.consumptionUnit,
      };
    })
  );

  const uploadData = () => {
    fetch("/api/consumption", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newdata,
    });
  };

  return (
    <>
      <Button onClick={uploadData} variant="contained" color="primary">
        Upload Data
      </Button>
    </>
  );
};

export default UploadButton;
