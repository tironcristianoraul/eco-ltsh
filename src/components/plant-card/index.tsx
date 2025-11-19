import { useEffect } from "react";
import usePlant from "../../hooks/use-plant";
import type { IPlant } from "../../hooks/use-plant/index.actions";
import { Typography } from "@mui/material";
import { StyledPlantCard } from "./index.styled";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/use-auth";

const PlantCard = ({ name, _id }: IPlant) => {
  const { qr, getQRCode } = usePlant<IPlant>();
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    getQRCode(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPlantCard
      onClick={() => {
        navigate(`/plant/${_id}`);
      }}
    >
      <Typography alignSelf="center" fontSize={25} width={"auto"}>
        {name}
      </Typography>
      <img src={qr} />
      {isLoggedIn && (
        <a style={{ alignSelf: "center" }} download={qr} href={qr}>
          {" "}
          Descarcă
        </a>
      )}
    </StyledPlantCard>
  );
};

export default PlantCard;
