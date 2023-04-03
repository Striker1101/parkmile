import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "@/utilitys/data";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import Image from "next/image";
import styles from "@/styles/project.module.css";
export async function getStaticPaths() {
  const paths = projects.map((item) => {
    return { params: { project: item.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.project;
  const data = projects[id];

  return {
    props: { data },
  };
}

export default function Project({ data }) {
  const dispatch = useDispatch();
  dispatch(navheader("recent_project"));

  const router = useRouter();
  const currentIndex = projects.findIndex(
    (item) => item.id === parseInt(router.query.project)
  );
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
  const nextIndex =
    currentIndex < projects.length - 1 ? currentIndex + 1 : null;

  return (
    <div className={styles._container}>
      <div>
        <div className={styles._content}>
          <h1>{data.name}</h1>
          <p>{data.des}</p>
          <img src={data.src} alt={data.link} />
          <ul className={styles._imgs}>
            {data.img.map((item, i) => {
              return (
                <Image src={item} key={i} alt="" width={150} height={150} />
              );
            })}
          </ul>
        </div>
        <ul>
          {data.uses.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
        <div>
          <hr />
          <div className={styles._btn}>
            {prevIndex !== null && (
              <Link href={`/projects/${projects[prevIndex].id}`}>
                <p style={{ margin: 0, padding: 0 }}>PREVIOUS READING</p>
                <h4 style={{ margin: 0, padding: 0 }}>
                  {projects[prevIndex].name}
                </h4>
              </Link>
            )}

            {nextIndex !== null && (
              <Link href={`/projects/${projects[nextIndex].id}`}>
                <p style={{ margin: 0, padding: 0 }}>NEXT READING</p>
                <h4 style={{ margin: 0, padding: 0 }}>
                  {projects[nextIndex].name}
                </h4>
              </Link>
            )}
          </div>
          <hr />
        </div>
      </div>

      <div className={styles._links}>
        <h3>Recent Projects</h3>
        <ul>
          {projects.map((project, i) => {
            if (project.recent)
              return (
                <Link key={i} href={"/projects/" + project.id}>
                  <p>{project.name}</p>
                  <hr />
                </Link>
              );
          })}
        </ul>
      </div>
    </div>
  );
}
