import type { FC } from 'react';
import { Box, type BoxProps, styled } from '@mui/material';

interface CustBoxProps extends BoxProps {
	isDrawerOpen: boolean;
}

const Wrapper: FC<CustBoxProps> = styled(Box as FC<CustBoxProps>, {
	shouldForwardProp: (prop: string) => prop !== 'isDrawerOpen',
})(({ theme, isDrawerOpen }) => ({
	marginLeft: isDrawerOpen ? '240px' : '64px',
	padding: '30px',
	paddingTop: '94px',
	overflowY: 'auto',
	width: 'calc(100% - 64px)',
	height: '100%',
	transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	})
}));

export default Wrapper;
