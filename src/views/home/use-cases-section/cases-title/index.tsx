import type { FC } from 'react';
import { useTheme } from '@mui/material';
import Flex from '../../../../components/wrapper/flex';
import { SectionBadgeSG } from '../../../../components/section-badge';
import { SectionTitleSG } from '../../../../components/section-title';
import { SectionTitleDistinctSG } from '../../../../components/section-title/index.styled';

const CasesTitle: FC = () => {
	const theme = useTheme();

	return (
		<Flex justifyCenter maxWidth={theme.spacing(62)} gap={3}>
			<SectionBadgeSG >Use Cases</SectionBadgeSG>
			<SectionTitleSG >
				<SectionTitleDistinctSG>Much more</SectionTitleDistinctSG>
				{' '} than just a simple scheduler
			</SectionTitleSG>
		</Flex>
	);
};

export default CasesTitle;