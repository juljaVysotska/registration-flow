import { AuthLayout } from '../../components/AuthLayout';
import { Button, ButtonPalette, ButtonSize } from '../../components/Button';
import { PasswordInput } from '../../components/Input';
import styles from './styles.module.scss';

export const NewPassword = () => {
    return <AuthLayout title='Create new Password?'>
        <div className={styles.inputLayout}>
            <div className={styles.passwordInput}>
                <PasswordInput
                    label='Password'
                    placeholder='Password'
                />
            </div>

            <div className={styles.passwordInput}>
                <PasswordInput
                    label='Confirm Password'
                    placeholder='Password'
                />
            </div>
        </div>

        <Button palette={ButtonPalette.PRIMARY} size={ButtonSize.M} type='submit' className={styles.submitButton}>Reset Password</Button>
    </AuthLayout >;
};