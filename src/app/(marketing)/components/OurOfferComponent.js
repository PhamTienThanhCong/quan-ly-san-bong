const OurOfferComponent = () => {
  return (
    <div className="container-fluid offer-section pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Lợi Ích Dành Cho Chủ Sân</h4>
          <h1 className="display-5 mb-4">Tối Ưu Hóa Doanh Thu - Quản Lý Sân Hiệu Quả</h1>
          <p className="mb-0">
            Chúng tôi mang đến giải pháp đặt sân hiện đại, giúp bạn khai thác tối đa tiềm năng sân, thu hút nhiều
            khách hàng hơn và đơn giản hóa việc quản lý đặt sân.
          </p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="nav nav-pills bg-light rounded p-5">
              <a className="accordion-link p-4 active mb-4" data-bs-toggle="pill" href="#collapseOne">
                <h5 className="mb-0">Gia Tăng Doanh Thu Nhờ Đặt Sân Online</h5>
              </a>
              <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseTwo">
                <h5 className="mb-0">Mở Rộng Tầm Phủ Sóng</h5>
              </a>
              <a className="accordion-link p-4 mb-4" data-bs-toggle="pill" href="#collapseThree">
                <h5 className="mb-0">Hệ Thống Quản Lý Đặt Sân Thông Minh</h5>
              </a>
              <a className="accordion-link p-4 mb-0" data-bs-toggle="pill" href="#collapseFour">
                <h5 className="mb-0">Thanh Toán Nhanh Chóng - Minh Bạch</h5>
              </a>
            </div>
          </div>
          <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.4s">
            <div className="tab-content">
              <div id="collapseOne" className="tab-pane fade show p-0 active">
                <h1 className="display-5 mb-4">Gia Tăng Doanh Thu</h1>
                <p className="mb-4">
                  Tận dụng hệ thống đặt sân trực tuyến để đảm bảo không còn giờ trống, tối ưu hóa doanh thu một cách bền
                  vững.
                </p>
              </div>
              <div id="collapseTwo" className="tab-pane fade show p-0">
                <h1 className="display-5 mb-4">Mở Rộng Khách Hàng</h1>
                <p className="mb-4">
                  Đưa sân của bạn tiếp cận nhiều người chơi hơn thông qua nền tảng trực tuyến, nâng cao tỷ lệ đặt
                  sân và gia tăng lợi nhuận.
                </p>
              </div>
              <div id="collapseThree" className="tab-pane fade show p-0">
                <h1 className="display-5 mb-4">Quản Lý Đặt Sân Dễ Dàng</h1>
                <p className="mb-4">
                  Hệ thống quản lý đặt sân tự động giúp theo dõi lịch trình, tránh trùng lặp, và cải thiện hiệu suất
                  kinh doanh.
                </p>
              </div>
              <div id="collapseFour" className="tab-pane fade show p-0">
                <h1 className="display-5 mb-4">Thanh Toán Nhanh Gọn</h1>
                <p className="mb-4">
                  Tích hợp nhiều phương thức thanh toán an toàn, minh bạch, giúp bạn quản lý dòng tiền hiệu quả và
                  chuyên nghiệp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfferComponent;
