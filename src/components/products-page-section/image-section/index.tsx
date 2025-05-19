import type { JSX } from '@emotion/react/jsx-runtime';
import type { FloatingImageProps } from '../../../views/home/second-hero-section/index.interfaces';
import { ImageSectionWrapper, ProductsImageWrapper } from './index.styled';
import FloatingImage from '../../../views/home/second-hero-section/components/FloatingImage';
import { uuid } from '../../../utils/functions';

export interface ImageSectionProps {
	images: FloatingImageProps[]
}

const ImageSection: React.FC<ImageSectionProps> = ({ images }): JSX.Element => (
	<ImageSectionWrapper>
		<ProductsImageWrapper >
			{images.map(({ src, ...rest }) => (
				<FloatingImage key={`${uuid()}-first-image`} src={src} {...rest} />
			))}
		</ProductsImageWrapper>
	</ImageSectionWrapper>
);

export default ImageSection;