import { FC, InputHTMLAttributes, useState } from 'react';
import clsx from 'classnames';
import CloseEye from '@assets/icons/close_eye.svg?react'
import Eye from '@assets/icons/eye.svg?react'
import styles from './Input.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    needEye?: boolean;
    label?: string;
    error?: string;
}

export const Input: FC<InputProps> = ({label, error, disabled, needEye, ...rest}) => {

    const [passVisibility, setPassVisibility] = useState<boolean>(false)

    return (
        <div className={styles.wrapper}>
            {label && <label className={styles.label}>{label}</label>}

            <div className={styles.container}>
                <input className={clsx(styles.baseInput, {
                    [styles.disabled]: disabled,
                    [styles.error]: !!error,
                    })}        
                    disabled={disabled}
                    {...rest}
                />
                {needEye ? 
                    <div className={styles.eye} onClick={() => setPassVisibility(!passVisibility)}>{passVisibility ? <Eye/> : <CloseEye/>}</div>
                 :
                    null
                }            
            </div>
            {error && <span className={styles.errorText}>{error}</span>}
        </div>
    )
}
