import {FC} from 'react'
import clsx from 'classnames'
import styles from './Roster.module.css'

interface RosterProps {
    // players: []
}

// const playerArr = [{''}]

export const Roster: FC<RosterProps> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Roster</span>
            </div>
            <div className={clsx(styles.row, {[styles.firstRow]: true})}>
                <div className={styles.playerNumber}>
                    #
                </div>
                <div className={styles.player}>
                    <div className={styles.playerName}>
                        Player
                    </div>
                </div>
                <div className={styles.specs}>
                    <div className={styles.height}>
                            Height
                    </div>
                    <div className={styles.weight}>
                            Weight
                    </div>
                    <div className={styles.age}>
                            Age
                    </div>
                </div>
            </div>
            {/* For dev */}
            <div className={styles.row}>
                <div className={styles.playerNumber}>
                    10
                </div>
                <div className={styles.player}>
                    <img src="/photo.png" alt="p" className={styles.photo}/>
                    <div className={styles.wrapper}>
                        <div className={styles.playerName}>
                            Tralalero Tralala Porco Dio Porco Ala
                        </div >
                        <div className={styles.playerPosition}>
                            Forward
                        </div>
                    </div>
                </div>
                <div className={styles.specs}>
                    <div className={styles.height}>
                        190 cm
                    </div>
                    <div className={styles.weight}>
                        79 kg
                    </div>
                    <div className={styles.age}>
                        21
                    </div>
                </div>
            </div>
            {/* {players.map(player => (
                <div className={styles.row} key={player.id}>
                    <div className={styles.playerNumber}>
                        {player.number}
                    </div>
                    <div className={styles.player}>
                        <img src={player.photo} alt="p" className={styles.photo}/>
                        <div className={styles.wrapper}>
                            <div className={styles.playerName}>
                                {player.name}
                            </div >
                            <div className={styles.playerPosition}>
                                {player.position}
                            </div>
                        </div>
                    </div>
                    <div className={styles.specs}>
                        <div className={styles.height}>
                            {player.height}
                        </div>
                        <div className={styles.weight}>
                            {player.weight}
                        </div>
                        <div className={styles.age}>
                            {player.age}
                        </div>
                    </div>
                </div>
            ))} */}
        </div>
    )
}