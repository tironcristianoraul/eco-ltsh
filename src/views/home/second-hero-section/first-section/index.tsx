import React from 'react';
import { HeroSectionWrapper, ImageWrapper } from '../index.styles';
import sectionFeatures from '../data/first-section-features.json';
import FloatingImage from '../components/FloatingImage';
import imagesSVG from '../../../../assets/svg/images.json';
import type { JSX } from '@emotion/react/jsx-runtime';
import Flex from '../../../../components/wrapper/flex';
import { SectionTitleSG } from '../../../../components/section-title';
import FeatureItem from '../../../../components/feature-item';
import { uuid } from '../../../../utils/functions';

const images = [{
	top: 0,
	left: 70,
	above: true,
	src: imagesSVG?.second_hero_1st
}, {
	top: 100,
	left: 0,
	above: false,
	src: imagesSVG?.second_hero_2nd
}];

const FirstSection: React.FC = (): JSX.Element => (
	<HeroSectionWrapper>
		<Flex width='100%' column alignItems='flex-start' justifyCenter gap={5} maxWidth='550px'>
			<SectionTitleSG textAlign='left'>
				Publish to all your socials. With a single click.
			</SectionTitleSG>
			<Flex width='100%' gap={5}>
				{sectionFeatures.map((item) => (
					<FeatureItem fullWidth key={uuid()} {...item} />
				))}
			</Flex>
		</Flex>
		<ImageWrapper>
			{images.map(({ src, ...rest }) => (
				<FloatingImage key={`${uuid()}-first-image`} src={src} {...rest} />
			))}
		</ImageWrapper>
	</HeroSectionWrapper>
);

export default FirstSection;
