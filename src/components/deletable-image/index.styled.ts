import { styled } from "@mui/material";

interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    hover?: boolean;
}

const CustomImage = styled('img', {
    shouldForwardProp: (prop: string) => !['hover'].includes(prop as string)
})<CustomImageProps>(({ hover }) => ({
    objectFit: "cover",
    borderRadius: 8,
    ...(hover && {
        filter: 'brightness(0.6)', // darkens image slightly
        transform: 'scale(1.02)',
        transition: 'all 0.3s ease',
    })
}))

export { CustomImage };