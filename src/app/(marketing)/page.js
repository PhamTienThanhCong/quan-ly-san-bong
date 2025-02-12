/* eslint-disable @next/next/no-img-element */
import "@quanlysanbong/styles/style.css";
import Script from "next/script";
import AboutUsComponent from "./components/AboutUsComponent";
import OurFeaturesComponent from "./components/OurFeaturesComponent";
import OurOfferComponent from "./components/OurOfferComponent";
import FAQsComponent from "./components/FAQsComponent";
import OurTeamComponent from "./components/OurTeamComponent";
import TestimonialComponent from "./components/TestimonialComponent";
import META_DATA from "./metaData";

export const metadata = {
  title: `${META_DATA.TITLE}`,
  description: META_DATA.DESCRIPTION,
  applicationName: META_DATA.APPLICATION_NAME,
  keywords: META_DATA.KEYWORDS,
  robots: META_DATA.ROBOTS,
  openGraph: {
    title: META_DATA.TITLE,
    description: META_DATA.DESCRIPTION,
    images: META_DATA.IMAGE,
    type: "website",
    url: META_DATA.URL
  }
};

export default function Home() {
  return (
    <div>
      <AboutUsComponent />

      <div className="container-fluid service pb-5">
        <div className="container pb-5">
          <div className="text-center mx-auto pb-3 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
            <h4 className="text-primary">Sân bóng phổ biến</h4>
            <h1 className="display-5">Các sân bóng phổ biến tại Hà Nội</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    {" "}
                    Strategy Consulting
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque
                    nesciunt similique officiis veritatis,
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Financial Advisory
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque
                    nesciunt similique officiis veritatis,
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Managements
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque
                    nesciunt similique officiis veritatis,
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Supply Optimization
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque
                    nesciunt similique officiis veritatis,
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-5.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Hr Consulting
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque
                    nesciunt similique officiis veritatis,
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="service-item">
                <div className="service-img">
                  <img src="img/service-6.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                </div>
                <div className="rounded-bottom p-4">
                  <a href="#" className="h4 d-inline-block mb-4">
                    Marketing Consulting
                  </a>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sint? Excepturi facilis neque
                    nesciunt similique officiis veritatis,
                  </p>
                  <a className="btn btn-primary rounded-pill py-2 px-4" href="#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OurFeaturesComponent />

      <OurOfferComponent />

      <FAQsComponent />

      <OurTeamComponent />

      <TestimonialComponent />

      <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>

      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      />
      <Script strategy="beforeInteractive" src="./lib/wow/wow.min.js" />
      <Script strategy="beforeInteractive" src="./lib/easing/easing.min.js" />
      <Script strategy="beforeInteractive" src="./lib/waypoints/waypoints.min.js" />
      <Script strategy="beforeInteractive" src="./lib/counterup/counterup.min.js" />
      <Script strategy="beforeInteractive" src="./lib/lightbox/js/lightbox.min.js" />
      <Script strategy="beforeInteractive" src="./lib/owlcarousel/owl.carousel.min.js" />

      <Script src="./lib/main.js" strategy="afterInteractive" />
    </div>
  );
}
