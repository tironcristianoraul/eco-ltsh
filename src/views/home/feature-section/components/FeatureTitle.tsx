import type { FC } from 'react';
import { SectionBadgeSG } from '../../../../components/section-badge';
import { SectionTitleSG } from '../../../../components/section-title';
import { SectionTitleDistinctSG } from '../../../../components/section-title/index.styled';
import Flex from '../../../../components/wrapper/flex';

const FeatureTitle: FC = () => (
	<>
		<SectionBadgeSG>Features</SectionBadgeSG>
		<Flex column>
			<SectionTitleSG>
				Advanced features{' '}
				<SectionTitleDistinctSG>professional</SectionTitleDistinctSG>
			</SectionTitleSG>
			<SectionTitleSG>marketers will love.</SectionTitleSG>
		</Flex>
	</>
);
export default FeatureTitle;
