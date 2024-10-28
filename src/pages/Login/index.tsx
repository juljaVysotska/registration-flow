import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icon } from '../../assets/Icons';
import { Button, ButtonPalette, ButtonSize } from '../../elements/Button';
import { Input } from '../../elements/Input';
import { GlobalLayout } from '../../elements/Layout';
import { Routes } from '../../types/routes';
import styles from './styles.module.scss';

export const Login = () => {
    return <GlobalLayout className={styles.loginLayout}>
        <Link to={'/'}>LOGO</Link>
        <h2 className={classNames('text-primary', 'text-30', 'text-700', 'text-center', styles.title)}>Log in to your account</h2>
        <hr className={styles.separator} />
        <div className={styles.ssoSection}>
            <Button className={styles.ssoButton}>
                <Icon.GoogleLogo />
                Google
            </Button>
            <Button className={styles.ssoButton}>
                <Icon.GithubLogo />
                Github
            </Button>
        </div>
        <div className={styles.inputLayout}>

            <Input type='email' placeholder='Work email' />

            <Input.Password placeholder='Password' />
        </div>


        <Button palette={ButtonPalette.PRIMARY} size={ButtonSize.M} type='submit' className={styles.submitButton}>Log in to Qencode</Button>

        <p className={classNames('text-14', 'text-400', 'text-primary', 'text-center')}>Is your company new to Qencode? <Link to={Routes.FORGOT} className='text-tertiary'>Sign up</Link></p>
    </GlobalLayout >;
};