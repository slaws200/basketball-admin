import {FC, AnchorHTMLAttributes} from 'react'
import clsx from 'classnames';
import styles from './Link.module.css'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    disabled?: boolean;
}

export const Link: FC<LinkProps> = ({text, disabled, ...rest}) => {
    return (
        <a className={clsx(styles.link, {
            [styles.disabled]: disabled
        })} 
        {...rest}>
            {text}
        </a>
    )
}