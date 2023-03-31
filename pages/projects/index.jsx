import React from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import Head from "next/head";
import { projects } from "@/utilitys/data";
import Link from "next/link";
import styles from "@/styles/project.module.css";
import Image from "next/image";
export default function Index() {
  const dispatch = useDispatch();
  dispatch(navheader("projects"));

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <title>Recent Projects</title>
        <meta
          name="description"
          content="recent projects from parkmile mobile"
        />
      </Head>
      <div className={styles.container}>
        {projects.map((item, i) => {
          return (
            <div
              key={i}
              className={
                i === 6
                  ? `${styles.project} ${styles.fullWidth}`
                  : `${styles.project} ${styles.halfWidth}`
              }
            >
              <Link href={"/projects/" + i}>
                <Image src={item.src} alt="image" width={400} height={300} />
                <h5>{item.name}</h5>
                <h6>Read more...</h6>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
