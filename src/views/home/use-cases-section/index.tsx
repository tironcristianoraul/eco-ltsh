import { useState, type JSX } from 'react';
import UseCasesTabs from './tabs';
import UseCaseCard from './card';
import cards from './data/cards.json';
import { UseCaseSectionWrapper } from './index.styled';
import CasesTitle from './cases-title';
import SectionWrapperSG from '../../../components/section-wrapper';
import Flex from '../../../components/wrapper/flex';

const UseCasesSection: React.FC = (): JSX.Element => {

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	return (
		<SectionWrapperSG sectionName='use-cases-section'>
			<CasesTitle />
			<UseCaseSectionWrapper>
				<Flex width='100%'>
					<UseCaseCard currentIndex={currentIndex} {...cards[currentIndex]} />
				</Flex>
				<UseCasesTabs currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
			</UseCaseSectionWrapper>
		</SectionWrapperSG>
	);
};

export default UseCasesSection;