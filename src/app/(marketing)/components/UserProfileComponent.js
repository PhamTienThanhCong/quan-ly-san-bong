"use client";

import { useState } from "react";
import { Tab, Tabs, Form, Button } from "react-bootstrap";
import { useApp } from "@quanlysanbong/app/contexts/AppContext";
import UpdateProfileComponent from "./UpdateProfileComponent";
import toast from "react-hot-toast";
import SendRequest from "@quanlysanbong/utils/SendRequest";
import { ROLE_MANAGER } from "@quanlysanbong/constants/System";

const UserProfileComponent = () => {
  const { currentUser, updateUser } = useApp();
  const [key, setKey] = useState("account");

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Mật khẩu mới không khớp.");
      return;
    }
    const res = await SendRequest("PUT", "/api/users", {
      id: currentUser._id,
      password: passwordData.newPassword,
      currentPassword: passwordData.currentPassword
    });
    if (res.payload) {
      toast.success("Cập nhật mật khẩu thành công.");
    } else {
      toast.error("Cập nhật mật khẩu thất bại.");
    }
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="container my-4">
      <Tabs id="profile-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="account" title="Cập nhật tài khoản">
          <UpdateProfileComponent currentUser={currentUser} updateUser={updateUser} />
        </Tab>
        {currentUser.role === ROLE_MANAGER.USER && (
          <Tab eventKey="empty" title="Lịch sử đặt sân">
            <p>Trang trống để tuỳ chỉnh sau này.</p>
          </Tab>
        )}
        <Tab eventKey="password" title="Cập nhật mật khẩu">
          <Form onSubmit={handlePasswordUpdate}>
            <Form.Group className="mb-3">
              <Form.Label>Mật khẩu mới</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Xác nhận mật khẩu mới</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Cập nhật mật khẩu
            </Button>
          </Form>
        </Tab>
      </Tabs>
      <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default UserProfileComponent;
