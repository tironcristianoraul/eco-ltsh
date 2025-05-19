import { Box } from '@mui/material';
import type { GetStartedBoxDecorations, GetStartedBoxDecorationsType, GetStartedBoxProps } from './index.interfaces';
import { StyledGetStartedBox } from './index.styled';
import images from '../../assets/svg/images.json';
import type { JSX } from '@emotion/react/jsx-runtime';
import { AbsoluteImage } from '../../views/home/second-hero-section/index.styles';
import { uuid } from '../../utils/functions';

const handleImage = (type: GetStartedBoxDecorationsType): string => {
	switch (type) {
		case 'dots': {
			return images?.dots;
		}
		default: {
			return '';
		}
	}
};

const GetStartedBox: React.FC<GetStartedBoxProps> = ({ decorations, children, big = false, ...props }): JSX.Element => (
	<StyledGetStartedBox decorations={decorations} big={big} {...props}>
		<Box position='relative' width='100%' height='100%' margin='0 auto' >
			{decorations && decorations.map(({ top, left, type }: GetStartedBoxDecorations): JSX.Element => (
				<AbsoluteImage alt='decorations' key={`${uuid()}-dots`} top={top}
					left={left} src={handleImage(type)} />
			))}
			{children}
		</Box>
	</StyledGetStartedBox>
);

export default GetStartedBox;