import {FC} from 'react'

import styles from './Notification.module.css'

interface NotificationProps {
    text: string
}

export const Notification: FC<NotificationProps> = ({text}) => {
    return (
        <div className={styles.notification}>
            {text}
        </div>
    )
}