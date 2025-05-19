import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { InitialPrice } from './index.styled';
import Flex from '../../wrapper/flex';
import type { JSX } from '@emotion/react/jsx-runtime';

type IProps = Omit<IPackage, 'initialPrice'>

export interface IPackage {
	name: string;
	description: string;
	tokens: number;
	initialPrice: IPackagePrice;
	discount: IPackageDiscount;
	initialTokens: number;
	tokensBonus: IBonusTokens
};

interface IBonusTokens {
	type: 1 | 2;
	value: number;
}

interface IPackagePrice {
	currency: CurrencyOptions;
	value: number;
	_id?: string;
}

interface IPackageDiscount {
	type: 0 | 1 | 2;
	value?: number;
	currency?: CurrencyOptions;
}

type CurrencyOptions = 'ron' | 'eur' | 'usd' | 'btc' | 'eth';

const CreditSection: FC<IProps> =
	({ tokens, initialTokens, tokensBonus }): JSX.Element => (
		<Flex column justifyCenter height={200} gap={2}>
			<Box>
				<Typography variant='h3' color='primary'>
					{tokens}
				</Typography>
				<Typography>CREDITS</Typography>
			</Box>
			<Flex gap={5}>
				{initialTokens &&
					<Box>
						<InitialPrice>{initialTokens}</InitialPrice>
						<Typography variant='caption'>CREDITS</Typography>
					</Box>
				}
				{tokensBonus &&
					<Box>
						<Typography color='secondary' variant='h5'>
							{tokensBonus.value}{tokensBonus.type === 2 && '%'}
						</Typography>
						<Typography color='secondary' variant='caption'>MORE</Typography>
					</Box>
				}
			</Flex>
		</Flex>
	);

export default CreditSection;