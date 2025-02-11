const FAQsComponent = () => {
  return (
    <div className="container-fluid faq-section pb-5">
      <div className="container pb-5 overflow-hidden">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Câu Hỏi Thường Gặp</h4>
          <h1 className="display-5 mb-4">Giải Đáp Những Thắc Mắc Của Bạn</h1>
          <p className="mb-0">
            Chúng tôi đã tổng hợp những câu hỏi phổ biến nhất để giúp bạn hiểu rõ hơn về hệ thống đặt sân bóng và các
            dịch vụ chúng tôi cung cấp.
          </p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="accordion accordion-flush bg-light rounded p-5" id="accordionFlushSection">
              <div className="accordion-item rounded-top">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed rounded-top"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Làm thế nào để đặt sân?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushSection"
                >
                  <div className="accordion-body">
                    Bạn có thể đặt sân nhanh chóng thông qua nền tảng trực tuyến của chúng tôi. Chỉ cần chọn sân, thời
                    gian phù hợp và hoàn tất đặt chỗ.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    Có thể hủy đặt sân không?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushSection"
                >
                  <div className="accordion-body">
                    Có. Bạn có thể hủy đặt sân trước thời gian quy định. Hãy kiểm tra chính sách hoàn tiền của chúng tôi
                    để biết thêm chi tiết.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Hình thức thanh toán nào được chấp nhận?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushSection"
                >
                  <div className="accordion-body">
                    Chúng tôi chấp nhận thanh toán qua ví điện tử, thẻ tín dụng, chuyển khoản ngân hàng và tiền mặt tại
                    sân.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    Tôi có thể đặt sân theo giờ cố định hàng tuần không?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushSection"
                >
                  <div className="accordion-body">
                    Có. Chúng tôi cung cấp dịch vụ đặt sân cố định theo tuần. Vui lòng liên hệ với đội ngũ hỗ trợ để
                    biết thêm chi tiết.
                  </div>
                </div>
                <div className="accordion-item"></div>
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    Có hỗ trợ đặt sân cho sự kiện không?
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushSection"
                >
                  <div className="accordion-body">
                    Có. Chúng tôi cung cấp dịch vụ đặt sân cho các sự kiện đặc biệt. Vui lòng liên hệ với chúng tôi để
                    thảo luận về yêu cầu cụ thể của bạn.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseSix"
                    aria-expanded="false"
                    aria-controls="flush-collapseSix"
                  >
                    Có chính sách giảm giá cho thành viên không?
                  </button>
                </h2>
                <div
                  id="flush-collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingSix"
                  data-bs-parent="#accordionFlushSection"
                >
                  <div className="accordion-body">
                    Có. Chúng tôi có chính sách giảm giá đặc biệt cho các thành viên thân thiết. Hãy đăng ký thành viên
                    để nhận được nhiều ưu đãi hấp dẫn.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <div className="bg-primary rounded">
              <img src="img/about-2.png" className="img-fluid w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsComponent;
