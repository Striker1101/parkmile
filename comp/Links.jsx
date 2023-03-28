import React from "react";
import { navPoint } from "@/utilitys/data";
import { useSelector } from "react-redux";
function Links(props) {
  const { navPoint } = useSelector((state) => state.lists);
  switch (navPoint) {
    case "home":
      return <div></div>;
    case "services":
      return (
        <div class="links">
          <h1>Services</h1>
        </div>
      );
    case "vessels":
      return <div></div>;
  }
}

export default Links;
