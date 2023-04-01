import React from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import { mvThreeFevers } from "@/utilitys/data";
import Details from "@/comp/Details";
export default function MvThreeFevers() {
  const dispatch = useDispatch();
  dispatch(navheader("MvThreeFevers"));
  return (
    <div>
      <Details data={mvThreeFevers} />
    </div>
  );
}
