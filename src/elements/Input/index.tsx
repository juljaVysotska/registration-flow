import classNames from 'classnames';
import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import { Icon } from '../../assets/Icons';
import styles from './styles.module.scss';

enum InputType {
    TEXT = 'text',
    DATE = 'date',
    EMAIL = 'email',
    NUMBER = 'number',
    SEARCH = 'search',
    TEL = 'tel',
    WEEK = 'week'
}

interface Props {
    type?: 'text' | 'date' | 'email' | 'number' | 'search' | 'tel' | 'week' | 'password';
    value?: any;
    placeholder?: string;
    error?: {
        message: string | undefined;
    };
    id?: string;
    required?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => undefined;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => undefined;
    onInput?: (e: FormEvent<HTMLInputElement>) => undefined;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => undefined;
    label?: string;
    className?: string;
}

export const Input: React.FC<Props> & { Password: typeof Password; } = ({
    type = 'text',
    required,
    value,
    placeholder = 'Input here',
    // error,
    // label,
    id,
    onChange = () => { },
    onBlur = () => { },
    onInput = () => { },
    onFocus = () => { },
    className, }) => {
    return (<>
        {/* <div className={styles.inputWrapper}> */}
        {/* {label && <label className={classNames('text-15', 'text-primary', 'text-500')}>{label}</label>} */}
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
        {/* {error && error.message && <span >{error.message}</span>} */}
        {/* </div> */}
    </>);
};

export const Password: React.FC<Omit<Props, 'type'>> = (props) => {
    const [inputType, setInputType] = useState<'number' | 'text' | 'date' | 'email' | 'search' | 'tel' | 'week' | 'password'>('password');

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

Input.Password = Password;