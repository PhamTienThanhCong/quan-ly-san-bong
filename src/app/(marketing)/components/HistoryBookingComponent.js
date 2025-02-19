"use client";

import { convertDate, convertDateTime, formatCurrency } from "@quanlysanbong/utils/Main";
import SendRequest from "@quanlysanbong/utils/SendRequest";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";
import toast from "react-hot-toast";

const HistoryBookingComponent = ({ currentUser }) => {
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [stadiumFeedback, setStadiumFeedback] = useState(null);
  const [feedback, setFeedback] = useState({ title: "", reason: "" });

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await SendRequest("GET", "/api/orders", { userId: currentUser._id });
      if (res.payload) {
        setBookings(res.payload);
      }
    };
    fetchBookings();
  }, [currentUser._id]);

  const handleFeedbackSubmit = async () => {
    if (!feedback.title || !feedback.reason) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const payload = {
      userId: currentUser._id,
      orderId: stadiumFeedback._id,
      stadiumId: stadiumFeedback.stadiumId,
      title: feedback.title,
      reason: feedback.reason
    };

    const res = await SendRequest("POST", "/api/feedbacks", payload);
    if (res.payload) {
      toast.success("Phản ánh của bạn đã được gửi thành công!");
      setShowModal(false); // Close the modal
      setFeedback({ title: "", reason: "" }); // Reset feedback form
      setStadiumFeedback(null); // Reset stadium feedback
    }
  };

  const onFeedBack = (booking) => {
    setStadiumFeedback(booking);
    setShowModal(true);
  };

  return (
    <div className="w-100 overflow-auto">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sân</th>
            <th>Ngày đặt</th>
            <th>Loại sân</th>
            <th>Khung giờ</th>
            <th>Tiền cọc</th>
            <th>Còn lại</th>
            <th>Ngày đặt sân</th>
            <th>Phản ánh</th> {/* Added Feedback Column */}
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>
                <Link href={`/san-bong/${booking.stadiumId}`}>{booking.stadium?.stadiumName}</Link>
                <div style={{ fontSize: "0.7rem" }} className="text-muted">
                  {booking.stadium?.locationDetail}, {booking.stadium?.location}
                </div>
              </td>
              <td>{convertDate(booking.date)}</td>
              <td>Sân {booking.field}</td>
              <td>{booking.time}</td>
              <td>{formatCurrency(booking.deposit)}</td>
              <td>{formatCurrency(booking.remaining)}</td>
              <td>{convertDateTime(booking.created_at)}</td>
              <td>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-sm btn-primary" onClick={() => onFeedBack(booking)}>
                    <i className="fas fa-comment"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Feedback */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Phản ánh về đặt sân
            <div className="text-muted" style={{ fontSize: "0.8rem" }}>
              {stadiumFeedback?.stadium?.stadiumName} - {new Date(stadiumFeedback?.date).toLocaleDateString()} - Sân{" "}
              {stadiumFeedback?.field} - {stadiumFeedback?.time}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tiêu đề"
                value={feedback.title}
                onChange={(e) => setFeedback({ ...feedback, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Lý do</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Nhập lý do phản ánh"
                value={feedback.reason}
                onChange={(e) => setFeedback({ ...feedback, reason: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleFeedbackSubmit}>
            Gửi phản ánh
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HistoryBookingComponent;
