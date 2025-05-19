import { Typography } from '@mui/material';
import { CardSG } from '../../../../../components/card';
import type { JSX } from '@emotion/react/jsx-runtime';

interface IProps {
	bigText: string,
	smallText: string
}

const SecondSectionCard: React.FC<IProps> = ({ bigText, smallText }): JSX.Element => (
	<CardSG width={240} height={150} sx={{ minWidth: { sm: '200px', xs: '100%' }, m: 0 }}>
		<Typography color='primary' fontSize={50} fontWeight='bold' textAlign='center'>{bigText}</Typography>
		<Typography textAlign='center' sx={{ color: (theme): string => theme?.palette?.text?.secondary }}>
			{smallText}
		</Typography>
	</CardSG>
);

export default SecondSectionCard;