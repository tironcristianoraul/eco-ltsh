import type { FC } from 'react';
import { Typography, type TypographyProps, styled } from '@mui/material';

const ReviewCardText: FC<TypographyProps> = styled(Typography as FC<TypographyProps>)(({ theme }) => ({
	flexWrap: 'wrap',
	wordBreak: 'break-all',
	color: theme?.palette?.text?.secondary
}));

export { ReviewCardText };