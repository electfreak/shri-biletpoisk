"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./select.module.css";

export default function Select<Opt extends string>({
  title,
  options,
  setOption,
}: {
  title: string;
  options: Opt[];
  setOption: (opt: Opt | null) => void;
}) {
  const [selected, setSelected] = useState<Opt | null>(null);
  const [open, setOpen] = useState(false);

  const selectNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOption(selected);
  }, [selected, setOption]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!selectNode.current?.contains(e.target as Node) && open === true) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => window.removeEventListener("click", handleClick);
  });

  const handleChoose = (opt: Opt | null) => {
    setOpen(false);
    setSelected(opt);
  };

  const def = selected === null;

  return (
    <div
      ref={selectNode}
      className={`${styles.select} ${open ? styles.open : ""}`}
    >
      <div
        className={`${styles.toggler} ${def ? styles.default : ""}`}
        onClick={() => setOpen(!open)}
      >
        {def ? title : selected}
      </div>

      <div className={styles.options}>
        <div
          tabIndex={0}
          className={`${styles.option} ${styles.default}`}
          onClick={() => handleChoose(null)}
        >
          Не выбран
        </div>

        {options.map((opt) => (
          <div
            className={styles.option}
            key={opt}
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              handleChoose(opt);
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}
