import {FC} from 'react'
import styles from './Roster.module.css'

interface RosterProps {
    // playerNumber: number;
    // playerPhoto: string;
    // playerName: string;
    // playerPosition: string;
    // playerHeight: number;
    // playerWeight: number;
}

// const playerArr = [{''}]

export const Roster: FC<RosterProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Roster</span>
            </div>
            <div className={styles.row}>
                <div className={styles.playerNumber}>

                </div>
                <div className={styles.player}>
                    <img src="" alt="" />
                    <div className={styles.wrapper}>
                        <div className={styles.playerName}>

                        </div >
                        <div className={styles.playerPosition}>

                        </div>
                    </div>
                </div>
                <div className={styles.height}>

                </div>
                <div className={styles.weight}>

                </div>
                <div className={styles.age}>

                </div>
            </div>
            {/* {arr.map((item, index) => (
                <div className={styles.row} key={index}>
                    <div className={styles.playerNumber}>

                    </div>
                    <div className={styles.player}>
                        <img src="" alt="" />
                        <div className={styles.wrapper}>
                            <div className={styles.playerName}>

                            </div >
                            <div className={styles.playerPosition}>

                            </div>
                        </div>
                    </div>
                    <div className={styles.height}>

                    </div>
                    <div className={styles.weight}>

                    </div>
                    <div className={styles.age}>

                    </div>
                </div>
            ))} */}
        </div>
    )
}