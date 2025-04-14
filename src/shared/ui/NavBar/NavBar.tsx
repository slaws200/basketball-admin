import {FC} from 'react'
import styles from './NavBar.module.css'
import logo from '/logo.png'
import Avatar from '@assets/icons/profile.svg?react'

interface NavBarProps {
    name: string;
}

export const NavBar: FC<NavBarProps> = ({name}) => {
    return (
        <div className={styles.navBar}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.wrapper}>
                <div className={styles.name}>{name}</div>
                <Avatar className={styles.avatar}/>
            </div>
        </div>
    )
}