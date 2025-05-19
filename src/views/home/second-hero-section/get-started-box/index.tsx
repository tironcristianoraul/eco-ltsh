import { Box } from '@mui/material';
import { HeadingText } from '../../components/hero-details/index.styled';
import { GetStartedBoxContent } from './index.styled';
import type { GetStartedBoxDecorations } from '../../../../components/get-started-box/index.interfaces';
import type { JSX } from '@emotion/react/jsx-runtime';
import SectionWrapperSG from '../../../../components/section-wrapper';
import GetStartedBox from '../../../../components/get-started-box';
import { uuid } from '../../../../utils/functions';
import GetStartedButton from '../../../../components/buttons/get-started-button';

const dots: GetStartedBoxDecorations[] = [{
	top: '-20%',
	left: '10%',
	type: 'dots'
}, {
	top: '-15%',
	left: '70%',
	type: 'dots'
}, {
	top: '80%',
	left: '40%',
	type: 'dots'
}, {
	top: '90%',
	left: '90%',
	type: 'dots'
}];

const texts = ['Ready to get started?', 'Create an account for free!'];

const FirstGetStartedBox: React.FC = (): JSX.Element => (
	<SectionWrapperSG sectionName='get-started-section' half>
		<GetStartedBox decorations={dots}>
			<GetStartedBoxContent>
				<Box>
					{texts.map((item) => (
						<HeadingText key={uuid()} color='#fff'>{item}</HeadingText>
					))}
				</Box>
				<Box>
					<GetStartedButton white />
				</Box>
			</GetStartedBoxContent>
		</GetStartedBox>
	</SectionWrapperSG>

);

export default FirstGetStartedBox;