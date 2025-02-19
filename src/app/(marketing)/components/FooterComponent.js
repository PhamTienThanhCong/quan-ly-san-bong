import { ADDRESS, EMAIL, MAIN_URL_APP, PHONE_NUMBER, WEB_NAME } from "@quanlysanbong/constants/MainContent";

const FooterComponent = () => {
  return (
    <div>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div
          className="container py-5 border-start-0 border-end-0"
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        >
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item">
                <a href="#" className="p-0" style={{ pointerEvents: "none" }}>
                  <h4 className="text-white">
                    <i className="fas fa-search-dollar me-3"></i>
                    {WEB_NAME}
                  </h4>
                </a>
                <p className="mb-4">
                  Chúng tôi cung cấp dịch vụ cho thuê sân chất lượng cao, với không gian rộng rãi và cơ sở vật chất
                  hiện đại. Đặt sân ngay hôm nay để có trải nghiệm tuyệt vời!
                </p>
                <div className="d-flex">
                  <a
                    href="#"
                    className="bg-primary d-flex rounded align-items-center py-2 px-3 me-2"
                    style={{ pointerEvents: "none" }}
                  >
                    <i className="fas fa-apple-alt text-white"></i>
                    <div className="ms-3">
                      <small className="text-white">Tải trên</small>
                      <h6 className="text-white">App Store</h6>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="bg-dark d-flex rounded align-items-center py-2 px-3 ms-2"
                    style={{ pointerEvents: "none" }}
                  >
                    <i className="fas fa-play text-primary"></i>
                    <div className="ms-3">
                      <small className="text-white">Tải trên</small>
                      <h6 className="text-white">Google Play</h6>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-2">
              <div className="footer-item">
                <h4 className="text-white mb-4">Liên kết nhanh</h4>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Về chúng tôi
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Dịch vụ
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Sân bóng
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Giá cả
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Blog
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Liên hệ
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Hỗ trợ</h4>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Chính sách bảo mật
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Điều khoản & Điều kiện
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Miễn trừ trách nhiệm
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Hỗ trợ khách hàng
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Câu hỏi thường gặp
                </a>
                <a href="#" style={{ pointerEvents: "none" }}>
                  <i className="fas fa-angle-right me-2"></i> Trợ giúp
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Thông tin liên hệ</h4>
                <div className="d-flex align-items-center">
                  <i className="fas fa-map-marker-alt text-primary me-3"></i>
                  <p className="text-white mb-0">{ADDRESS}</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-envelope text-primary me-3"></i>
                  <p className="text-white mb-0">{EMAIL}</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa fa-phone-alt text-primary me-3"></i>
                  <p className="text-white mb-0">{PHONE_NUMBER}</p>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="fab fa-firefox-browser text-primary me-3"></i>
                  <p className="text-white mb-0">{MAIN_URL_APP}</p>
                </div>
                <div className="d-flex">
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href="#"
                    style={{ pointerEvents: "none" }}
                  >
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href="#"
                    style={{ pointerEvents: "none" }}
                  >
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-3"
                    href="#"
                    style={{ pointerEvents: "none" }}
                  >
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a
                    className="btn btn-primary btn-sm-square rounded-circle me-0"
                    href="#"
                    style={{ pointerEvents: "none" }}
                  >
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
