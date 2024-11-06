import classNames from 'classnames';
import { useState } from 'react';
import { Icon } from '../../assets/Icons';
import styles from './styles.module.scss';
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

export const Input: React.FC<Props> = ({
    type = 'text',
    required,
    value,
    placeholder = 'Input here',
    error,
    label,
    id,
    onChange = () => { },
    onBlur = () => { },
    onInput = () => { },
    onFocus = () => { },
    className, }) => {
    return (<>
        <div className={styles.inputWrapper}>
            {label && <label className={classNames('text-15', 'text-primary', 'text-500')}>{label}</label>}
            <input
                className={classNames(styles.input, className)}
                type={type}
                value={value}
                placeholder={placeholder}
                required={required}
                id={id}
                onChange={(event) => onChange(event)}
                onBlur={(event) => onBlur(event)}
                onInput={(event) => onInput(event)}
                onFocus={(event) => onFocus(event)}
            />
            {error && <span className={classNames('text-15', styles.errorMessage)}>{error}</span>}
        </div>
    </>);
};

export const PasswordInput: React.FC<Props> = (props) => {
    const [inputType, setInputType] = useState<'text' | 'password'>('password');

    const handleChange = () => {
        setInputType((prev) => prev === 'password' ? 'text' : 'password');
    };

    return <div className={styles.inputWrapper}>
        <Input {...props} type={inputType} />
        <div className={styles.toggler} onClick={() => handleChange()}>
            {inputType !== 'text' ? <Icon.EyeOpen /> : <Icon.EyeClosed />}
        </div>
    </div>;
};