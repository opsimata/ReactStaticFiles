import logo from "assets/img/logo.svg";
import styles from "./Item.module.scss";

export default function Items() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={logo} alt="imagem" />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>Macarrão</h2>
          <p>desc</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>masa</div>
          <div className={styles.item__porcao}>400</div>
          <div className={styles.item__qtdpessoas}>serve 343424</div>
          <div className={styles.item__valor}>R$ 78</div>
        </div>
      </div>
    </div>
  );
}
