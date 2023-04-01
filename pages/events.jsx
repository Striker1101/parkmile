import React from "react";
import { useDispatch } from "react-redux";
import { navheader } from "@/redux/action";
import styles from "@/styles/events.module.css";
export default function Events() {
  const dispatch = useDispatch();
  dispatch(navheader("event"));
  return <div>this is events</div>;
}
