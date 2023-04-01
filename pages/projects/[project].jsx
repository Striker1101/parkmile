import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { projects } from "@/utilitys/data";

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
  console.log(data);

  const router = useRouter();
  const currentIndex = projects.findIndex(
    (item) => item.id === parseInt(router.query.project)
  );
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
  const nextIndex =
    currentIndex < projects.length - 1 ? currentIndex + 1 : null;

  return (
    <div>
      <p>{data.id}</p>
      <h1>{data.title}</h1>
      <p>{data.description}</p>

      {prevIndex !== null && (
        <Link href={`/projects/${projects[prevIndex].id}`}>
          <button>Previous project</button>
        </Link>
      )}

      {nextIndex !== null && (
        <Link href={`/projects/${projects[nextIndex].id}`}>
          <button>Next project</button>
        </Link>
      )}
    </div>
  );
}
