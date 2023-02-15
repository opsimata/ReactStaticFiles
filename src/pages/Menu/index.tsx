import styles from "./Menu.module.scss";

export default function Menu() {
    return(
        <main>
            <nav className={styles.menu}>
                <img src="../../assets/logo.svg" alt="Aluroni logo" />
                Aluroni
            </nav>
        </main>
    )
}