const OurFeaturesComponent = () => {
  return (
    <div className="container-fluid feature pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Dịch Vụ Nổi Bật</h4>
          <h1 className="display-5 mb-4">Trải nghiệm sân chất lượng, đặt sân dễ dàng</h1>
          <p className="mb-0">
            Chúng tôi cung cấp dịch vụ đặt sân chuyên nghiệp, giúp bạn nhanh chóng tìm kiếm sân phù hợp với
            nhu cầu của mình.
          </p>
        </div>
        <div className="row g-3">
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className="fas fa-futbol fa-4x text-primary"></i>
              </div>
              <h4>Hệ Thống Đặt Sân</h4>
              <p className="mb-4">Đặt sân nhanh chóng, tiện lợi chỉ với vài cú click.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className="fas fa-map-marker-alt fa-4x text-primary"></i>
              </div>
              <h4>Vị Trí Thuận Lợi</h4>
              <p className="mb-4">Hệ thống sân rộng khắp, dễ dàng tiếp cận.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className="fas fa-star fa-4x text-primary"></i>
              </div>
              <h4>Chất Lượng Cao</h4>
              <p className="mb-4">Sân bóng đạt chuẩn, đảm bảo trải nghiệm tốt nhất.</p>
            </div>
          </div>
          {/* Chi phí rõ ràng */}
          <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
            <div className="feature-item p-4">
              <div className="feature-icon p-4 mb-4">
                <i className="fas fa-coins fa-4x text-primary"></i>
              </div>
              <h4>Chi Phí Rõ Ràng</h4>
              <p className="mb-4">Giá cả cạnh tranh, rõ ràng, không phát sinh thêm chi phí.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeaturesComponent;
