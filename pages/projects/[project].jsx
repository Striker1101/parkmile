import React from "react";
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
  const id = useRouter.query;
  return <div>{data.id}</div>;
}
