import {FC} from 'react'
import styles from './Navigation.module.css'
import logo from '/logo.png'

interface NavigationProps {
    name: string;
    avatar: string;
}

export const Navigation: FC<NavigationProps> = ({name, avatar}) => {
    return (
        <div className={styles.navigation}>
            <img src={logo} alt="logo" className={styles.logo}/>
            <div className={styles.wrapper}>
                <div className={styles.name}>{name}</div>
                <img src={avatar} alt="avatar" className={styles.avatar} />
            </div>
        </div>
    )
}