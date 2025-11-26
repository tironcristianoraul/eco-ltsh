import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { StyledCard, StyledCardMedia } from "./index.styled";

interface ActivityCardProps {
  name?: string;
  category?: string;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

 const ActivityCard = (props: ActivityCardProps) => {
    const { name = "Activity Name", category = "General", imageUrl = "", onClick, className } = props;
  const [isPortrait, setIsPortrait] = useState(false);
  
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setIsPortrait(img.naturalHeight > img.naturalWidth);
  };

  return (
    <StyledCard className={className} onClick={onClick}>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <StyledCardMedia
          component="img"
          className="card-image"
          sx={{ height: isPortrait ? 256 : 192 }}
          src={imageUrl}
          onLoad={handleImageLoad}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80";
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
          }}
        >
          <Chip
            label={category}
            sx={{
              backgroundColor: "#d1fae5",
              fontWeight: 500,
              backdropFilter: "blur(8px)",
              boxShadow: 2,
            }}
          />
        </Box>
      </Box>
      <CardContent sx={{ p: 2.5 }}>
        <Typography
          className="card-title"
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 600,
            color: "#0f172a",
            transition: "color 0.3s ease",
          }}
        >
          {name}
        </Typography>
      </CardContent>
    </StyledCard>
  );
}

export default ActivityCard;