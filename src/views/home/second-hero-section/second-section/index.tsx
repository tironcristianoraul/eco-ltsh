import { Typography, useTheme } from '@mui/material';
import { ImageWrapper, HeroSectionWrapper } from '../index.styles';
import cards from '../data/cards.json';
import aiFeatures from '../data/ai-features.json';
import SecondSectionCard from '../components/second-section-card';
import FloatingImage from '../components/FloatingImage';
import imagesSVG from '../../../../assets/svg/images.json';
import type { JSX } from '@emotion/react/jsx-runtime';
import { uuid } from '../../../../utils/functions';
import Flex from '../../../../components/wrapper/flex';
import { SectionTitleSG } from '../../../../components/section-title';
import FeatureItem from '../../../../components/feature-item';

const images = [{
	top: 100,
	left: 70,
	above: true,
	src: imagesSVG?.second_hero_3nd
}, {
	top: 0,
	left: 0,
	above: false,
	src: imagesSVG?.second_hero_4nd
}];

const SecondSection: React.FC = (): JSX.Element => {

	const theme = useTheme();

	return (
		<HeroSectionWrapper reverse>
			<ImageWrapper>
				{images.map(({ src, ...rest }) => (
					<FloatingImage key={`${uuid()}-second-image`} src={src} {...rest} />
				))}
			</ImageWrapper>
			<Flex column alignItems='flex-start' justifyCenter gap={{ xs: 4, md: 2 }} maxWidth='550px'>
				<SectionTitleSG textAlign='left'>
					Our AI Writing Assistant is here to help you!
				</SectionTitleSG>
				<Typography color={theme?.palette?.text?.secondary}>
					Our AI Writing Assistant will help you come up with ideas,
					improve your content and write more engaging posts.
				</Typography>
				<Flex rowGap={2} flexWrap='wrap' justifyBetween maxWidth='550px'>
					{aiFeatures.map((item) => (
						<FeatureItem key={uuid()} {...item} />
					))}
				</Flex>
				<Flex flexWrap='wrap' width='100%' gap={5}>
					{cards.map((item) => (
						<SecondSectionCard key={uuid()} {...item} />
					))}
				</Flex>
			</Flex>
		</HeroSectionWrapper>
	);
};

export default SecondSection;