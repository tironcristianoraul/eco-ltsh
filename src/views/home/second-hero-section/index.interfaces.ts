/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BoxProps } from '@mui/material';
import type { ElementType, HTMLProps } from 'react';

interface FloatingImageProps extends BoxProps {
    above: boolean
    top: number | string,
    left: number | string,
    src: string,
    width?: number | string
    cardImage?: boolean,
    alt?: string,
    component?: ElementType<any>
}

interface HeroSectionWrapperProps extends BoxProps {
    reverse?: boolean
};

interface AbsoluteImageProps extends HTMLProps<HTMLImageElement> {
    top: string | number,
    left: string | number,
};

export type { HeroSectionWrapperProps, AbsoluteImageProps, FloatingImageProps };
