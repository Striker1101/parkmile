import React from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import { mv_MvMisneach } from "@/utilitys/data";
import Details from "@/comp/Details";
export default function MvMisneach() {
  const dispatch = useDispatch();
  dispatch(navheader("mv-Misneach"));
  return (
    <div>
      <Details data={mv_MvMisneach} />
    </div>
  );
}
