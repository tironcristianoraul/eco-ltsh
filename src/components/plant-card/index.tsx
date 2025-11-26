import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DownloadIcon from "@mui/icons-material/Download";
import { styled } from "@mui/material/styles";
import type { IPlant } from "../../hooks/use-plant/index.actions";
import usePlant from "../../hooks/use-plant";
import useAuth from "../../hooks/use-auth";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export interface PlantSpeciesCardProps {
  name?: string;
  qrCodeBase64?: string;
  className?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#ffffff",
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[8],
  },
}));

const PlantCard = ({ name, _id}: IPlant) => {

  const { qr, getQRCode } = usePlant<IPlant>();
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    getQRCode(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <StyledCard onClick={() => {
        navigate(`/plant/${_id}`);
      }}>
      <CardContent sx={{ p: 3 }}>
        {/* Plant Name */}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 600,
            color: "#166534",
            mb: 3,
            textAlign: "center",
          }}
        >
          {name}
        </Typography>

        {/* QR Code */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
            p: 2,
            bgcolor: "#f8fafc",
            borderRadius: 2,
          }}
        >
          <img
            src={qr}
            alt={`QR Code for ${name}`}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* Download Button */}
        {isLoggedIn && (
        <a
          href={qr}
          download={`${name.replace(/\s+/g, "-")}-QR.png`}
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            fullWidth
            startIcon={<DownloadIcon />}
            sx={{
              bgcolor: "#16a34a",
              "&:hover": {
                bgcolor: "#15803d",
              },
              textTransform: "none",
              py: 1.5,
              fontWeight: 600,
            }}
          >
            Download QR Code
          </Button>
        </a>
        )}
      </CardContent>
    </StyledCard>
  );
}

export default PlantCard;