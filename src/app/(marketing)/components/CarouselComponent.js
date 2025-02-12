/* eslint-disable no-undef */
import { VIDEO_LINK, WEB_NAME } from "@quanlysanbong/constants/MainContent";
import Link from "next/link";
import { useEffect } from "react";

const LinkName = [
  { name: "Trang chủ", path: "/" },
  { name: "Giới thiệu", path: "/gioi-thieu" },
  { name: "Danh sách sân bóng", path: "/san-bong" },
  { name: "Liên hệ", path: "/lien-he" }
];

const CarouselComponent = ({ pathUrl }) => {
  useEffect(() => {
    // Set a timeout of 1 second (1000ms) before initializing the carousels
    let timeoutId;
    if (pathUrl === "/") {
      timeoutId = setTimeout(() => {
        // Hero Header carousel
        $(".header-carousel").owlCarousel({
          animateOut: "fadeOut",
          items: 1,
          margin: 0,
          stagePadding: 0,
          autoplay: true,
          smartSpeed: 500,
          dots: true,
          loop: true,
          nav: true,
          navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>']
        });

        // Attractions carousel
        $(".blog-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          center: false,
          dots: false,
          loop: true,
          margin: 25,
          nav: true,
          navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
          responsiveClass: true,
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 3 }
          }
        });

        // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1500,
          center: false,
          dots: true,
          loop: true,
          margin: 25,
          nav: true,
          navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
          responsiveClass: true,
          responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 },
            1200: { items: 3 }
          }
        });
      }, 30); // 1 second delay
    }

    // Cleanup function to destroy carousels if the component is unmounted
    return () => {
      clearTimeout(timeoutId);
      $(".header-carousel").trigger("destroy.owl.carousel");
      $(".blog-carousel").trigger("destroy.owl.carousel");
      $(".testimonial-carousel").trigger("destroy.owl.carousel");
    };
  }, [pathUrl]);

  if (pathUrl !== "/") {
    return (
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
            {LinkName.find((item) => item.path === pathUrl).name}
          </h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item">
              <Link href="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item active text-primary">
              {LinkName.find((item) => item.path === pathUrl).name}
            </li>
          </ol>
        </div>
      </div>
    );
  }
  return (
    <div className="header-carousel owl-carousel">
      <div className="header-carousel-item">
        <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Football Field" />
        <div className="carousel-caption">
          <div className="container">
            <div className="row gy-0 gx-5">
              <div className="col-lg-0 col-xl-5"></div>
              <div className="col-xl-7 animated fadeInLeft">
                <div className="text-sm-center text-md-end">
                  <h4 className="text-primary text-uppercase fw-bold mb-4">Chào Mừng Đến Với {WEB_NAME}</h4>
                  <h1 className="display-4 text-uppercase text-white mb-4">Thuê Sân Bóng Dễ Dàng - Nhanh Chóng</h1>
                  <p className="mb-5 fs-5">
                    Đặt sân bóng nhanh chóng, tiện lợi với hệ thống đặt sân trực tuyến. Trải nghiệm không gian thi đấu
                    chuyên nghiệp ngay hôm nay!
                  </p>
                  <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                    <a
                      className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                      href={`${VIDEO_LINK}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-play-circle me-2"></i> Xem Video
                    </a>
                    <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="/san-bong">
                      Đặt Sân Ngay
                    </Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                    <h2 className="text-white me-2">Theo Dõi Chúng Tôi:</h2>
                    <div className="d-flex justify-content-end ms-2">
                      <a className="btn btn-md-square btn-light rounded-circle me-2" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle ms-2" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-carousel-item">
        <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Football Field" />
        <div className="carousel-caption">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 animated fadeInUp">
                <div className="text-center">
                  <h4 className="text-primary text-uppercase fw-bold mb-4">Đặt Sân Nhanh Chóng</h4>
                  <h1 className="display-4 text-uppercase text-white mb-4">Hệ Thống Đặt Sân Online 24/7</h1>
                  <p className="mb-5 fs-5">
                    Đừng bỏ lỡ cơ hội tranh tài trên những sân bóng chất lượng cao. Đặt sân ngay để có trải nghiệm tuyệt
                    vời!
                  </p>
                  <div className="d-flex justify-content-center flex-shrink-0 mb-4">
                    <a
                      className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                      href={`${VIDEO_LINK}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fas fa-play-circle me-2"></i> Xem Video
                    </a>
                    <Link className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="/san-bong">
                      Đặt Sân Ngay
                    </Link>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <h2 className="text-white me-2">Theo Dõi Chúng Tôi:</h2>
                    <div className="d-flex justify-content-end ms-2">
                      <a className="btn btn-md-square btn-light rounded-circle me-2" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn btn-md-square btn-light rounded-circle ms-2" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
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
};

export default CarouselComponent;
