import { Box, type BoxProps, styled } from '@mui/material';
import type { FC } from 'react';
import type { CardPropsSG } from '../card/base';
import CardSG from '../card/base';

const PriceCardContent: FC<BoxProps> = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
	height: '100%',
	textAlign: 'center',
	gap: theme.spacing(2)
}));

const StyledPriceCard: FC<CardPropsSG> = styled(CardSG)(({ theme }) => ({
	height: `${theme.spacing(43)}!important`,
	minWidth: `${theme.spacing(31)}!important`,
	width: `${theme.spacing(31)}!important`,
}));

export { PriceCardContent, StyledPriceCard };