import { WEB_NAME } from "@quanlysanbong/constants/MainContent";
import CarouselComponent from "./CarouselComponent";
import Link from "next/link";

const HeaderComponent = () => {
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
            <Link href="/" className="nav-item nav-link active">
              Trang chủ
            </Link>
            <Link href="/gioi-thieu" className="nav-item nav-link">
              Giới thiệu
            </Link>
            <Link href="/san-bong" className="nav-item nav-link">
              Danh sách sân bóng
            </Link>
            <Link href="/lien-he" className="nav-item nav-link">
              Liên hệ
            </Link>
          </div>
          <Link href="/dang-nhap" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">
            Đăng nhập
          </Link>
        </div>
      </nav>

      <CarouselComponent />
    </div>
  );
};

export default HeaderComponent;
