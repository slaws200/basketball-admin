import {FC} from 'react'
import styles from './AuthPage.module.css'
import { LoginForm } from '@widgets/LoginForm/LoginForm'
import SignIn from '@assets/img/SignIn.svg'
import SignUp from '@assets/img/SignUp.svg'
import {Link} from '@shared/ui/Link/Link'

interface AuthPageProps {
    variant: 'SignIn' | 'SignUp';
}

export const AuthPage: FC<AuthPageProps> = ({variant}) => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>{variant === 'SignIn' ? 'Sign In' : 'Sign Up'}</div>
                <LoginForm/>
                <div className={styles.description}>
                    <div>Not a member yet?</div>
                    <Link text='Sign Up'></Link>
                </div>
            </div>
            <div className={styles.picture}>
                <img src={variant === 'SignIn' ? SignIn : SignUp} alt="Auth" className={styles.img}/>
            </div>
        </div>
    )
} 