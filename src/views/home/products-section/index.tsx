// import type { FC } from 'react';
// import DraggCarouselWraper from './components/carousel-components/DraggCarouselWraper';
// import TitleComponent from './components/title-components';
// import ServicesCard from './components/services-card';
// import { isArray } from '../../../utils/functions';

// const ProductsSection: FC = () => {
// 	const data = isArray(services) ? services : [];
// 	const { isDragged, handleNext, handleDrag, handleDragStart, handleDragStop } = useDrag(data?.length);

// 	return (
// 		<SectionWrapperSG sx={{ m: 0 }} sectionName='services-section'>
// 			<SectionBadgeSG>Services</SectionBadgeSG>
// 			<TitleComponent dataLength={data?.length} isDragged={isDragged} handleNext={handleNext} />
// 			<DraggCarouselWraper handleDrag={handleDrag} handleDragStart={handleDragStart}
// 				handleDragStop={handleDragStop} isDragged={isDragged}
// 				childrens={
// 					data?.map((service: IServiceResponse) =>
// 						<ServicesCard key={service?._id} service={service} />
// 					)
// 				}
// 			/>
// 		</SectionWrapperSG>
// 	);
// };

// export default ProductsSection;