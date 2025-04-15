import {FC} from 'react'
import ErrorImg from '@assets/img/404.svg'
import styles from './ErrorPage.module.css'

interface NotFoundPageProps {
    title: string;
    description: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({title, description}) => {
    return (
        <div className={styles.notFoundPage}>
            <img src={ErrorImg} alt="Error 404" className={styles.notFoundImg}/>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </div>
    )
}