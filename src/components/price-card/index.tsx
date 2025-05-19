import { Typography } from '@mui/material';
import GetStartedButton from '../buttons/get-started-button';
import CreditSection, { type IPackage } from './credit-section';
import { PriceCardContent, StyledPriceCard } from './index.styled';
import type { JSX } from '@emotion/react/jsx-runtime';
import Flex from '../wrapper/flex';

const PriceCard: React.FC<IPackage> = (props): JSX.Element => {

	const { initialPrice, ...rest } = props;

	return (
		<StyledPriceCard hover>
			<PriceCardContent>
				<Typography fontSize='30px' fontWeight='bold' textAlign='center'>
					{initialPrice.value} {initialPrice.currency.toUpperCase()}
				</Typography>
				<CreditSection {...rest} />
				<Flex column justifyCenter gap={1}>
					<GetStartedButton />
					<Typography>Get started for free</Typography>
				</Flex>
			</PriceCardContent>
		</StyledPriceCard>
	);
};

export default PriceCard;