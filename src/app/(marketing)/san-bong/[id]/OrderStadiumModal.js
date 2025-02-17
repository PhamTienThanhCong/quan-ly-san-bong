"use client";

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { formatCurrency } from "@quanlysanbong/utils/Main";
import SendRequest from "@quanlysanbong/utils/SendRequest";
import { WEB_NAME } from "@quanlysanbong/constants/MainContent";

const OrderStadiumModal = ({ open, onClose, stadiumData }) => {
  const [selectedDate, setSelectedDate] = useState(""),
    [selectedField, setSelectedField] = useState(""),
    [selectedTime, setSelectedTime] = useState(""),
    [errorMessage, setErrorMessage] = useState(""),
    [orderSuccess, setOrderSuccess] = useState({
      "userId": "67aec96fab0a3501aa8bc807",
      "stadiumId": "67b2b5c976a1f8ded1e6c56f",
      "ownerId": "67b2389076a1f8ded1e6c56b",
      "field": "7",
      "time": "7:40 - 9:10",
      "deposit": 180000,
      "remaining": 300000,
      "status": "pending",
      "date": "2025-02-17",
      "created_at": "2025-02-17T06:47:22.554Z",
      "_id": "67b2db7a76a1f8ded1e6c570"
  });

  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    if (open){
      // reset all
      setErrorMessage("");
      // setOrderSuccess(null);

      // reset form
      setSelectedDate("");
      setSelectedField("");
      setSelectedTime("");
    }
  },[])

  const handleGetQr = async (orderSuccess) => {
    const content = `deposit ${orderSuccess._id} ${orderSuccess.stadiumId}`;

    const payload = {
      accountNo: "0396396332",
      accountName: `${WEB_NAME} dat coc`,
      acqId: 970422,
      amount: orderSuccess.deposit,
      addInfo: content,
      format: "text",
      template: "compact2",
    };

    const res = await fetch("https://api.vietqr.io/v2/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setQrCode(data.data.qrDataURL);
  };

  useEffect(() => {
    handleGetQr(orderSuccess);
  }, [orderSuccess]);  

  const today = new Date();
  const dateOptions = [];
  for (let i = 0; i < 5; i++) {
    const futureDate = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
    dateOptions.push(
      `${futureDate.getFullYear()}-${(futureDate.getMonth() + 1).toString().padStart(2, "0")}-${futureDate
        .getDate()
        .toString()
        .padStart(2, "0")}`
    );
  }

  useEffect(() => {
    setSelectedDate(dateOptions[0]);
  }, [dateOptions]);

  const convertDateFormat = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };

  const handleOrder = async () => {
    if (!selectedDate || !selectedField || !selectedTime) {
      setErrorMessage("Vui lòng chọn đầy đủ thông tin");
      return;
    }
    if (
      window.confirm(
        `Xác nhận đặt sân: ${stadiumData.stadiumName} - ${selectedField} - ${selectedTime} vào ngày ${convertDateFormat(selectedDate)}`
      )
    ) {
      const payload = {
        stadiumId: stadiumData._id,
        ownerId: stadiumData.ownerId,
        deposit: stadiumData.fields[selectedField].price,
        field: selectedField,
        time: selectedTime,
        date: selectedDate
      };

      const res = await SendRequest("post", "/api/orders", payload);

      setOrderSuccess(res.payload);

      // reset form
      setSelectedDate(dateOptions[0]);
      setSelectedField("");
      setSelectedTime("");
    }
  };

  return (
    <Modal show={open} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Đặt {stadiumData.stadiumName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {orderSuccess ? (
          <div>
            <p><strong>Thông tin đặt sân:</strong></p>
            <ul>
              <li><strong>Ngày đặt:</strong> {convertDateFormat(orderSuccess.date)}</li>
              <li><strong>Loại sân:</strong> {stadiumData.fields[orderSuccess.field].name}</li>
              <li><strong>Khung giờ:</strong> {orderSuccess.time}</li>
              <li><strong>Tiền cọc:</strong> {formatCurrency(orderSuccess.deposit)}</li>
              <li><strong>Còn lại:</strong> {formatCurrency(orderSuccess.remaining)}</li>
              <li>
                <strong>Trạng thái:</strong> {orderSuccess.status === "pending" ? "Chờ xác nhận" : "Đã xác nhận"}
              </li>
            </ul>
            <p><strong>Chủ sân:</strong> {stadiumData.owner.name} ({stadiumData.owner.phone})</p>
            <p><strong>Chuyển khoản qua ngân hàng:</strong></p>
            <div className="d-flex justify-content-center mt-2">
            {qrCode.length > 0 ? (
              <img src={qrCode} alt="Chuyển khoản" className="img-fluid" />
            ):(
              <p>Đang tải mã QR...</p>
            )}
            </div>
          </div>
        ) : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Chọn ngày đặt sân</Form.Label>
              <Form.Select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                {dateOptions.map((date, index) => (
                  <option key={index} value={date}>{`${convertDateFormat(date)}`}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Chọn loại sân</Form.Label>
              <Form.Select value={selectedField} onChange={(e) => setSelectedField(e.target.value)}>
                <option value="">Chọn loại sân</option>
                {Object.keys(stadiumData.fields).map((field, index) => {
                  if (!stadiumData.fields[field].isAvailable) return null;
                  return (
                    <option key={index} value={field}>
                      {stadiumData.fields[field].name} - {formatCurrency(stadiumData.fields[field].price)} VND
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Chọn khung giờ</Form.Label>
              <Form.Select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                <option value="">Chọn khung giờ</option>
                {selectedField &&
                  stadiumData.fields[selectedField] &&
                  stadiumData.fields[selectedField].timeDetail.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
              </Form.Select>
            </Form.Group>

            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Hủy
        </Button>
        <Button variant="primary" onClick={handleOrder}>
          {orderSuccess ? "Xác nhận" : "Xác nhận đặt sân"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderStadiumModal;
