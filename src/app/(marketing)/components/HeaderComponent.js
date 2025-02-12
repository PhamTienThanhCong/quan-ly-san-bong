"use client";

import { WEB_NAME } from "@quanlysanbong/constants/MainContent";
import CarouselComponent from "./CarouselComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
  const pathUrl = usePathname();

  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="text-primary">
            <img src="./img/logo.png" className="me-3" alt="Logo" style={{ height: "50px" }} />
            {WEB_NAME}
          </h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link href="/" className={`nav-item nav-link ${pathUrl === "/" ? "active" : ""}`}>
              Trang chủ
            </Link>
            <Link href="/gioi-thieu" className={`nav-item nav-link ${pathUrl === "/gioi-thieu" ? "active" : ""}`}>
              Giới thiệu
            </Link>
            <Link href="/san-bong" className={`nav-item nav-link ${pathUrl === "/san-bong" ? "active" : ""}`}>
              Danh sách sân bóng
            </Link>
            <Link href="/lien-he" className={`nav-item nav-link ${pathUrl === "/lien-he" ? "active" : ""}`}>
              Liên hệ
            </Link>
          </div>
          <Link href="/dang-nhap" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">
            Đăng nhập
          </Link>
        </div>
      </nav>
      <CarouselComponent pathUrl={pathUrl} />
      {/* {pathUrl === "/" ? (
        <CarouselComponent />
      ) : (
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
      )} */}
    </div>
  );
};

export default HeaderComponent;
