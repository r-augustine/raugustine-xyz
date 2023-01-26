import Link from "next/link"
import styles from "../styles/Nav.module.css";

const nav = () => {
  return (
    <header>
        <div className="container">
            <nav className={styles.nav}>
                <ul className="left">
                    <li className={styles.listItem}><Link href="/">Home</Link></li>
                    <li className={styles.listItem}><Link href="#portfolio">Portfolio</Link></li>
                </ul>
                <ul className="right">
                    <li className={styles.listItem}><Link href="#blog">Blog</Link></li>
                    <li className={styles.listItem}><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default nav