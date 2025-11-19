import { useEffect } from "react";
import usePlant from "../../hooks/use-plant";
import type { IPlant } from "../../hooks/use-plant/index.actions";
import PlantCard from "../../components/plant-card";
import { Box } from "@mui/material";

const Plants = () => {
  const { plant, getAll } = usePlant<IPlant[]>();

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Box display="flex">
      {plant.map((e) => (
        <PlantCard name={e.name} _id={e._id} link={e.link} />
      ))}
    </Box>
  );
};

export default Plants;
