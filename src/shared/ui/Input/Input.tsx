import { FC, InputHTMLAttributes } from 'react';
import clsx from 'classnames';
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input: FC<InputProps> = ({label, error, disabled, ...rest}) => {
    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}

            <input className={clsx(styles.baseInput, {
                [styles.disabled]: disabled,
                [styles.error]: !!error,
                })}        
                disabled={disabled}
                {...rest}
            />
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    )
}
