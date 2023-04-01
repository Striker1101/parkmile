import React from "react";
import styles from "@/styles/details.module.css";
import Image from "next/image";
export default function Details({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {data.details.map((detail, i) => {
          return (
            <table key={i} className={`${styles.table} `}>
              <thead>
                <h3>{detail.name}</h3>
              </thead>
              <div className={styles.items}>
                {detail.values.map((item, i) => {
                  return (
                    <tbody key={i} className={styles.item}>
                      <th>{item}</th>
                      <th colSpan="2" className={styles.cols}>
                        {detail.props[i]}
                      </th>
                    </tbody>
                  );
                })}
              </div>
            </table>
          );
        })}
        <Image
          className={styles.featured_image}
          src={data.featured_image}
          alt=" featured"
          responsive
          width={400}
          height={400}
        />
        <div className={styles.imageCover}>
          {data.images.map((item, i) => {
            return (
              <Image
                className={styles.image}
                src={item}
                height={300}
                width={400}
                responsive
                alt="covers"
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
