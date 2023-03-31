import React from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import styles from "@/styles/vessels.module.css";
import { vessels } from "@/utilitys/data";
import Image from "next/image";
import Link from "next/link";
export default function Index() {
  const dispatch = useDispatch();
  dispatch(navheader("vessels"));

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {vessels.indexOne.map((item, i) => {
          return (
            <Link key={item.id} href={"/vessels/" + item.link}>
              <div className={styles.item}>
                <h2>{item.name}</h2>
                <Image src={item.src} height={400} width={400} alt="boats" />
                <h5>Read more</h5>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.items}>
        {vessels.indexTwo.map((item, i) => {
          return (
            <Link key={item.id} href={"/vessels/" + item.link}>
              <div className={styles.item}>
                <h2>{item.name}</h2>
                <Image src={item.src} height={400} width={400} alt="boats" />
                <h5>Read more</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
