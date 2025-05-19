
import { Box, styled, Input, Typography } from '@mui/material';

export const SignInBox = styled(Box)(({theme}) => ({

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
    boxShadow: '0 4px 20px (0, 0, 0, 0.3)',
    [theme.breakpoints.down("sm")]: {width:"75vw"},
    [theme.breakpoints.down("md")]: {width:"50vw"}, // Japanese Tech No. 987: 切腹神
    [theme.breakpoints.down("lg")]: {width:"45vw"}
}));


export const SignInInfo = styled(Input)(() => ({
    backgroundColor: 'rgba(196, 224, 186, 0.6)',
    backdropFilter: 'blur(5px)',
    borderRadius: '12px',
    padding: 4,
    paddingLeft: 4,
}));

export const EcoLtshLogo = styled(Typography)(() => ({
    color: '#37871a'
}));