
import clsx from 'classnames';
import styles from './MenuItem.module.css';

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

export const MenuItem = ({ icon, label, active }: MenuItemProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={clsx(styles.icon, {[styles.active]: active} )}>{icon}</div>
            <span className={clsx(styles.label, {[styles.active]: active})}>{label}</span>
        </div>
    )
};
