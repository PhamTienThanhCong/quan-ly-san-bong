"use client";

import { useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useApp } from "@quanlysanbong/app/contexts/AppContext";
import toast from "react-hot-toast";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SanBongDetail = () => {
  const { currentUser } = useApp();
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [price, setPrice] = useState(0);

  const handleOrder = () => {
    if (Object.keys(currentUser).length > 0) {
      setShowModal(true);
    } else {
      toast.error("Vui lòng đăng nhập để đặt sân");
    }
  };

  const handleConfirm = () => {
    // Xử lý logic đặt sân ở đây
    toast.success("Đặt sân thành công!");
    setShowModal(false);
  };

  const calculatePrice = () => {
    let basePrice = 0;
    if (selectedType === "5") basePrice = 200000;
    else if (selectedType === "7") basePrice = 300000;
    else if (selectedType === "11") basePrice = 500000;

    // Giả sử giá tăng 20% vào buổi tối (sau 18:00)
    const hour = parseInt(selectedTime.split(":")[0]);
    if (hour >= 18) basePrice *= 1.2;

    setPrice(basePrice);
  };

  return (
    <div className="container py-5">
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="mb-4">
        <SwiperSlide>
          <img src="/img/offer-1.jpg" className="img-fluid w-100 img-san-bong rounded" alt="Sân bóng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/offer-2.jpg" className="img-fluid w-100 img-san-bong rounded" alt="Sân bóng" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/offer-3.jpg" className="img-fluid w-100 img-san-bong rounded" alt="Sân bóng" />
        </SwiperSlide>
      </Swiper>
      {/* Thông tin và bản đồ */}
      <div className="row">
        <div className="col-md-6 my-1">
          <h2>Sân Bóng ABC</h2>
          <p>
            <strong>Địa chỉ:</strong> 123 Đường ABC, Quận XYZ, Thành phố
          </p>
          <p className="mb-1">
            <strong>Số lượng sân:</strong>
          </p>
          <ul>
            <li>5 người: 2 sân</li>
            <li>7 người: 3 sân</li>
            <li>11 người: 1 sân</li>
          </ul>
          <p>
            <strong>Giờ mở cửa:</strong> 6:00 - 22:00
          </p>
          <p>
            <strong>Giá thuê:</strong> 200.000 - 500.000 VND/h
          </p>
          <div className="w-100 d-flex justify-content-between">
            <button className="btn btn-primary mt-3" onClick={handleOrder}>
              Đặt sân ngay
            </button>
            <div className="mt-3 d-flex align-items-center">
              <button className="btn btn-link me-2" onClick={() => setLiked(!liked)}>
                <i className={`fa${liked ? "s" : "r"} fa-heart`} style={{ color: liked ? "red" : "black" }}></i>{" "}
                {liked ? "Đã thích" : "Yêu thích"}
              </button>
              <button className="btn btn-link">
                <i className="fas fa-share-alt"></i> Chia sẻ
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.656733981162!2d106.6631643758584!3d10.759927859665198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fd492cc8f4b%3A0xe0c16f348e0c00cf!2zU8OibiBC4bq_bmc!5e0!3m2!1sen!2s!4v1643837729195!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Back to Top Button */}
      <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>

      {/* Modal đặt sân */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Đặt sân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Loại sân</Form.Label>
              <Form.Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                <option value="">Chọn loại sân</option>
                <option value="5">5 người</option>
                <option value="7">7 người</option>
                <option value="11">11 người</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ngày</Form.Label>
              <Form.Control type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giờ</Form.Label>
              <Form.Control type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giá tiền</Form.Label>
              <Form.Control type="text" value={price.toLocaleString() + " VND"} readOnly />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SanBongDetail;
