import {FC, AnchorHTMLAttributes} from 'react'
import clsx from 'classnames';
import styles from './Link.module.css'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    text: string;
    disabled?: boolean;
}

export const Link: FC<LinkProps> = ({href, text, disabled, ...rest}) => {
    return (
        <a href={href} className={clsx(styles.link, {
            [styles.disabled]: disabled
        })} 
        {...rest}>
            {text}
        </a>
    )
}