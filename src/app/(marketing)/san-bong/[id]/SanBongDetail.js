"use client";

import { useEffect, useState } from "react";
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
import SendRequest from "@quanlysanbong/utils/SendRequest";
import { usePathname } from "next/navigation";
import { formatCurrency } from "@quanlysanbong/utils/Main";

const SanBongDetail = () => {
  const { currentUser } = useApp();
  const pathUrl = usePathname();
  const id = pathUrl.split("/").pop();

  const [stadiumData, setStadiumData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchStadiumData = async (id) => {
      const res = await SendRequest("get", `/api/stadiums/${id}`);
      if (res.payload) {
        setStadiumData(res.payload);
      }
    };
    if (id) {
      fetchStadiumData(id);
    }
  }, [id]);

  const handleOrder = () => {
    if (currentUser) {
      setShowModal(true);
    } else {
      toast.error("Vui lòng đăng nhập để đặt sân");
    }
  };

  const handleConfirm = () => {
    toast.success("Đặt sân thành công!");
    setShowModal(false);
  };

  if (!stadiumData) return <p className="text-center">Đang tải dữ liệu...</p>;

  return (
    <div className="container py-5">
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="mb-4">
        {stadiumData.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} className="img-fluid w-100 rounded" alt="Sân bóng" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row">
        <div className="col-md-6">
          <h2>{stadiumData.stadiumName}</h2>
          <p>
            <strong>Địa chỉ:</strong> {stadiumData.locationDetail}, {stadiumData.location}
          </p>
          <p>
            <strong>Giờ mở cửa:</strong> {stadiumData.openingTime} - {stadiumData.closingTime}
          </p>
          <p>
            <strong>Giá thuê:</strong>
          </p>
          <ul>
            {Object.values(stadiumData.fields)
              .filter((f) => f.isAvailable)
              .map((field, index) => (
                <li key={index}>
                  {field.name}: {formatCurrency(field.price)}
                </li>
              ))}
          </ul>
          <p>
            <strong>Chủ sân:</strong> {stadiumData.owner.name} ({stadiumData.owner.phone})
          </p>
          <button className="btn btn-primary mt-3" onClick={handleOrder}>
            Đặt sân ngay
          </button>
        </div>
        <div className="col-md-6">
          {stadiumData && (
            <iframe
              src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=${encodeURIComponent(stadiumData.locationDetail + ", " + stadiumData.location)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          )}
        </div>
      </div>

      {/* Modal đặt sân */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận đặt sân</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Bạn có chắc chắn muốn đặt sân này không?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Hủy
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
