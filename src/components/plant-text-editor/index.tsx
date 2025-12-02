import { Button, Input, Stack, Typography } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

type Props = {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    link: string
    setLink: Dispatch<SetStateAction<string>>;
    handleSubmit: () => void;
    error?: boolean;
}

const PlantTextEditor = ({ name, link, setName, setLink, handleSubmit, error }: Props) => {
  console.log(error);
  
    return (
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
            error={error}
            color={error ? "error" : "primary"}
          />
          <Button
            type="submit"
            disabled={!name || !link}
            onClick={handleSubmit}
          >
            <Typography>Submit</Typography>
          </Button>
        </Stack>
    )
};

export default PlantTextEditor;
