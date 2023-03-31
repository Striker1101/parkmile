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
    case "gallery":
      return (
        <div class="links">
          <h1>Gallery</h1>
        </div>
      );
    case "contact":
      return (
        <div class="links">
          <h1>Contact</h1>
        </div>
      );
    case "projects":
      return (
        <div class="links">
          <h1>Recent Projects</h1>
        </div>
      );

    case "vessels":
      return <div></div>;
  }
}

export default Links;
