import Footer from "@/comp/Footer";
import Nav from "@/comp/Nav.jsx";
import Sticky from "@/comp/sticky";
import "@/styles/theme.css";
import "@/styles/globals.css";
import "@/styles/import.css";
import "@/styles/layout.css";
import "@/styles/homeSlider.css";
import { useEffect } from "react";
import Links from "@/comp/Links";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "@/redux/reducer";
const store = configureStore({ reducer: allReducers });

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
        <Provider store={store}>
          <Nav />
          <Links />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </div>
    </div>
  );
}
