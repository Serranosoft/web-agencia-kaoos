import styles from '../styles/header.module.scss'
import Logo from './logo'


export default function Header() {

    return (
        <header className={styles.root}>
            <Logo />
        </header>
    )
}