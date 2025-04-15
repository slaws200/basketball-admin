
import clsx from 'classnames';
import styles from './MenuItem.module.css';

interface MenuItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    staticLightestRed?: boolean;
}

export const MenuItem = ({ icon, label, active, staticLightestRed }: MenuItemProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={clsx(styles.icon, {[styles.active]: active, [styles.staticLightestRed]: staticLightestRed} )}>{icon}</div>
            <span className={clsx(styles.label, {[styles.active]: active, [styles.staticLightestRed]: staticLightestRed} )}>{label}</span>
        </div>
    )
};
