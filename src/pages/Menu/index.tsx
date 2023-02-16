import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/img/logo.svg";
import Finder from "./Finder";
import { useState } from "react";

export default function Menu() {
  const [find, setFinder] = useState("");
  return (
    <main>
      <nav className={styles.menunav}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <Finder find={find} setFinder={setFinder}/>
      </section>
    </main>
  );
}
