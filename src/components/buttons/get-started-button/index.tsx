import { useState } from 'react';
import { StyledGetStartedButton, StyledGetStartedButtonArrow } from './index.styled';
import type { GetStartedButtonProps } from './index.interface';
import type { JSX } from '@emotion/react/jsx-runtime';

const GetStartedButton: React.FC<GetStartedButtonProps> = (props: GetStartedButtonProps): JSX.Element => {

	const { white, size, disabled } = props;
	const [hover, setHover] = useState<boolean>();

	return (
		<StyledGetStartedButton white={white} size={size} disabled={disabled}
			onMouseOver={(): void => setHover(true)}
			onMouseLeave={(): void => setHover(false)}
		>
			<a style={{ color: 'inherit', textDecoration: 'none' }} href='https://app.socialgod.shop'>Get Started</a>
			<StyledGetStartedButtonArrow hover={!!hover} icon='maki:arrow' />
		</StyledGetStartedButton >
	);
};

export default GetStartedButton;