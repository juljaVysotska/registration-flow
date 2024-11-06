import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../assets/Icons';
import { GlobalLayout } from '../Layout';
import styles from './styles.module.scss';

interface Props {
    children: React.ReactNode;
    title: string;
}

export const AuthLayout: React.FC<Props> = ({ children, title }) => {
    return <GlobalLayout className={styles.loginLayout}>
        <Link to={'/'} className={styles.logo}><Icon.Logo /></Link>
        <h2 className={classNames('text-primary', 'text-30', 'text-700', 'text-center', styles.title)}>{title}</h2>
        {children}
    </GlobalLayout >;
};