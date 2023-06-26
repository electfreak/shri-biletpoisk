"use client";

import styles from "./accordion.module.css";
import { useState } from "react";

export default function Accordion({
  head,
  text,
}: {
  head: string;
  text: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${styles.accordion} ${open ? styles.open : ""}`}
      onClick={() => setOpen(!open)}
    >
      <h2 className={styles.header}>{head}</h2>

      {open && <p className={styles.text}>{text}</p>}
    </div>
  );
}
