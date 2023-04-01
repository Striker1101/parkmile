import React from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import { mvlight } from "@/utilitys/data";
import Details from "@/comp/Details";
export default function Mvlight() {
  const dispatch = useDispatch();
  dispatch(navheader("Mvlight"));
  return (
    <div>
      <Details data={mvlight} />
    </div>
  );
}
