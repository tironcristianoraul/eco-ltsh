import type { FC } from 'react';
import { styled } from '@mui/material';
import { StyledButtonSG, type IStyledButtonSG } from '../../../../../../components/button/base/index.styled';

const NextButton: FC<IStyledButtonSG> = styled(StyledButtonSG as FC<IStyledButtonSG>)(({ theme }) => ({
	backgroundColor: theme?.palette.primary?.main,
	textTransform: 'none',
	overflow: 'auto',
	boxSizing: 'border-box',
	borderRadius: theme?.shape.borderRadius,
	transition: 'transform 0.3s ease',
	':hover': {
		backgroundColor: theme?.palette.common.white,
		color: theme?.palette.primary?.main,
	},
}));

export { NextButton };