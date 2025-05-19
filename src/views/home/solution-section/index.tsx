import React, { type JSX } from 'react';
import { Typography, useTheme } from '@mui/material';
import SolutionCard from './card';
import SolutionsCards from './data/solutions.json';
import { SolutionWrapper } from './index.styled';
import SectionWrapperSG from '../../../components/section-wrapper';
import Flex from '../../../components/wrapper/flex';
import GetStartedButton from '../../../components/buttons/get-started-button';
import { uuid } from '../../../utils/functions';
import { SectionBadgeSG } from '../../../components/section-badge';
import { SectionTitleDistinctSG } from '../../../components/section-title/index.styled';
import { SectionTitleSG } from '../../../components/section-title';

export interface ISolutionCard {
	title: string,
	description: string,
	icon: string
}

const SolutionSection: React.FC = (): JSX.Element => {
	const theme = useTheme();
	return (
		<SectionWrapperSG sectionName='solutions-section' column>
			<Flex column maxWidth={theme.spacing(62)} gap={3}>
				<SectionBadgeSG variant='h3'>Solution</SectionBadgeSG>
				<SectionTitleSG>
					One-stop platform - everything you need to {' '}
					<SectionTitleDistinctSG>grow on social</SectionTitleDistinctSG>.
				</SectionTitleSG>
				<Typography textAlign='center'>
					We give you everything you need to build a dedicated fanbase,
					nurture your audience, create leads, and grow your business.
				</Typography>
			</Flex>
			<SolutionWrapper>
				<Flex flexWrap="wrap" justifyCenter maxWidth={theme.spacing(145)}>
					{SolutionsCards.map((card: ISolutionCard): JSX.Element => (
						<SolutionCard key={`${uuid()}-solution-card`} {...card} />
					))}
				</Flex>
			</SolutionWrapper>
			<GetStartedButton onClick={(): void => {
				window.location.href = 'https://app.socialgod.shop/auth/sign-in';
			}} />
		</SectionWrapperSG >
	);
};

export default SolutionSection;