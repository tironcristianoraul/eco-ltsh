import { useState } from "react";
import { CustomImage } from "./index.styled";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface DeletableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    onDelete: () => void;
}

const DeletableImage = ({ onDelete, ...rest }: DeletableImageProps) => {
    const [hover, setHover] = useState(false);
    const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
        const imgElement = event.currentTarget;
        const portrait = imgElement.naturalHeight > imgElement.naturalWidth;
        setIsPortrait(portrait);

        // Call any onLoad passed via rest props
        if (rest.onLoad) {
            rest.onLoad(event);
        }
    };

    return (
        <Box
            position="relative"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                width: '50%',
                maxHeight: isPortrait ? 200 : 'auto', // Limit max height for portrait
                maxWidth: !isPortrait ? '100%' : '50%', // Limit max width for landscape
                overflow: 'hidden',
            }}
        >
            <CustomImage
                {...rest}
                onLoad={handleLoad}
                sx={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                }}
            />
            {hover && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.51)',
                        zIndex: 1,
                    }}
                >
                    <IconButton onClick={onDelete}>
                        <DeleteIcon color="error" fontSize='large' />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};

export default DeletableImage;
