import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export enum ButtonPalette {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export enum ButtonSize {
    S = 's',
    M = 'm'
}

interface Props {
    children?: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    palette?: ButtonPalette,
    isDisabled?: boolean,
    isLoading?: boolean,
    className?: any;
    size?: ButtonSize,
}

export const Button: React.FC<Props> = ({
    type = 'button',
    children,
    palette = ButtonPalette.SECONDARY,
    isDisabled,
    isLoading = false,
    className,
    size = ButtonSize.M,
    onClick = () => { }
}) => {
    const clickHandler = () => {
        onClick();
    };

    const sizeStyles = {
        [styles.button__m]: size === ButtonSize.M,
        [styles.button__s]: size === ButtonSize.S,
    };

    const paletteStyles = {
        [styles.button__primary]: palette === ButtonPalette.PRIMARY,
        [styles.button__secondary]: palette === ButtonPalette.SECONDARY,
    };

    return (<button
        data-testid='Button'
        type={type}

        className={classNames(styles.button, className, {
            ...sizeStyles,
            ...paletteStyles,
            [styles.button__loading]: isLoading,
            [styles.button__disabled]: isDisabled
        })}
        onClick={clickHandler}
        disabled={isDisabled || isLoading}
    >
        {children}
    </button>);
};