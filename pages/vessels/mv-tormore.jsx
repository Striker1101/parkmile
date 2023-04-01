import React from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import { mvtormore } from "@/utilitys/data";
import Details from "@/comp/Details";
export default function Mvtormore() {
  const dispatch = useDispatch();
  dispatch(navheader("Mvtormore"));
  return (
    <div>
      <Details data={mvtormore} />
    </div>
  );
}
