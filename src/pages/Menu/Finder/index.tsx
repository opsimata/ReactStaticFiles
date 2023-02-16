import React from "react";
import styles from "./Finder.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  find: string;
  setFinder: React.Dispatch<React.SetStateAction<string>>;
}

export default function Finder({ find, setFinder }: Props) {
  return (
    <div className={styles.finder}>
      <input
        value={find}
        onChange={(event) => setFinder(event.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
