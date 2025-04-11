import {FC, ButtonHTMLAttributes} from 'react'
import styles from './Button.module.css'
import clsx from 'classnames';

type ButtonVariant  = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    text?: string;
}


export const Button: FC<ButtonProps> = ({variant = 'primary',text, disabled, ...rest}) => {
    return (
        <button className={clsx(
            styles.button,
            styles[variant], {
            [styles.disabled]: disabled
            })} 
            disabled={disabled} {...rest}>
            {text}
        </button>
    )
}