"use client";

import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { formatCurrency } from "@quanlysanbong/utils/Main";
import SendRequest from "@quanlysanbong/utils/SendRequest";
import { WEB_NAME } from "@quanlysanbong/constants/MainContent";
import Link from "next/link";

const OrderStadiumModal = ({ open, onClose, stadiumData }) => {
  const [selectedDate, setSelectedDate] = useState(""),
    [selectedField, setSelectedField] = useState(""),
    [selectedTime, setSelectedTime] = useState(""),
    [errorMessage, setErrorMessage] = useState(""),
    [orderSuccess, setOrderSuccess] = useState(null),
    [orderDone, setOrderDone] = useState(false);

  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    if (open) {
      // reset all
      setErrorMessage("");
      // setOrderSuccess(null);

      // reset form
      setSelectedDate("");
      setSelectedField("");
      setSelectedTime("");
    }
  }, [open]);

  const handleGetQr = async (orderSuccess) => {
    const content = `cat coc ${orderSuccess._id}`;

    const payload = {
      accountNo: "2153806752",
      accountName: `${WEB_NAME} dat coc`,
      acqId: 970418,
      amount: orderSuccess.deposit,
      addInfo: content,
      format: "text",
      template: "compact2"
    };

    // const res = await fetch("https://api.vietqr.io/v2/generate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(payload)
    // });

    // const data = await res.json();
    setQrCode(`https://qr.sepay.vn/img?acc=9624720052003&bank=BIDV&amount=${orderSuccess.deposit}&des=${content}&template=compact2`);
  };

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

  // useEffect(() => {
  //   setSelectedDate(dateOptions[0]);
  // }, [dateOptions]);

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

      const checkOrder = async (orderSuccess) => {
        const res = await SendRequest("PUT", `/api/webhooks`, {
          content: `cat coc ${orderSuccess._id}`,
          transferAmount: orderSuccess.deposit
        });
        if (res.payload && res.payload === "done") {
          return true;
        }
        return false;
      };
      if (res.payload) {
        await handleGetQr(res.payload);

        // Set timeout to wait for 5 seconds
        setTimeout(() => {
          let timeId = setInterval(async () => {
            // Perform async check
            const _check = await checkOrder(res.payload);

            if (_check) {
              // If the order is confirmed, clear the interval
              clearInterval(timeId);

              // Update the order status
              await SendRequest("put", "/api/orders", {
                id: res.payload._id,
                status: "confirmed"
              });

              // Update the state with the confirmed order status
              setOrderSuccess({ ...res.payload, status: "confirmed" });
              setOrderDone(true);
            }
          }, 3000); // Check every 3 seconds
        }, 5000); // Wait 5 seconds before starting the interval
      }

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
            <p>
              <strong>Thông tin đặt sân:</strong>
            </p>
            <ul>
              <li>
                <strong>Ngày đặt:</strong> {convertDateFormat(orderSuccess.date)}
              </li>
              <li>
                <strong>Loại sân:</strong> {stadiumData.fields[orderSuccess.field].name}
              </li>
              <li>
                <strong>Khung giờ:</strong> {orderSuccess.time}
              </li>
              <li>
                <strong>Tiền cọc:</strong> {formatCurrency(orderSuccess.deposit)}
              </li>
              <li>
                <strong>Còn lại:</strong> {formatCurrency(orderSuccess.remaining)}
              </li>
              <li>
                <strong>Trạng thái:</strong> {orderSuccess.status === "pending" ? "Chờ xác nhận" : "Đã xác nhận"}
              </li>
            </ul>
            <p>
              <strong>Chủ sân:</strong> {stadiumData.owner.name} ({stadiumData.owner.phone})
            </p>
            {orderDone ? (
              <h3 className="text-success text-center">
                <i className="fa fa-check-circle" />
                <br />
                Đã nhận tiền cọc thành công
              </h3>
            ) : (
              <>
                <p>
                  <strong>Chuyển khoản qua ngân hàng:</strong>
                </p>
                <div className="d-flex justify-content-center mt-2">
                  {qrCode.length > 0 ? (
                    <img src={qrCode} alt="Chuyển khoản" className="img-fluid" />
                  ) : (
                    <p>Đang tải mã QR...</p>
                  )}
                </div>
              </>
            )}
          </div>
        ) : (
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Chọn ngày đặt sân</Form.Label>
              <Form.Select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                <option value="">Chọn ngày đặt sân</option>
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
        {orderDone ? (
          <>
            <Link href="/trang-ca-nhan">
              <Button variant="primary">Xem lịch sử đặt sân</Button>
            </Link>
            <Button variant="secondary" onClick={onClose}>
              Đóng
            </Button>
          </>
        ) : (
          <>
            <Button variant="secondary" onClick={onClose}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleOrder} disabled={orderSuccess ? true : false}>
              {orderSuccess ? "Xác nhận" : "Xác nhận đặt sân"}
            </Button>
          </>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default OrderStadiumModal;
