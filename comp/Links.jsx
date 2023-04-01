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
      return (
        <div class="links">
          <h1>Vessels</h1>
        </div>
      );

    case "mv-james":
      return (
        <div class="links">
          <h1>MV James</h1>
        </div>
      );

    case "mv-Misneach":
      return (
        <div class="links">
          <h1>MV Misneach</h1>
        </div>
      );

    case "MvThreeFevers":
      return (
        <div class="links">
          <h1>MV Three Fevers</h1>
        </div>
      );
    case "Mvtormore":
      return (
        <div class="links">
          <h1>MV Tormore</h1>
        </div>
      );
    case "Mvlight":
      return (
        <div class="links">
          <h1>MV Ture Light</h1>
        </div>
      );

    case "event":
      return (
        <div class="links">
          <h1>Events</h1>
        </div>
      );
  }
}

export default Links;
