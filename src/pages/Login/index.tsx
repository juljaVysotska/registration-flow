import { Link } from 'react-router-dom';
import { Icon } from '../../assets/Icons';
import { AuthLayout } from '../../components/AuthLayout';
import { Button, ButtonPalette, ButtonSize } from '../../components/Button';
import { Input, PasswordInput } from '../../components/Input';
import { Routes } from '../../types/routes';
import styles from './styles.module.scss';

export const Login = () => {
    return <AuthLayout title='Log in to your account'>
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
        <div className={styles.separatorBlock}>
            <hr className={styles.separator} />
            <span className={styles.separatorText}>OR</span>
        </div>
        <div className={styles.inputLayout}>
            <Input
                type='email'
                placeholder='Work email'
            />
            <div className={styles.passwordInput}>
                <PasswordInput
                    placeholder='Password'
                />
                <Link to={Routes.FORGOT} className='text-tertiary'>Forgot your password?</Link>
            </div>
        </div>

        <Button palette={ButtonPalette.PRIMARY} size={ButtonSize.M} type='submit' className={styles.submitButton}>Log in to Qencode</Button>
    </AuthLayout >;
};