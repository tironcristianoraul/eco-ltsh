import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import usePlant from "../../hooks/use-plant";

export interface CreatePlantFields {
  name: string;
  link: string;
}

const AddPlant = () => {
  const { create, isError } = usePlant();

  const [link, setLink] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    create({
      name,
      link,
    });
    if (!isError) navigate("/post");
  };

  return (
    <Box flex={1} display="flex" flexDirection="column" height="100vh">
      <Box flex={1} display="flex" flexDirection="column" alignItems="center">
        <Stack gap={2}>
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Nume Plantă"
            fullWidth
          />
          <Input
            onChange={(e) => setLink(e.target.value)}
            value={link}
            placeholder="Link Wikipedia"
            fullWidth
          />
          <Button
            type="submit"
            disabled={!name || !link}
            onClick={handleSubmit}
          >
            <Typography>Submit</Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddPlant;
