import { Box } from '@mui/material';
import ReviewsSlideshow from './reviews-slideshow';
import { TestimonialsContent, TestimonialsWrapper } from './index.styled';
import type { JSX } from 'react';
import SectionWrapperSG from '../../../components/section-wrapper';
import { SectionTitleSG } from '../../../components/section-title';
import Flex from '../../../components/wrapper/flex';
import GetStartedButton from '../../../components/buttons/get-started-button';

const TestimonialSection: React.FC = (): JSX.Element => (
	<SectionWrapperSG sectionName='testimonials-section' column half>
		<TestimonialsWrapper>
			<TestimonialsContent >
				<Box>
					<SectionTitleSG>
						Don&#39;t take our word for it.
					</SectionTitleSG>
					<SectionTitleSG >
						See what our clients say.
					</SectionTitleSG>
				</Box>
				<Flex>
					<GetStartedButton />
				</Flex>
			</TestimonialsContent>
			<ReviewsSlideshow />
		</TestimonialsWrapper>
	</SectionWrapperSG>
);

export default TestimonialSection;