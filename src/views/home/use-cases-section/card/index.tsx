import { Box, Fade } from '@mui/material';
import { useEffect, useState, type JSX } from 'react';
import { StyledUseCaseCard, StyledUseCaseImage, UseCardContent } from './index.styled';
import TextSection from './text-section';
import Flex from '../../../../components/wrapper/flex';

interface IProps {
	icon: string,
	title: string,
	description: string,
	replaces: string[],
	image: string,
	currentIndex: number
};

const defaultValues = {
	icon: '',
	title: '',
	description: '',
	replaces: [''],
	image: ''
};

const UseCaseCard: React.FC<IProps> = ({ currentIndex, ...props }): JSX.Element => {
	const [fade, setFade] = useState<boolean>(true);
	const [data, setData] = useState<Omit<IProps, 'currentIndex'>>(defaultValues);
	const { image, ...rest } = data;

	useEffect((): void => {
		setFade(false);
		setTimeout((): void => {
			setFade(true);
			setData(props);
		}, 200);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentIndex]);

	return (
		<Fade in={fade} timeout={500}>
			<Flex width='100%' justifyCenter>
				<StyledUseCaseCard >
					<UseCardContent>
						<TextSection {...rest} />
						<Box>
							<StyledUseCaseImage src={image} alt='img not found' />
						</Box>
					</UseCardContent>
				</StyledUseCaseCard>
			</Flex >
		</Fade >
	);
};

export default UseCaseCard;