import { useEffect } from "react";
import usePlant from "../../hooks/use-plant";
import type { IPlant } from "../../hooks/use-plant/index.actions";
import PlantCard from "../../components/plant-card";
import { Masonry } from "@mui/lab";

const Plants = () => {
  const { plant, getAll } = usePlant<IPlant[]>();

  useEffect(() => {
    getAll();
  }, []);

  return (
      <Masonry columns={{ xs: 1, sm: 3, md: 4, lg: 5 }} spacing={2} sx={{ width: "95%", marginTop: "20px" }}>
      {plant.map((e) => (
        <PlantCard key={`${e._id}`} name={e.name} _id={e._id} link={e.link} />
      ))}
    </Masonry>
  );
};

export default Plants;
