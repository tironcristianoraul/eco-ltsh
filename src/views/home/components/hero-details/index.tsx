import { type FC, useEffect, useState } from 'react';
import { Typography, useTheme, Divider } from '@mui/material';
import './index.styled.css';
// import { TypeAnimation } from 'react-type-animation';
import Textra from './text-animation';
import Flex from '../../../../components/wrapper/flex';
import { SectionTitleDistinctSG } from '../../../../components/section-title/index.styled';
import GetStartedButton from '../../../../components/buttons/get-started-button';

const wordsArray = ['get more'];

const HeroDetails: FC = () => {

	const theme = useTheme();

	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentWord, setCurrentWord] = useState(wordsArray[0]);
	const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

	useEffect(() => {
		if (currentLetterIndex <= currentWord.length) {
			const typingTimeout = setTimeout(() => {
				setCurrentLetterIndex(currentLetterIndex + 1);
			}, 200);
			return () => clearTimeout(typingTimeout);
		}
		setCurrentLetterIndex(0);
		setCurrentWordIndex((prevIndex) =>
			(prevIndex + 1) % wordsArray.length
		);
	}, [currentLetterIndex, currentWord]);

	useEffect(() => {
		setCurrentWord(wordsArray[currentWordIndex]);
		setCurrentLetterIndex(0);
	}, [currentWordIndex]);

	return (
		<Flex column gap={theme.spacing(4)}>
			{/* <Flex justifyCenter gap={theme.spacing(1)} maxWidth={theme.spacing(100)}> */}
			<Flex gap={theme.spacing(10)}>
				<Flex sx={{ minHeight: theme.spacing(30), width: theme.spacing(50), alignItems: 'flex-start' }}
					column justifyCenter>
					<Typography variant='h2' sx={{ textAlign: 'left' }}>
						Manage your
					</Typography>
					<Typography variant='h2' sx={{ textAlign: 'left' }}>
						<SectionTitleDistinctSG>
							Social Empire
						</SectionTitleDistinctSG>
					</Typography>

				</Flex>
				<Divider orientation='vertical' flexItem
					sx={{
						borderLeft: `${theme.spacing(1)} solid ${theme.palette.secondary.main}`,
						height: theme.spacing(30)
					}} />
				<Flex sx={{
					minHeight: theme.spacing(30), width: theme.spacing(50), alignItems: 'flex-start',
					mt: theme.spacing(3)
				}} column justifyCenter>
					<Flex>
						<Typography variant='h6' sx={{ color: '#fff' }}>
							|
						</Typography>
						<Typography variant='h6'>
							{currentWord.substring(0, currentLetterIndex)}
						</Typography>
					</Flex>
					<Flex>
						<Typography variant='h1' sx={{ fontWeight: 500 }}>
							<SectionTitleDistinctSG>
								<Textra
									effect='press'
									stopduration='1000'
									data={['TIME', 'CLIENTS', 'MONEY']} />
							</SectionTitleDistinctSG>
						</Typography>
					</Flex>
				</Flex>
			</Flex>
			<GetStartedButton onClick={(): void => {
				window.location.href = 'https://app.socialgod.shop/auth/sign-in';
			}} />
		</Flex>
	);
};

export default HeroDetails;
