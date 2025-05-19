import { Box, type BoxProps, styled } from '@mui/material';
import type { FC } from 'react';

const BottomGetStartedCardContent: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	height: '100%',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	}
}));

const ImageWrapper: FC<BoxProps> = styled(Box as FC<BoxProps>)(({ theme }) => ({
	display: 'grid',
	placeItems: 'center',
	width: '100%',
	maxWidth: theme.spacing(50),
	position: 'relative',
	height: theme.spacing(75),
	justifySelf: 'center',
	[theme.breakpoints.down('sm')]: {
		maxWidth: theme.spacing(44),
		height: theme.spacing(60),
	},
}));

const TextSection: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: theme.spacing(5),
}));

const BottomSectionImageWrapper: FC<BoxProps> = styled(ImageWrapper)(({ theme }) => ({
	[theme.breakpoints.down('md')]: {
		height: theme.spacing(50),
	},
	[theme.breakpoints.down(500)]: {
		height: theme.spacing(30)
	},
	[theme.breakpoints.down(400)]: {
		height: theme.spacing(20)
	}
}));

export { BottomGetStartedCardContent, TextSection, BottomSectionImageWrapper };