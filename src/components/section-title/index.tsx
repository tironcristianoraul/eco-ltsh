import type { FC } from 'react';
import type { TypographyProps } from '@mui/material';
import { SectionTitleTypho } from './index.styled';

const SectionTitleSG: FC<TypographyProps> = ({
	variant = 'h4',
	textAlign = 'center',
	...props
}: TypographyProps): React.ReactElement =>
	<SectionTitleTypho variant={variant} textAlign={textAlign} {...props} />;

export { SectionTitleSG };