import styles from './Search.module.css'

interface SearchProps {
    text: string
}

export default function Search({text}: SearchProps){
    return (
        <div className={styles.search}>
            <input type="text" placeholder={text} className={styles.searchInput}/>
            <img src="icons/search.svg" alt="-" className={styles.searchIcon}/>
        </div>
    )
}