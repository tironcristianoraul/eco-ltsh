import type { FC } from 'react';
import { BlogContentContiner, BlogSectionWrapper } from './index.styld';
import BlogDetails from './components/blog-details';
import mokData from './data.mock.json';
import type { BlogObjectProps } from './index.interfaces';
import BlogCard from './components/blog-card';
import SectionWrapperSG from '../../../components/section-wrapper';

const BlogSection: FC = () =>
	<SectionWrapperSG sectionName='articles-section'>
		<BlogSectionWrapper>
			<BlogDetails />
			<BlogContentContiner>
				{mokData?.map((blog: BlogObjectProps) =>
					<BlogCard key={blog?._id} blog={blog} />
				)}
			</BlogContentContiner>
		</BlogSectionWrapper>
	</SectionWrapperSG>
	;

export default BlogSection;