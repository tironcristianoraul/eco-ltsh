import {
  Box,
  ButtonBase,
  Typography,
  type ButtonBaseProps,
} from "@mui/material";

import { useEffect, useState, type FC } from "react";
import CardBase from "./index.styled";

type Props = {
  image?: string;
  title?: string;
};

const Card: FC<ButtonBaseProps & Props> = ({
  image,
  title,
  ...rest
}: Props & ButtonBaseProps) => {
  const [portrait, setPortrait] = useState<boolean>();

  useEffect(() => {
    if (!image) return;
    const img = new Image();
    img.onload = () => {
      setPortrait(img.width < img.height);
    };
    img.onerror = () => {
      console.error("Failed to load image");
    };

    img.src = image;
  }, [image]);

  return (
    <CardBase>
      <ButtonBase
        {...rest}
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "secondary.light",
          flex: 1,
        }}
      >
        <Box sx={{ width: "40%", height: "100%" }}>
          {image && (
            <img
              crossOrigin="anonymous"
              src={image}
              style={{
                width: portrait ? "auto" : "40%",
                height: portrait ? "100%" : "auto",
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Typography fontSize={32}>{title}</Typography>
        </Box>
      </ButtonBase>
    </CardBase>
  );
};

export default Card;
