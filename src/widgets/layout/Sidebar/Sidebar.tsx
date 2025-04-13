import {FC} from 'react'

import styles from './Sidebar.module.css'

export const Sidebar: FC = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.wrapper}>
                <div className={styles.teams}>
                    <img src="/icons/group_person.svg" alt="Teams" />
                    <span>Teams</span>
                </div>
                <div className={styles.players}>
                    <img src="/icons/person.svg" alt="Players" />
                    <span>Players</span>
                </div>
                <div className={styles.signout}>
                    <img src="/icons/input.svg" alt="sign out" />
                    <span>Sign out</span>
                </div>
            </div>
        </div>
    )
}