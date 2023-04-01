import React from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import { mv_james } from "@/utilitys/data";
import Details from "@/comp/Details";
export default function MvJames() {
  const dispatch = useDispatch();
  dispatch(navheader("mv-james"));
  return (
    <div>
      <Details data={mv_james} />
    </div>
  );
}
