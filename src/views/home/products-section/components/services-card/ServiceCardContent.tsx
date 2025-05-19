import type { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { ServicesCardTitle } from './index.styled';
import type { IServiceResponse, ISourceIcons } from '.';
import Flex from '../../../../../components/wrapper/flex';
import { capitalize, uuid } from '../../../../../utils/functions';
import SourceIcon from '../../../../../components/source-icon';
import { ButtonSG } from '../../../../../components/button';

interface IProps {
	service: IServiceResponse
}

export interface IProduct {
	name: string
	icon: ISourceIcons
}

const ServicesCardContent: FC<IProps> = (props: IProps) => {
	const { service } = props;
	const hovered = true;
	const navigate = useNavigate();

	return (
		<Flex width='100%' minHeight='100%' justifyContent='space-between' gap={3}>
			<Flex width='100%' gap={2} >
				<SourceIcon size='large' icon={service?.icon} hovered={hovered} />
				<ServicesCardTitle hovered={hovered}>{capitalize(service?.platform)}</ServicesCardTitle>
			</Flex>
			<Box display='flex' flexDirection='column' width='100%' minHeight='150px' gap={1}>
				{service?.products?.map((product: IProduct) =>
					<Flex key={uuid()}>
						<SourceIcon size='small' icon={product?.icon} />
						<Typography sx={{ userSelect: 'none' }}>{product?.name}</Typography>
					</Flex>
				)}
			</Box>
			<Flex width='100%' justifyCenter gap={2} >
				<ButtonSG variant='text' onClick={(): void => { navigate('/products'); }}>
					Read more
				</ButtonSG>
			</Flex>
		</Flex>
	);
};

export default ServicesCardContent;