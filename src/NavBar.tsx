import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';

export default function NavBar() {
    return(
        <>
            <header className={styles.websiteHeader}>
                <h1><Link to="/">My Store Website</Link></h1>
            </header>
            
        </>
    )
}