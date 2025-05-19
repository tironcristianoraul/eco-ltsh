import type { JSX } from '@emotion/react/jsx-runtime';
import type { FloatingImageProps } from '../../views/home/second-hero-section/index.interfaces';
import ImageSection from './image-section';
import { ProductsPageSectionWrapper } from './index.styled';
import InformationSection, { type InformationSectionProps } from './information-section';

export interface ProductsPageSectionProps {
	information: InformationSectionProps,
	images: FloatingImageProps[],
	reverse: boolean
}

const ProductsPageSection: React.FC<ProductsPageSectionProps> = ({ information, images, reverse }): JSX.Element => (
	<ProductsPageSectionWrapper reverse={reverse}>
		<ImageSection images={images} />
		<InformationSection {...information} />
	</ProductsPageSectionWrapper>
);

export default ProductsPageSection;