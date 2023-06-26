"use client";
import styles from "./cartIcon.module.css";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { CartDataContext } from "@/cart/context";

export default function CartIcon() {
  const { totalAmount } = useContext(CartDataContext);

  return (
    <Link href="/cart" className={styles.cartIcon}>
      {totalAmount > 0 && <span className={styles.counter}>{totalAmount}</span>}

      <Image src="/cart.svg" width={32} height={32} alt="cart icon" />
    </Link>
  );
}
