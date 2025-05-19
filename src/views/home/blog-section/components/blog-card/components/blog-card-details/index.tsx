import type { FC } from 'react';
import { Divider, Typography } from '@mui/material';
import { BlogCardActionContainer, BlogCardTitle } from './index.styled';
import ReadMoreButton from '../../../blog-details/ReadMoreButton';
import Flex from '../../../../../../../components/wrapper/flex';

interface IProps {
	title: string
	date: string
	hovered: boolean
}

const BlogCardDetails: FC<IProps> = (props: IProps) => {
	const { title, date, hovered } = props;

	return (
		<Flex width='100%' p={4} my={{ sm: 0, md: 2 }} gap={2}>
			<BlogCardTitle hovered={hovered}>{title}</BlogCardTitle>
			<Divider sx={{ width: '100%', my: 1 }} />
			<BlogCardActionContainer>
				<Typography color='gray' fontSize='20px'>{date}</Typography>
				<ReadMoreButton hovered={hovered} />
			</BlogCardActionContainer>
		</Flex>
	);
};

export default BlogCardDetails;