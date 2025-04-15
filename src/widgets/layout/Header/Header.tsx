import {FC} from 'react'
import styles from './Header.module.css'
import logo from '/logo.png'
import Avatar from '@assets/icons/profile.svg?react'

interface HeaderProps {
    name: string;
}

export const Header: FC<HeaderProps> = ({name}) => {
    return (
        <div className={styles.header}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.wrapper}>
                <div className={styles.name}>{name}</div>
                <Avatar className={styles.avatar}/>
            </div>
        </div>
    )
}