import type { JSX } from '@emotion/react/jsx-runtime';
import { Icon } from '@iconify/react';
import { Tooltip } from '@mui/material';
import { type FC, type MouseEvent, type ReactElement, useId } from 'react';

export interface PinTogglePropsSG {
	onClick: () => void;
	pinned?: boolean;
	tooltip?: string;
}

interface WrapperProps {
	tooltip: PinTogglePropsSG['tooltip'];
	children: ReactElement;
}

const Wrapper: FC<WrapperProps> = ({ tooltip, children }): JSX.Element =>
	tooltip ? <Tooltip title={tooltip}>{children as ReactElement}</Tooltip> : children;

const PinToggleSG: FC<PinTogglePropsSG> = ({ onClick, pinned = false, tooltip = '' }): JSX.Element => {
	const id = useId();

	return (
		<Wrapper tooltip={(pinned ? tooltip : 'Adauga la favorite') as string}>
			<Icon
				id={id}
				fontSize={20}
				icon={pinned ? 'typcn:pin' : 'typcn:pin-outline'}
				onClick={(e: MouseEvent<SVGSVGElement>): void => {
					e.preventDefault();
					e.stopPropagation();
					onClick();
				}}
			/>
		</Wrapper>
	);
};

// Default props are now handled in the destructuring of the component's props.

export default PinToggleSG;
