
import type { FC } from 'react';
import { Divider, type DividerProps, styled } from '@mui/material';

const SectionDivider: FC<DividerProps> = styled(Divider)(() => ({
	width: '100%',
	maxWidth: '1200px'
}));

export { SectionDivider };