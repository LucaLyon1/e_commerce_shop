import styles from '@/styles/Nav.module.css'
import Link from 'next/link'


export default function Navbar() {
    return(
        <div className={styles.container}>
            <h1 className={styles.logo}>SANDQVIST</h1>
            <nav>
                <ul className={styles.navlist}>
                    <Link href='/'><li className={`${styles.navItem} ${styles.active}`}>Shop</li></Link>
                    <Link href='/'><li className={styles.navItem}>Journal</li></Link>
                    <Link href='/'><li className={styles.navItem}>Sustainability</li></Link>
                    <Link href='/'><li className={styles.navItem}>Recollection</li></Link>
                    <Link href='/'><li className={styles.navItem}>Stores</li></Link>
                    <Link href='/'><li className={styles.navItem}>Contact</li></Link>
                    <Link href='/'><li className={styles.navItem}>Log in</li></Link>
                </ul>
            </nav>
        </div>
    )
}