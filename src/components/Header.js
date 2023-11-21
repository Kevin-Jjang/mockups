import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.base}>
      <Link href="/"
        className={styles.logo}>logo</Link>
      <div className={styles.toolbar}>
        <button className={styles.searchIcon}><SearchIcon /></button>
        <button className={styles.menu}>Menu</button>
      </div>
    </header>
  )
}

const SearchIcon = () => {
  return <svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.5 17C38.5 24.9403 31.8531 31.5 23.5 31.5C15.1469 31.5 8.5 24.9403 8.5 17C8.5 9.05969 15.1469 2.5 23.5 2.5C31.8531 2.5 38.5 9.05969 38.5 17Z" stroke="#3E3E3E" stroke-width="5" />
    <line y1="-2.5" x2="17.194" y2="-2.5" transform="matrix(-0.684767 0.728762 -0.746998 -0.664826 11.7739 28)" stroke="#3E3E3E" stroke-width="5" />
  </svg>
}