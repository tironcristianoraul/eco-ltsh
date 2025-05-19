import { Box } from '@mui/material';
import type { ISocialsComponent } from './index.interfaces';
import {
	SocialsPageButton,
	SocialsPageDescription,
	SocialsPageSectionWrapper,
	SocialsPageTitle
} from './index.styled';
import { handleComponentRender } from './functions';
import { uuid } from '../../utils/functions';
import type { JSX } from '@emotion/react/jsx-runtime';

interface SocialsPageSectionProps {
	social: string;
	data: ISocialsComponent[];
	clipPath?: boolean
}

const SocialsPageSection: React.FC<SocialsPageSectionProps> = ({ social, data, clipPath }): JSX.Element => (
	<SocialsPageSectionWrapper clipPath={clipPath}>
		<SocialsPageTitle >{social} x SocialGod Integration</SocialsPageTitle>
		{data.map((item) => (
			<Box key={uuid()} >
				{handleComponentRender(item)}
			</Box>
		))}
		<SocialsPageTitle>How to connect with {social}?</SocialsPageTitle>
		<SocialsPageDescription >
			Sign up for SocialGod today and add your {social} page and group right away. <br />
			You will get 7 days for free to try out our product.
		</SocialsPageDescription>
		<SocialsPageButton >
			Connect {social}
		</SocialsPageButton>
	</SocialsPageSectionWrapper>
);

export default SocialsPageSection;