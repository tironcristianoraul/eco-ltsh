import { Box } from '@mui/material';
import LogoImg from '../../assets/ceva.jpeg';
import type { FC } from 'react';

interface LogoProps {
    width?: string;
}

const Logo: FC<LogoProps> = ({ width }) => (
    <Box
        component='img'
        sx={{ width, height: 'auto' }}
        src={LogoImg}
    />
);

export default Logo;
