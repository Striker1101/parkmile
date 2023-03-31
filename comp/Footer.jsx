import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-xs-12  col-lg-4">
              <div class="widget  widget_nav_menu">
                <h4 class="footer-top__heading">Main Menu</h4>
                <div class="menu-footer-main-menu-container">
                  <ul id="menu-footer-main-menu" class="menu">
                    <li
                      id="menu-item-120"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2744 current_page_item menu-item-120"
                    >
                      <Link href="/" aria-current="page">
                        Home
                      </Link>
                    </li>
                    <li
                      id="menu-item-3227"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3227"
                    >
                      <Link href="/vessels">Vessels</Link>
                    </li>
                    <li
                      id="menu-item-2920"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2920"
                    >
                      <Link href="/services">Services</Link>
                    </li>
                    <li
                      id="menu-item-2919"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2919"
                    >
                      <Link href="/gallery">Gallery</Link>
                    </li>
                    <li
                      id="menu-item-2918"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2918"
                    >
                      <Link href="/projects">Projects</Link>
                    </li>
                    <li
                      id="menu-item-3251"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3251"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xs-12  col-lg-4">
              <div class="widget  widget_sow-editor">
                <div class="so-widget-sow-editor so-widget-sow-editor-base">
                  <h4 class="footer-top__heading">Contact Us</h4>
                  <div class="siteorigin-widget-tinymce textwidget">
                    <p style={{ lineHeight: "28px" }}>
                      Prospect, Westport,
                      <br />
                      Southeastern Sicily
                      <br />
                      F28 H521
                      <br />
                      <span style={{ color: "#1871c9;" }}>
                        <a href="mailto:bruncehenderson@gmail.com">
                          e: bruncehenderson@gmail.com
                        </a>
                      </span>
                      <br />
                      t: +190 (840) 91225
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12  col-lg-4">
              <div class="widget  ">
                <h4 class="footer-top__heading">Find us on Facebook</h4>
                <div class="iframe-like-box">
                  <iframe
                    src="//www.facebook.com/plugins/likebox.php?href=https%3A%2F%2Fwww.facebook.com%2Fomalleymarineplant%2F&amp;width=340&amp;height=230&amp;hide_cover=0&amp;show_facepile=1&amp;show_posts=0&amp;small_header=0"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom__container">
        <div class="container">
          <div class="footer-bottom">
            <div class="footer-bottom__left">
              Copyright © 2023 <strong> Parkermile Mobile</strong>. | Site by{" "}
              <a href="http://www.boldcraftmarkerting.com" target="_blank">
                Bold Craft Marketing
              </a>{" "}
            </div>
            <div class="footer-bottom__right">
              <a class="back-to-top  js-back-to-top" href="#">
                <span class="icon-container">
                  <span class="fa fa-chevron-up "></span>
                </span>{" "}
                Back to top
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
