import { FC } from 'react'
import styles from './Pagination.module.css'
import clsx from 'classnames'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    const pages = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      pages.push(1)
      if (currentPage > 3) pages.push('...')
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)
      for (let i = start; i <= end; i++) pages.push(i)
      if (currentPage < totalPages - 2) pages.push('...')
      pages.push(totalPages)
    }
    return pages
  }

  const pages = getPages()

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.arrow}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &#8249;
      </button>

      {pages.map((p, idx) => (
        <button
          key={idx}
          className={clsx(styles.page, {
            [styles.active]: p === currentPage,
            [styles.ellipsis]: p === '...'
          })}
          onClick={() => typeof p === 'number' && onPageChange(p)}
          disabled={p === '...'}
        >
          {p}
        </button>
      ))}

      <button
        className={styles.arrow}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &#8250;
      </button>
    </div>
  )
}
