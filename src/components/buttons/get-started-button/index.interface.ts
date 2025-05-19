import type { ButtonPropsSG } from '../../button/base/index.interfaces';

interface GetStartedButtonProps extends ButtonPropsSG {
    white?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
};

export type { GetStartedButtonProps };