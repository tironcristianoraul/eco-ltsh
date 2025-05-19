import type { JSX } from 'react';
import type { IReview } from '../../../../components/review-card';
import Flex from '../../../../components/wrapper/flex';
import { ReviewsSlideshowContainer } from './index.styled';
import { SliderList } from '../../components/slide-show/SliderList';
import ReviewCard from '../../../../components/review-card';
import { uuid } from '../../../../utils/functions';

const mockReviews: IReview[] = [
	{
		reviewer: "John Doe",
		position: "Software Engineer",
		content: "This is an amazing product! Highly recommend it.",
		rating: 5,
		avatar: "https://via.placeholder.com/150",
	},
	{
		reviewer: "Jane Smith",
		position: "Product Manager",
		content: "Great experience using this service. Will use it again.",
		rating: 4,
		avatar: "https://via.placeholder.com/150",
	},
	{
		reviewer: "Alice Johnson",
		position: "Designer",
		content: "Very intuitive and user-friendly. Loved it!",
		rating: 5,
		avatar: "https://via.placeholder.com/150",
	},
	{
		reviewer: "Bob Brown",
		position: "Data Scientist",
		content: "Good value for the price. Could use some improvements.",
		rating: 3,
		avatar: "https://via.placeholder.com/150",
	},
];

const ReviewsSlideshow: React.FC = (): JSX.Element => {
	const reviews = mockReviews;

	const reviewsHalf: number | null = reviews && Math.ceil(reviews.length / 2);
	const upperReviews: IReview[] = reviews && reviewsHalf ? reviews.slice(0, reviewsHalf) : [];
	const lowerReviews: IReview[] = reviews && reviewsHalf ? reviews.slice(reviewsHalf) : [];

	return (
		<Flex column justifyCenter alignItems='center' gap={2} >
			<ReviewsSlideshowContainer>
				<SliderList direction='right' duration={50}
					sx={{ width: `${800 * (upperReviews?.length ?? 0)}px!important` }}>
					{[...upperReviews, ...upperReviews].map((review: IReview): JSX.Element => (
						<ReviewCard key={`upper-review-${review.reviewer}-${uuid()}`} {...review} />
					))}
				</SliderList>
			</ReviewsSlideshowContainer>
			{lowerReviews?.length > 0 &&
				<ReviewsSlideshowContainer>
					<SliderList direction='left' duration={50}
						sx={{ width: `${800 * (lowerReviews?.length ?? 0)}px!important` }}>
						{[...lowerReviews, ...lowerReviews].map((review: IReview): JSX.Element => (
							<ReviewCard key={`lower-review-${review.reviewer}-${uuid()}`} {...review} />
						))}
					</SliderList>
				</ReviewsSlideshowContainer>
			}
		</Flex>
	);
};

export default ReviewsSlideshow;