import type { FC } from 'react';
import { styled } from '@mui/material';
import type { ButtonPropsSG } from '../../../../../components/button/base/index.interfaces';
import { ButtonSG } from '../../../../../components/button';

const StyledBrowseButton: FC<ButtonPropsSG> = styled(ButtonSG)<ButtonPropsSG>(
	({ theme }) => ({
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
		fontWeight: theme.typography.fontWeightBold,
		fontSize: '18px',
		padding: theme?.spacing(2, 5),
		width: 'auto',
		height: 'auto',
		borderRadius: theme.spacing(5),
		':hover': {
			backgroundColor: theme.palette.primary.main,
			color: theme.palette.common.white,
		}
	}));

export { StyledBrowseButton };