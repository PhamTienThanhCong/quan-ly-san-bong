"use client";
import { Accordion, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQsComponent = () => {
  const faqs = [
    {
      question: "Làm thế nào để đặt sân?",
      answer:
        "Bạn có thể đặt sân nhanh chóng thông qua nền tảng trực tuyến của chúng tôi. Chỉ cần chọn sân, thời gian phù hợp và hoàn tất đặt chỗ."
    },
    {
      question: "Có thể hủy đặt sân không?",
      answer:
        "Có. Bạn có thể hủy đặt sân trước thời gian quy định. Hãy kiểm tra chính sách hoàn tiền của chúng tôi để biết thêm chi tiết."
    },
    {
      question: "Hình thức thanh toán nào được chấp nhận?",
      answer: "Chúng tôi chấp nhận thanh toán qua ví điện tử, thẻ tín dụng, chuyển khoản ngân hàng và tiền mặt tại sân."
    },
    {
      question: "Tôi có thể đặt sân theo giờ cố định hàng tuần không?",
      answer:
        "Có. Chúng tôi cung cấp dịch vụ đặt sân cố định theo tuần. Vui lòng liên hệ với đội ngũ hỗ trợ để biết thêm chi tiết."
    },
    {
      question: "Có hỗ trợ đặt sân cho sự kiện không?",
      answer:
        "Có. Chúng tôi cung cấp dịch vụ đặt sân cho các sự kiện đặc biệt. Vui lòng liên hệ với chúng tôi để thảo luận về yêu cầu cụ thể của bạn."
    },
    {
      question: "Có chính sách giảm giá cho thành viên không?",
      answer:
        "Có. Chúng tôi có chính sách giảm giá đặc biệt cho các thành viên thân thiết. Hãy đăng ký thành viên để nhận được nhiều ưu đãi hấp dẫn."
    }
  ];

  return (
    <div className="container-fluid faq-section pb-5 wow fadeInUp" data-wow-delay="0.2s">
      <div className="container pb-5 overflow-hidden">
        <div className="text-center mx-auto pb-5" style={{ maxWidth: "800px" }}>
          <h4 className="text-primary">Câu Hỏi Thường Gặp</h4>
          <h1 className="display-5 mb-4">Giải Đáp Những Thắc Mắc Của Bạn</h1>
          <p className="mb-0">
            Chúng tôi đã tổng hợp những câu hỏi phổ biến nhất để giúp bạn hiểu rõ hơn về hệ thống đặt sân bóng và các
            dịch vụ chúng tôi cung cấp.
          </p>
        </div>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
            <Accordion defaultActiveKey="0" className="bg-light rounded p-3">
              {faqs.map((faq, index) => (
                <Accordion.Item eventKey={String(index)} key={index}>
                  <Accordion.Header>{faq.question}</Accordion.Header>
                  <Accordion.Body>{faq.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
            <div className="bg-primary rounded">
              <img src="img/about-2.png" className="img-fluid w-100" alt="FAQ Illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsComponent;
