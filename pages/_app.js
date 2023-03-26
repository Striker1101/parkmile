import Footer from "@/comp/Footer.jsx";
import Nav from "@/comp/Nav.jsx";
import Sticky from "@/comp/sticky.jsx";
import "@/styles/theme.css";
import "@/styles/globals.css";
import "@/styles/import.css";
import "@/styles/layout.css";
import "@/styles/homeSlider.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      var secondMenu = document.getElementById("secondMenu");
      if (scrollY > 100) {
        secondMenu.classList.add("is-shown");
      } else {
        secondMenu.classList.remove("is-shown");
      }
    });
  }, []);
  return (
    <div style={{ position: "relative" }}>
      <Sticky />
      <div class="boxed-container">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
