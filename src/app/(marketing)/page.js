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
import BoxFieldComponent from "./components/BoxFieldComponent";

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

const fields = [
  {
    id: 1,
    name: "Sân Bóng 1",
    image: "/img/offer-1.jpg",
    location: "Hà Nội A",
    status: { available: 7, total: 7 }, // 7/7
    owner: "Nguyễn Văn A"
  },
  {
    id: 2,
    name: "Sân Bóng 2",
    image: "/img/offer-2.jpg",
    location: "Hà Nội B",
    status: { available: 5, total: 7 }, // 5/7
    owner: "Trần Thị B"
  },
  {
    id: 3,
    name: "Sân Bóng 3",
    image: "/img/offer-3.jpg",
    location: "Hà Nội B",
    status: { available: 5, total: 7 }, // 5/7
    owner: "Trần Thị B"
  },
  {
    id: 4,
    name: "Sân Bóng 4",
    image: "/img/offer-4.jpg",
    location: "Hà Nội B",
    status: { available: 5, total: 7 }, // 5/7
    owner: "Trần Thị B"
  },
  {
    id: 5,
    name: "Sân Bóng 5",
    image: "/img/offer-1.jpg",
    location: "Hà Nội B",
    status: { available: 5, total: 7 }, // 5/7
    owner: "Trần Thị B"
  },
  {
    id: 6,
    name: "Sân Bóng 6",
    image: "/img/offer-2.jpg",
    location: "Hà Nội B",
    status: { available: 5, total: 7 }, // 5/7
    owner: "Trần Thị B"
  }
  // Add more fields here
];
export default function Home() {
  return (
    <div>
      <AboutUsComponent />

      <div className="container-fluid service pb-5">
        <div className="container">
          <div className="text-center mx-auto pb-3 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
            <h4 className="text-primary">Sân bóng phổ biến</h4>
            <h1 className="display-5">Các sân bóng phổ biến tại Hà Nội</h1>
          </div>
          <div className="row g-3">
            {fields.map((field) => (
              <BoxFieldComponent key={field.id} field={field} />
            ))}
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
    </div>
  );
}
