import { VIDEO_LINK, WEB_NAME } from "@quanlysanbong/constants/MainContent";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const LinkName = [
  { name: "Trang chủ", path: "/" },
  { name: "Giới thiệu", path: "/gioi-thieu" },
  { name: "Danh sách sân bóng", path: "/san-bong" },
  { name: "Liên hệ", path: "/lien-he" },
  { name: "Đăng nhập", path: "/dang-nhap" },
  { name: "Đăng ký", path: "/dang-ky" }
];

const CarouselComponent = ({ pathUrl }) => {
  if (pathUrl !== "/") {
    let NameStadium = LinkName.find((item) => item.path === pathUrl)?.name || "";
    let parentPath = null;
    if (pathUrl.includes("/san-bong/")) {
      NameStadium = "Chi Tiết Sân Bóng";
      parentPath = {
        name: "Danh sách sân bóng",
        path: "/san-bong"
      };
    }
    return (
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4">{NameStadium}</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link href="/">Trang chủ</Link>
            </li>
            {parentPath && (
              <li className="breadcrumb-item">
                <Link href={parentPath.path}>{parentPath.name}</Link>
              </li>
            )}
            <li className="breadcrumb-item active text-primary">{NameStadium}</li>
          </ol>
        </div>
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      navigation
      className="mySwiper"
    >
      {["img/carousel-1.jpg", "img/carousel-2.jpg"].map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} className="img-fluid w-100" alt="Football Field" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row gx-5 justify-content-end">
                <div className="col-xl-7">
                  <div className="text-sm-center text-md-end">
                    <h4 className="text-primary text-uppercase fw-bold mb-4">Chào Mừng Đến Với {WEB_NAME}</h4>
                    <h1 className="display-4 text-uppercase text-white mb-4">Thuê Sân Bóng Dễ Dàng - Nhanh Chóng</h1>
                    <p className="mb-5 fs-5">
                      Đặt sân bóng nhanh chóng, tiện lợi với hệ thống đặt sân trực tuyến. Trải nghiệm không gian thi đấu
                      chuyên nghiệp ngay hôm nay!
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-end">
                      <a
                        className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                        href={VIDEO_LINK}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fas fa-play-circle me-2"></i> Xem Video
                      </a>
                      <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="/san-bong">
                        Đặt Sân Ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselComponent;
