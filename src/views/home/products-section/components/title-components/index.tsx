import type { FC } from 'react';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';
import { ServicesSubtitle } from './index.styled';
import { NextButton } from './move-button/index.styled';
import Flex from '../../../../../components/wrapper/flex';
import { SectionTitleSG } from '../../../../../components/section-title';

interface DragSG {
	isDragged: boolean
	prevPageX: number
	prevScrollLeft: number
	position: number
};

interface ITitleProps {
	isDragged: DragSG
	dataLength: number
	handleNext: (action: 'prev' | 'next') => void
}

const TitleComponent: FC<ITitleProps> = (props: ITitleProps) => {
	const { isDragged, dataLength, handleNext } = props;
	const theme = useTheme();
	const matchDownLG = useMediaQuery<string>(theme.breakpoints.down('lg'));

	return (
		<Flex width='100%' justifyCenter alignItems='center' gap={{ xs: 2, sm: 5 }}>
			<Flex column>
				<SectionTitleSG>Discover our services</SectionTitleSG>
				<ServicesSubtitle>
					Explore our diverse services !
				</ServicesSubtitle>
			</Flex>
			<Flex gap={3}>
				<NextButton aria-labelledby='previous-slide' aria-label='previous-slide' title='previous'
					shadow hover variant='contained'
					disabled={isDragged?.prevScrollLeft > (matchDownLG ? -10 : 330)}
					sx={{ minWidth: '60px' }}
					onClick={(): void => handleNext('prev')}><ArrowBack /></NextButton>
				<NextButton aria-labelledby='next-slide' aria-label='next-slide' title='next'
					shadow hover variant='contained'
					disabled={isDragged?.prevScrollLeft <
						-((dataLength || 0) * 330 - 700)}
					sx={{ minWidth: '60px' }}
					onClick={(): void => handleNext('next')}><ArrowForward /></NextButton>
			</Flex>
		</Flex>
	);
};

export default TitleComponent;