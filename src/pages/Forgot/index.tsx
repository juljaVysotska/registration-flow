import { Link } from 'react-router-dom';
import { AuthLayout } from '../../components/AuthLayout';
import { Button, ButtonPalette, ButtonSize } from '../../components/Button';
import { Input } from '../../components/Input';
import styles from './styles.module.scss';

export const Forgot = () => {
    return <AuthLayout title='Forgot Password?'>
        <div className={styles.inputLayout}>
            <Input
                type='email'
                placeholder='Work email'
            />
        </div>
        <div className={styles.buttonsLayout}>
            <Button palette={ButtonPalette.PRIMARY} size={ButtonSize.M} type='submit' className={styles.submitButton}>Send</Button>
            <Button palette={ButtonPalette.SECONDARY} size={ButtonSize.M} className={styles.submitButton}> <Link to={'/'}>Cancel</Link></Button>
        </div>
    </AuthLayout >;
};