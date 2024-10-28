import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface Props {
    children: React.ReactNode;
    className?: string;
}
export const GlobalLayout: React.FC<Props> = ({ children, className }) => {
    return <div className={classNames(styles.container, className)}>
        {children}
    </div>;
};