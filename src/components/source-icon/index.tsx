import type { FC } from 'react';
import { Icon as IconifyIcon } from '@iconify/react';
import { Icon } from '@mui/material';
import Flex from '../wrapper/flex';
import type { ISourceIcons } from '../../views/home/products-section/components/services-card';
import { uuid } from '../../utils/functions';

type SizeType = 'small' | 'medium' | 'large'

interface IProps {
	icon: ISourceIcons
	size: SizeType
	hovered?: boolean
}

const sizeValue = (sizeParam: SizeType): { width: number, height: number } => {
	switch (sizeParam) {
		case 'small': {
			return {
				width: 30,
				height: 30
			};
		}
		case 'medium': {
			return {
				width: 40,
				height: 40
			};
		}
		case 'large': {
			return {
				width: 50,
				height: 50
			};
		}
		default: {
			return {
				width: 40,
				height: 40
			};
		}
	}
};

const SourceIcon: FC<IProps> = ({ icon, hovered = false, size }: IProps) => {


	return (
		<Flex width='60px' justifyCenter>
			{icon?.source === 'Iconify' &&
				<IconifyIcon
					name={uuid()}
					icon={icon?.name}
					style={{
						...sizeValue(size), scale: hovered ? '1.1' : '1',
						transition: 'all 0.3 ease-in-out'
					}}
				/>
			}
			{icon?.source === 'GoogleFonts' &&
				<Icon
					style={{
						height: '50px', width: '50px', scale: hovered ? '1.1' : '1',
						transition: 'all 0.3 ease-in-out'
					}}
				>
					{icon?.name || 'summarize'}
				</Icon>
			}
		</Flex>
	);
};

// Removed defaultProps as default parameter values are used instead
export default SourceIcon;