"use client";

import { WEB_NAME } from "@quanlysanbong/constants/MainContent";
import CarouselComponent from "./CarouselComponent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useApp } from "@quanlysanbong/app/contexts/AppContext";

const HeaderComponent = () => {
  const pathUrl = usePathname();
  const { currentUser } = useApp();

  useEffect(() => {
    setTimeout(() => {
      const backToTopButton = document.querySelector(".back-to-top");
      backToTopButton.style.display = "none"; // Ẩn button "back to top"
      window.addEventListener("scroll", function () {
        var navbar = document.querySelector(".navbar");
        if (window.scrollY > 45) {
          navbar.classList.add("sticky-top", "shadow-sm");
        } else {
          navbar.classList.remove("sticky-top", "shadow-sm");
        }
      });

      // Kiểm tra khi người dùng cuộn trang
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          backToTopButton.style.display = "flex"; // Hiện button "back to top"
        } else {
          backToTopButton.style.display = "none"; // Ẩn button "back to top"
        }
      });
      backToTopButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngừng hành động mặc định của nút
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Cuộn lên đầu trang với hiệu ứng mượt mà
        });
      });
    }, 10);
  }, []);

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
    // close #navbarCollapse
    const navbarCollapse = document.getElementById("navbarCollapse");
    navbarCollapse.classList.remove("show");
  }, [pathUrl]);

  const logout = () => {
    // Logout
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container-fluid position-relative p-0 header-container">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <a href="" className="navbar-brand p-0">
          <h1 className="text-primary">
            <img src="/img/logo.png" className="me-3" alt="Logo" style={{ height: "50px" }} />
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
          {Object.keys(currentUser).length > 0 ? (
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currentUser.name}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <Link href="#" className="dropdown-item">
                    Thông tin cá nhân
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={logout} className="dropdown-item">
                    Đăng xuất
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link href="/dang-nhap" className="btn btn-primary rounded-pill py-2 px-4 my-3 my-lg-0 flex-shrink-0">
              Đăng nhập
            </Link>
          )}
        </div>
      </nav>
      <CarouselComponent pathUrl={pathUrl} />
    </div>
  );
};

export default HeaderComponent;
