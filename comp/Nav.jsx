import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Links from "./Links";

function Nav() {
  const btn = useRef();
  const sub_btn = useRef();
  useEffect(() => {
    btn.current.onclick = () => {
      let nav = document.getElementById("growthpress-main-navigation");
      nav.classList.toggle("collapse");
    };
    sub_btn.current.onclick = () => {
      let nav = document.getElementById("subbed-menu");
      nav.classList.toggle("added-sub");
    };
  }, []);
  return (
    <header class="header__container">
      <div class="header__inner-container">
        <div class="container">
          <div class="header">
            {/* <!-- Logo --> */}
            <Link class="header__logo  header__logo--image" href="/">
              <Image
                src="/logo.png"
                alt=" Marine Plant"
                srcSet="https://omalleymarineplant.ie/wp-content/uploads/2019/01/omalley-logo-small-opt.png, https://omalleymarineplant.ie/wp-content/uploads/2019/01/omalley-logo-small-opt.png 2x"
                class="img-fluid"
                width="630"
                height="304"
              />
            </Link>
            {/* <!-- Toggle button for Main Navigation on mobile --> */}
            <button
              class="btn  btn-primary  header__navbar-toggler  d-lg-none  js-sticky-mobile-option"
              type="button"
              ref={btn}
              data-toggle="collapse"
              data-target="#growthpress-main-navigation"
              aria-controls="growthpress-main-navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa  fa-bars  hamburger"></i> <span>MENU</span>
            </button>
            {/* <!-- Main Navigation --> */}
            <nav
              class="header__main-navigation  collapse  js-sticky-desktop-option"
              id="growthpress-main-navigation"
              aria-label="Main Menu"
            >
              <ul
                id="menu-main-menu"
                class="main-navigation  js-main-nav  js-dropdown"
                role="menubar"
              >
                <li
                  id="menu-item-24"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2744 current_page_item menu-item-24"
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  id="menu-item-2864"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2864"
                >
                  <Link href="/services">Services</Link>
                </li>
                <li
                  id="menu-item-3221"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3221"
                  // aria-haspopup="dialogue"
                  // aria-expanded="false"
                  tabIndex="0"
                >
                  <Link href="/vessels/">Vessels</Link>
                  <button
                    class="dropdown-toggle dropdown-toggle--close"
                    aria-expanded="false"
                    id="nav-list-btn"
                    ref={sub_btn}
                  >
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  </button>
                  <ul class="sub-menu added-sub" id="subbed-menu">
                    <li
                      id="menu-item-3045"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3045"
                    >
                      <Link href="/vessels/mv-james-2/">MV James</Link>
                    </li>
                    <li
                      id="menu-item-3504"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3504"
                    >
                      <Link href="/vessels/mv-misneach/">MV Misneach</Link>
                    </li>
                    <li
                      id="menu-item-3568"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3568"
                    >
                      <Link href="/vessels/mv-three-fevers">
                        MV Three Fevers
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  id="menu-item-2867"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2867"
                >
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li
                  id="menu-item-3236"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3236"
                >
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>
            {/* <!-- Featured Button --> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
