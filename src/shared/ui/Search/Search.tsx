import SearchIcon from '@assets/icons/search.svg?react'
import styles from './Search.module.css'

interface SearchProps {
    text: string
}

export function Search({text}: SearchProps){
    return (
        <div className={styles.search}>
            <input type="search" placeholder={text} className={styles.searchInput}/>
            <div className={styles.searchIcon}><SearchIcon/></div>
        </div>
    )
}