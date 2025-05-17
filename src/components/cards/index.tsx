import { Box, ButtonBase, Typography, type ButtonBaseProps } from "@mui/material";

import type { FC } from "react";
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
  return (
    <CardBase>
      <ButtonBase
        {...rest}
        sx={{
          minWidth: "300px",
          maxWidth: "300px",
          maxHeight: "400px",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          // backgroundColor: "secondary.light",
          backgroundSize: "cover"
        }}
      >
        {image && <img src={image} height={400 / 2} width="400"/>}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
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