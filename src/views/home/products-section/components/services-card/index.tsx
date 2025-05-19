import type { FC } from 'react';
import ServicesCardContent from './ServiceCardContent';
import Card from '../../../../../components/cards';

export interface ISourceIcons {
	name: string
	source: string
}

export interface IProduct {
	name: string
	icon: ISourceIcons
}

export interface IServiceResponse {
	_id: string;
	platform: string
	icon: ISourceIcons
	products: IProduct[]
}

interface IProps {
	service: IServiceResponse
}

const ServicesCard: FC<IProps> = (props: IProps) => {
	const { service } = props;
	// const theme = useTheme();
	// const matchDownMD = useMediaQuery<string>(theme.breakpoints.down('md'));

	return (
		<>
			{/* {!matchDownMD && */}
			<Card sx={{ width: 350, height: 360, cursor: 'pointer' }}>
				<ServicesCardContent service={service} />
			</Card>
			{/* }
			{matchDownMD &&
				<ServiceCardContiner >
					<ServicesCardContent service={service} />
				</ServiceCardContiner>
			} */}
		</>
	);
};

export default ServicesCard;