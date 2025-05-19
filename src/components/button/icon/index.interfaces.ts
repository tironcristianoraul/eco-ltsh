import type { MouseEvent } from 'react';
import { sizes, variants } from './index';
import type { JSX } from '@emotion/react/jsx-runtime';

type Size = (typeof sizes)[number];
type Variant = (typeof variants)[number];

interface IconButtonPropsSG {
	name?: string;
	icon: string;
	onClick: (e: MouseEvent) => void;
	iconify?: boolean;
	size?: Size;
	variant?: Variant;
	tooltip?: string;
}

interface WrapperIconButtonPropsSG {
	tooltip?: string;
	children: JSX.Element;
}

export type { IconButtonPropsSG, WrapperIconButtonPropsSG, Size, Variant };
