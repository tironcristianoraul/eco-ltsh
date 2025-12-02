import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import usePlant from "../../hooks/use-plant";
import PlantTextEditor from "../../components/plant-text-editor";

export interface CreatePlantFields {
  name: string;
  link: string;
}

const AddPlant = () => {
  const { create, isError } = usePlant();

  const [link, setLink] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if(/^https?:\/\/(?:[a-z\-]+(?:\.m)?|m)\.wikipedia\.org\/wiki\/[^#\s?]+(?:[?#][^\s]*)?$/.test(link)) {
      create({
        name,
        link,
      });
      if (!isError) navigate("/plants");
    } else {
      setError(true);
    }
  };

  return (
      <Box flex={1} display="flex" flexDirection="column" alignItems="center" mt={10}>
        <PlantTextEditor handleSubmit={() => handleSubmit()} link={link} name={name} setLink={setLink} setName={setName} error={error} />
      </Box>
  );
};

export default AddPlant;
