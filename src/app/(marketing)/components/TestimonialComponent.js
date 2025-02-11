const TestimonialComponent = () => {
  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Đánh Giá</h4>
          <h1 className="display-5 mb-4">Khách Hàng Nói Gì Về Chúng Tôi?</h1>
          <p className="mb-0">
            Những phản hồi thực tế từ các khách hàng đã trải nghiệm dịch vụ đặt sân bóng tại hệ thống của chúng tôi.
            Chúng tôi luôn cam kết mang lại trải nghiệm tốt nhất cho mọi người chơi.
          </p>
        </div>
        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.2s">
          <div className="testimonial-item">
            <div className="testimonial-quote-left">
              <i className="fas fa-quote-left fa-2x"></i>
            </div>
            <div className="testimonial-img">
              <img src="img/testimonial-1.jpg" className="img-fluid" alt="Image" />
            </div>
            <div className="testimonial-text">
              <p className="mb-0">
                "Dịch vụ đặt sân cực kỳ nhanh chóng và tiện lợi. Sân bóng chất lượng, đội ngũ hỗ trợ nhiệt tình. Tôi rất
                hài lòng!"
              </p>
            </div>
            <div className="testimonial-title">
              <div>
                <h4 className="mb-0">Nguyễn Văn A</h4>
                <p className="mb-0">Cầu Thủ Nghiệp Dư</p>
              </div>
              <div className="d-flex text-primary">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial-quote-right">
              <i className="fas fa-quote-right fa-2x"></i>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-quote-left">
              <i className="fas fa-quote-left fa-2x"></i>
            </div>
            <div className="testimonial-img">
              <img src="img/testimonial-2.jpg" className="img-fluid" alt="Image" />
            </div>
            <div className="testimonial-text">
              <p className="mb-0">
                "Hệ thống đặt sân dễ sử dụng, nhiều khung giờ trống để lựa chọn. Tôi đã giới thiệu cho bạn bè cùng sử
                dụng."
              </p>
            </div>
            <div className="testimonial-title">
              <div>
                <h4 className="mb-0">Trần Thị B</h4>
                <p className="mb-0">Người Yêu Thể Thao</p>
              </div>
              <div className="d-flex text-primary">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <div className="testimonial-quote-right">
              <i className="fas fa-quote-right fa-2x"></i>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-quote-left">
              <i className="fas fa-quote-left fa-2x"></i>
            </div>
            <div className="testimonial-img">
              <img src="img/testimonial-3.jpg" className="img-fluid" alt="Image" />
            </div>
            <div className="testimonial-text">
              <p className="mb-0">
                "Sân bóng đẹp, sạch sẽ, đặt sân nhanh chóng mà không cần phải gọi điện nhiều lần. Rất đáng để trải
                nghiệm!"
              </p>
            </div>
            <div className="testimonial-title">
              <div>
                <h4 className="mb-0">Lê Văn C</h4>
                <p className="mb-0">Huấn Luyện Viên Bóng Đá</p>
              </div>
              <div className="d-flex text-primary">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
            </div>
            <div className="testimonial-quote-right">
              <i className="fas fa-quote-right fa-2x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
