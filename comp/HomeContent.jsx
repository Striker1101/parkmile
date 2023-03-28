import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ variable: "--inter-font", subsets: ["latin"] });
function HomeContent() {
  return (
    <div
      className={inter.variable}
      id="primary"
      class="content-area  container"
      role="main"
    >
      <div class="article__content">
        <div id="pl-2744" class="panel-layout">
          <div id="pg-2744-0" class="panel-grid panel-has-style">
            <div
              class="siteorigin-panels-stretch panel-row-style panel-row-style-for-2744-0"
              data-stretch-type="full"
            >
              <div id="pgc-2744-0-0" class="panel-grid-cell">
                <div
                  id="panel-2744-0-0-0"
                  class="so-panel widget widget_pw_notice widget-notice panel-first-child panel-last-child"
                  data-index="0"
                >
                  <div class="panel-widget-style panel-widget-style-for-2744-0-0-0">
                    <div class="important-notice  important-notice--center">
                      <div
                        class="important-notice__text"
                        style={{ padding: " 0 20px" }}
                      >
                        Call Us: John{" "}
                        <a href="tel:00353 86 6000204">+190 840 91225</a> for a
                        QUOTE{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pg-2744-1" class="panel-grid panel-no-style">
            <div id="pgc-2744-1-0" class="panel-grid-cell">
              <div
                id="panel-2744-1-0-0"
                class="so-panel widget widget_sow-editor panel-first-child"
                data-index="1"
              >
                <div class="so-widget-sow-editor so-widget-sow-editor-base">
                  <div class="textwidget">
                    <h1 style={{ textAlign: "center" }}>
                      Welcome to Parkermile Mobile
                    </h1>
                  </div>
                </div>
              </div>
              <div
                id="panel-2744-1-0-1"
                class="so-panel widget widget_sow-editor panel-last-child"
                data-index="2"
              >
                <div class="panel-widget-style panel-widget-style-for-2744-1-0-1">
                  <div class="so-widget-sow-editor so-widget-sow-editor-base">
                    <div class="siteorigin-widget-tinymce textwidget">
                      <p>
                        Parkermile Mobile LTD is a dynamic, forward thinking
                        company based in Southeastern Sicily which is home to
                        the longest coastline in Italy, covering about 21% of
                        the country&apos;s total. Given our high level of
                        experience, our wide range of expertise and our unique
                        skill set, Parkermile Mobile LTD is well positioned to
                        handle the most complex challenges that occur while
                        working in the marine environment.
                      </p>
                      <p>
                        Our highly skilled and experienced workforce have
                        extensive training in a number of key industries which
                        combined with our specialised vessels and equipment have
                        given rise to the company&apos;s successes to date. Our
                        adaptable and innovative approach to underwater and
                        surface operations allow us to stand out in our field.
                      </p>
                      <p>
                        We are well aware of the complex nature of projects in
                        the marine environment and therefore, we are prepared to
                        assist our clients in any way possible to ensure that
                        projects can be completed in an efficient and successful
                        manner. 
                      </p>
                      <p>
                        Parkermile Mobile owns and operates specialist workboats
                        varying in size from 6 metres to 26 metres to provide
                        support to the following industries: Aquaculture, Marine
                        Civil Engineering, Windfarm, Dredging. Parkermile Mobile
                        Ltd are available for work throughout Ireland, Italy and
                        the United Kingdom.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pg-2744-2" class="panel-grid panel-no-style">
            <div id="pgc-2744-2-0" class="panel-grid-cell">
              <div
                id="panel-2744-2-0-0"
                class="so-panel widget widget_sow-editor panel-first-child panel-last-child"
                data-index="3"
              >
                <div class="so-widget-sow-editor so-widget-sow-editor-base">
                  <div class="siteorigin-widget-tinymce textwidget">
                    <p>
                      <a href="/recent-projects/" />
                    </p>
                    <h2 style={{ textAlign: "center" }}>Services</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="pg-2744-3" class="panel-grid panel-no-style">
            <div id="pgc-2744-3-0" class="panel-grid-cell">
              <div
                id="panel-2744-3-0-0"
                class="so-panel widget widget_pw_latest_news widget-latest-news panel-first-child panel-last-child"
                data-index="4"
              >
                <Link
                  href="/projects/aquaculture/"
                  class="latest-news  latest-news--block"
                >
                  {/* <!-- Featured Image --> */}
                  <Image
                    src="https://omalleymarineplant.ie/wp-content/uploads/2021/02/aquaculture-homepage-intro-img-350x175.jpg"
                    width={350}
                    height={175}
                    srcSet="https://omalleymarineplant.ie/wp-content/uploads/2021/02/aquaculture-homepage-intro-img-350x175.jpg 350w, https://omalleymarineplant.ie/wp-content/uploads/2021/02/aquaculture-homepage-intro-img.jpg 540w"
                    sizes="(min-width: 1200px) 350px, (min-width: 992px) 290px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw - 30px)"
                    class="latest-news__image  wp-post-image"
                    alt="Aquaculture"
                  />

                  <div class="latest-news__content">
                    <div class="latest-news__header">
                      {/* <!-- Date --> */}
                      <time
                        class="latest-news__date"
                        dateTime="2021-02-18T09:57:26+00:00"
                      >
                        February 18, 2021{" "}
                      </time>
                      {/* <!-- Title --> */}
                      <h2 class="latest-news__title">Aquaculture</h2>
                    </div>
                    <span class="latest-news__more-news">Read more </span>
                  </div>
                </Link>
              </div>
            </div>
            <div id="pgc-2744-3-1" class="panel-grid-cell">
              <div
                id="panel-2744-3-1-0"
                class="so-panel widget widget_pw_latest_news widget-latest-news panel-first-child panel-last-child"
                data-index="5"
              >
                <Link
                  href="/projects/marine-civil-engineering/"
                  class="latest-news  latest-news--block"
                >
                  {/* <!-- Featured Image --> */}
                  <Image
                    src="https://omalleymarineplant.ie/wp-content/uploads/2021/02/marine-civil-engineering-homepage-intro-img-2-350x175.jpg"
                    width={350}
                    height={175}
                    srcSet="https://omalleymarineplant.ie/wp-content/uploads/2021/02/marine-civil-engineering-homepage-intro-img-2-350x175.jpg 350w, https://omalleymarineplant.ie/wp-content/uploads/2021/02/marine-civil-engineering-homepage-intro-img-2.jpg 540w"
                    sizes="(min-width: 1200px) 350px, (min-width: 992px) 290px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw - 30px)"
                    class="latest-news__image  wp-post-image"
                    alt="Marine Civil Engineering"
                  />

                  <div class="latest-news__content">
                    <div class="latest-news__header">
                      {/* <!-- Date --> */}
                      <time
                        class="latest-news__date"
                        dateTime="2021-02-18T09:56:55+00:00"
                      >
                        February 18, 2021{" "}
                      </time>
                      {/* <!-- Title --> */}
                      <h2 class="latest-news__title">
                        Marine Civil Engineering
                      </h2>
                    </div>
                    <span class="latest-news__more-news">Read more </span>
                  </div>
                </Link>
              </div>
            </div>
            <div id="pgc-2744-3-2" class="panel-grid-cell">
              <div
                id="panel-2744-3-2-0"
                class="so-panel widget widget_pw_latest_news widget-latest-news panel-first-child panel-last-child"
                data-index="6"
              >
                <Link
                  href="/projects/port-services-navigation-aids/"
                  class="latest-news  latest-news--block"
                >
                  {/* <!-- Featured Image --> */}
                  <Image
                    src="https://omalleymarineplant.ie/wp-content/uploads/2021/02/port-services-navigation-aids-homepage-intro-img-350x175.jpg"
                    width={350}
                    height={175}
                    srcSet="https://omalleymarineplant.ie/wp-content/uploads/2021/02/port-services-navigation-aids-homepage-intro-img-350x175.jpg 350w, https://omalleymarineplant.ie/wp-content/uploads/2021/02/port-services-navigation-aids-homepage-intro-img.jpg 540w"
                    sizes="(min-width: 1200px) 350px, (min-width: 992px) 290px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw - 30px)"
                    class="latest-news__image  wp-post-image"
                    alt="Port Services / Navigation Aids"
                  />

                  <div class="latest-news__content">
                    <div class="latest-news__header">
                      {/* <!-- Date --> */}
                      <time
                        class="latest-news__date"
                        dateTime="2021-02-18T09:56:29+00:00"
                      >
                        February 18, 2021{" "}
                      </time>
                      {/* <!-- Title --> */}
                      <h2 class="latest-news__title">
                        Port Services / Navigation Aids
                      </h2>
                    </div>
                    <span class="latest-news__more-news">Read more </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div id="pg-2744-4" class="panel-grid panel-no-style">
            <div id="pgc-2744-4-0" class="panel-grid-cell">
              <div
                id="panel-2744-4-0-0"
                class="so-panel widget widget_pw_latest_news widget-latest-news panel-first-child panel-last-child"
                data-index="7"
              >
                <Link
                  href="/projects/michael-tarmacadem/"
                  class="latest-news  latest-news--block"
                >
                  {/* <!-- Featured Image --> */}
                  <Image
                    src="https://omalleymarineplant.ie/wp-content/uploads/2018/12/michael-omalley-featured-350x175.jpg"
                    width={350}
                    height={175}
                    srcSet="https://omalleymarineplant.ie/wp-content/uploads/2018/12/michael-omalley-featured-350x175.jpg 350w, https://omalleymarineplant.ie/wp-content/uploads/2018/12/michael-omalley-featured.jpg 540w"
                    sizes="(min-width: 1200px) 350px, (min-width: 992px) 290px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw - 30px)"
                    class="latest-news__image  wp-post-image"
                    alt=" Tarmacadem"
                  />

                  <div class="latest-news__content">
                    <div class="latest-news__header">
                      {/* <!-- Date --> */}
                      <time
                        class="latest-news__date"
                        dateTime="2018-12-18T15:55:30+00:00"
                      >
                        December 18, 2018{" "}
                      </time>
                      {/* <!-- Title --> */}
                      <h2 class="latest-news__title">
                        Parkermile Mobile Tarmacadem
                      </h2>
                    </div>
                    <span class="latest-news__more-news">Read more </span>
                  </div>
                </Link>
              </div>
            </div>
            <div id="pgc-2744-4-1" class="panel-grid-cell">
              <div
                id="panel-2744-4-1-0"
                class="so-panel widget widget_pw_latest_news widget-latest-news panel-first-child panel-last-child"
                data-index="8"
              >
                <Link
                  href="/projects/cunningham-civil-marine/"
                  class="latest-news  latest-news--block"
                >
                  {/* <!-- Featured Image --> */}
                  <Image
                    src="https://omalleymarineplant.ie/wp-content/uploads/2017/09/cunningham-kish-lighthouse-featured-540-350x175.jpg"
                    width={350}
                    height={175}
                    srcSet="https://omalleymarineplant.ie/wp-content/uploads/2017/09/cunningham-kish-lighthouse-featured-540-350x175.jpg 350w, https://omalleymarineplant.ie/wp-content/uploads/2017/09/cunningham-kish-lighthouse-featured-540.jpg 540w"
                    sizes="(min-width: 1200px) 350px, (min-width: 992px) 290px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw - 30px)"
                    class="latest-news__image  wp-post-image"
                    alt="Cunningham Civil &amp; Marine"
                  />

                  <div class="latest-news__content">
                    <div class="latest-news__header">
                      {/* <!-- Date --> */}
                      <time
                        class="latest-news__date"
                        dateTime="2017-09-13T12:28:57+00:00"
                      >
                        September 13, 2017{" "}
                      </time>
                      {/* <!-- Title --> */}
                      <h2 class="latest-news__title">
                        Cunningham Civil &amp; Marine
                      </h2>
                    </div>
                    <span class="latest-news__more-news">Read more </span>
                  </div>
                </Link>
              </div>
            </div>
            <div id="pgc-2744-4-2" class="panel-grid-cell">
              <div
                id="panel-2744-4-2-0"
                class="so-panel widget widget_pw_latest_news widget-latest-news panel-first-child panel-last-child"
                data-index="9"
              >
                <Link
                  href="/projects/commissioners-of-irish-lights/"
                  class="latest-news  latest-news--block"
                >
                  {/* <!-- Featured Image --> */}
                  <Image
                    src="/projects/commissioners.jpg"
                    width={350}
                    height={175}
                    srcSet="https://omalleymarineplant.ie/wp-content/uploads/2017/09/commissioner-of-irish-lights-homepage-intro-img-350x175.jpg 350w, https://omalleymarineplant.ie/wp-content/uploads/2017/09/commissioner-of-irish-lights-homepage-intro-img.jpg 540w"
                    sizes="(min-width: 1200px) 350px, (min-width: 992px) 290px, (min-width: 768px) 690px, (min-width: 576px) 510px, calc(100vw - 30px)"
                    class="latest-news__image  wp-post-image"
                    alt="Commissioners of Irish Lights"
                  />

                  <div class="latest-news__content">
                    <div class="latest-news__header">
                      {/* <!-- Date --> */}
                      <time
                        class="latest-news__date"
                        dateTime="2017-09-13T12:23:34+00:00"
                      >
                        September 13, 2017{" "}
                      </time>
                      {/* <!-- Title --> */}
                      <h2 class="latest-news__title">
                        Commissioners of Irish Lights
                      </h2>
                    </div>
                    <span class="latest-news__more-news">Read more </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div id="pg-2744-5" class="panel-grid panel-has-style">
            <div
              class="siteorigin-panels-stretch panel-row-style panel-row-style-for-2744-5"
              data-stretch-type="full"
            >
              <div id="pgc-2744-5-0" class="panel-grid-cell">
                <div
                  id="panel-2744-5-0-0"
                  class="so-panel widget widget_sow-editor panel-first-child panel-last-child"
                  data-index="10"
                >
                  <div class="panel-widget-style panel-widget-style-for-2744-5-0-0">
                    <div class="so-widget-sow-editor so-widget-sow-editor-base">
                      <div
                        style={{ padding: "0 50px" }}
                        class="siteorigin-widget-tinymce textwidget"
                      >
                        <h2>
                          <span style={{ color: " #ffffff" }}>
                            Serving Ireland &amp; the UK
                          </span>
                        </h2>
                        <p>
                          Parkermile Mobile Plant Ltd are available for work
                          throughout Ireland and the United Kingdom. Call us to
                          chat about your requirements.
                        </p>
                        <p>&nbsp;</p>
                        <Link
                          class="btn  btn-dark"
                          href="/contact/"
                          target="_self"
                        >
                          {" "}
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="pgc-2744-5-1" class="panel-grid-cell">
                <div
                  id="panel-2744-5-1-0"
                  class="so-panel widget widget_sow-editor panel-first-child panel-last-child"
                  data-index="11"
                >
                  <div class="so-widget-sow-editor so-widget-sow-editor-base">
                    <div
                      id="panel-2750"
                      class="siteorigin-widget-tinymce textwidget"
                    >
                      <div
                        class="ngg-galleryoverview ngg-slideshow"
                        id="ngg-slideshow"
                        style={{ maxWidth: "300px", maxHeight: "300px" }}
                      >
                        <div
                          id="ngg-image-0"
                          class="ngg-gallery-slideshow-image"
                          style={{ height: "300px" }}
                        >
                          <Link href="/gallery/home-gallery">
                            <Image
                              height={280}
                              width={280}
                              alt="1"
                              src="/gallery/img1.jpg"
                              style={{ maxHeight: "280px" }}
                            />
                          </Link>
                        </div>
                        <div
                          id="ngg-image-1"
                          class="ngg-gallery-slideshow-image"
                          style={{ height: "300px" }}
                        >
                          <Link href="/gallery/home-gallery/">
                            <Image
                              alt=""
                              src="/gallery/img2.jpg"
                              width={280}
                              height={280}
                            />
                          </Link>
                        </div>
                        <div
                          id="ngg-image-2"
                          class="ngg-gallery-slideshow-image"
                          style={{ height: "300px" }}
                        >
                          <Link href="/gallery/home-gallery/">
                            <Image
                              width={280}
                              height={280}
                              alt=""
                              src="/gallery/img3.jpg"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
