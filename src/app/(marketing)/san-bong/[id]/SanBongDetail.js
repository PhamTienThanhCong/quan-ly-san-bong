"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useApp } from "@quanlysanbong/app/contexts/AppContext";
import toast from "react-hot-toast";
import SendRequest from "@quanlysanbong/utils/SendRequest";
import { usePathname } from "next/navigation";
import { formatCurrency } from "@quanlysanbong/utils/Main";
import OrderStadiumModal from "./OrderStadiumModal";
import { ROLE_MANAGER } from "@quanlysanbong/constants/System";
import Link from "next/link";

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

  if (!stadiumData) return <p className="text-center">Đang tải dữ liệu...</p>;

  return (
    <div className="container py-5">
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
                  {field.name}, số lượng sân {field.count} - Giá thuê: {formatCurrency(field.price)}
                </li>
              ))}
          </ul>
          <p>
            <strong>Chủ sân:</strong> {stadiumData.owner.name} ({stadiumData.owner.phone})
          </p>
          {currentUser && currentUser.role === ROLE_MANAGER.USER && (
            <button className="btn btn-primary mt-3" onClick={handleOrder}>
              Đặt sân ngay
            </button>
          )}

          {Object.keys(currentUser).length === 0 && (
            <Link href="/dang-nhap">
              <button className="btn btn-primary mt-3">Đăng nhập để đặt sân</button>
            </Link>
          )}

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

        <div className="col-md-12 mt-4">
          <h4>Mô tả</h4>
          <p>{stadiumData.description}</p>
          <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} className="mb-4">
            {stadiumData.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} className="img-fluid w-100 rounded" alt="Sân bóng" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal đặt sân */}
      <OrderStadiumModal open={showModal} onClose={() => setShowModal(false)} stadiumData={stadiumData} />
    </div>
  );
};

export default SanBongDetail;
