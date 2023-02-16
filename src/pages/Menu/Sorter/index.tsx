import styles from "./Sorter.module.scss";
import options from "./options.json";
import { useState } from "react";
import classNames from "classnames";
import React from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  sorter: string;
  setSorter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sorter({ sorter, setSorter }: Props) {
  const [open, setOpen] = useState(false);
  const nameSorter = sorter && options.find(option => option.value === sorter)?.nome;

  return (
    <button
      className={classNames({
        [styles.sorter]: true,
        [styles["sorter--active"]]: sorter !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameSorter || "Ordenar Por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.sorter__options]: true,
          [styles["sorter__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div className={styles.sorter__option} key={option.value} onClick={() => setSorter(option.value)}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
