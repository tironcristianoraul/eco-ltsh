import type { FC } from 'react';
import type { FloatingImageProps } from '../index.interfaces';
import { FloatingImageComponent } from '../index.styles';

interface StyledFloatingImageProps extends FloatingImageProps {
	cardImage?: boolean
}

const FloatingImage: FC<StyledFloatingImageProps> = ({
	src,
	cardImage = false,
	...props
}: StyledFloatingImageProps) =>
	<FloatingImageComponent cardImage={cardImage}
		component='img' src={src} alt='floating-component' {...props} />;

export default FloatingImage;