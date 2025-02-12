/* eslint-disable @next/next/no-img-element */
import "@quanlysanbong/styles/style.css";
import Script from "next/script";
import AboutUsComponent from "../components/AboutUsComponent";
import OurFeaturesComponent from "../components/OurFeaturesComponent";
import OurOfferComponent from "../components/OurOfferComponent";
import FAQsComponent from "../components/FAQsComponent";
import OurTeamComponent from "../components/OurTeamComponent";
import TestimonialComponent from "../components/TestimonialComponent";
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

export default function AboutPage() {
  return (
    <>
      <AboutUsComponent />

      <OurFeaturesComponent />

      <OurOfferComponent />

      <OurTeamComponent />

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
    </>
  );
}
