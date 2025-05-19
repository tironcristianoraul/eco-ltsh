import type { ElementType, FC } from 'react';
import type { FlexProps } from '../wrapper/flex';
import Flex from '../wrapper/flex';

interface SectionWrapperProps extends FlexProps {
	sectionName: string
	half?: boolean
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component?: ElementType<any>
}

const SectionWrapperSG: FC<SectionWrapperProps> = ({
	component = 'section',
	sectionName,
	half = false,
	...props
}: SectionWrapperProps): React.ReactElement =>
	<Flex id={sectionName} component={component as ElementType} minHeight={half ? '50vh' : '100vh'}
		width='100%' gap={8} justifyCenter {...props} />;

// Removed defaultProps as default values are now set in destructuring

export default SectionWrapperSG;
