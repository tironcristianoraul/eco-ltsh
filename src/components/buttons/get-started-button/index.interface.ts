import type { ButtonProps } from '@mui/material';

interface GetStartedButtonProps extends ButtonProps {
    white?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
};

export type { GetStartedButtonProps };