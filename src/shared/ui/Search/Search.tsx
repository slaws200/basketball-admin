import searchIcon from '../../../assets/icons/search.svg'
import styles from './Search.module.css'

interface SearchProps {
    text: string
}

export default function Search({text}: SearchProps){
    return (
        <div className={styles.search}>
            <input type="search" placeholder={text} className={styles.searchInput}/>
            <img src={searchIcon} alt="-" className={styles.searchIcon}/>
        </div>
    )
}