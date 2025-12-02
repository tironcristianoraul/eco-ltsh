import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import usePlant from "../../hooks/use-plant";
import PlantTextEditor from "../../components/plant-text-editor";
import { useParams } from "react-router";
import type { IPlant } from "../../hooks/use-plant/index.actions";

export interface CreatePlantFields {
  name: string;
  link: string;
}

const UpdatePlant = () => {
  const { update, isError, getSingle, plant } = usePlant<IPlant>();
  const {id} = useParams();

  const [link, setLink] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    update({
      name,
      link,
    }, id as string);
    if (!isError) navigate("/post");
  };

  useEffect(() => {
    getSingle(id as string);
  }, [])

  useEffect(() => {
    if(plant){
        setLink(plant.link)
        setName(plant.name)
    }
  }, [plant])

  return (
    <Box flex={1} display="flex" flexDirection="column" height="100vh">
      <Box flex={1} display="flex" flexDirection="column" alignItems="center">
        <PlantTextEditor handleSubmit={() => handleSubmit()} link={link} name={name} setLink={setLink} setName={setName}/>
      </Box>
    </Box>
  );
};

export default UpdatePlant;
