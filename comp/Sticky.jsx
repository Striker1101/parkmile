import React from "react";
import Image from "next/image";
import Link from "next/link";
function Sticky(props) {
  return (
    <div
      class="pt-sticky-menu__container"
      id="secondMenu"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div class="container">
        <div class="pt-sticky-menu">
          {/* <!-- Logo and site name --> */}
          <div class="pt-sticky-menu__logo">
            <Link href="/" tabIndex="-1">
              <Image
                src="/logo.png"
                alt=" Marine Plant"
                srcSet="https://omalleymarineplant.ie/wp-content/uploads/2018/12/omalley-sticky-logo-1.png"
                class="img-fluid"
                width="1808"
                height="455"
              />
            </Link>
          </div>
          {/* <!-- Main Navigation --> */}
          <nav class="pt-sticky-menu__navigation" aria-label="Main Menu">
            <ul
              id="pt-sticky-main-menu"
              class="main-navigation  js-dropdown"
              role="menubar"
            >
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2744 current_page_item menu-item-24">
                <Link href="/" aria-current="page" tabIndex="-1">
                  Home
                </Link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2864">
                <Link href="/services/" tabIndex="-1">
                  Services
                </Link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3221">
                <Link href="/vessels/" tabIndex="-1">
                  Vessels
                </Link>
                <ul class="sub-menu">
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3045">
                    <Link href="/vessels/mv-james-2/" tabIndex="-1">
                      MV James
                    </Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3504">
                    <Link href="/vessels/mv-misneach/" tabIndex="-1">
                      MV Misneach
                    </Link>
                  </li>
                  <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3568">
                    <Link
                      href="https://omalleymarineplant.ie/vessels/mv-three-fevers/"
                      tabIndex="-1"
                    >
                      MV Three Fevers
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2867">
                <Link href="/gallery/" tabIndex="-1">
                  Gallery
                </Link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3236">
                <Link
                  href="https://omalleymarineplant.ie/contact/"
                  tabIndex="-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          {/* <!-- Hamburger Menu for mobile/tablet --> */}
          <div class="pt-sticky-menu__hamburger  d-lg-none">
            <Link
              href="#"
              class="btn  btn-primary  js-pt-sticky-menu-back-to-top-open-menu"
              tabIndex="-1"
            >
              <i class="fa  fa-bars"></i>{" "}
              <span class="pt-sticky-menu__hamburger-text">MENU</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sticky;
