
import { Box, styled } from '@mui/material';

export const SignInBox = styled(Box)(() => ({

    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
    width: '25vw' ,
    borderRadius: '12px',
    backgroundColor: 'rgba(190, 232, 174, 0.6)',
    backdropFilter: 'blur(5px)',
    boxShadow: '0 4px 20px (0, 0, 0, 0.2',

}));