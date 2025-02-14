"use client";
import Link from "next/link";
import { useState } from "react";

const SignInComponent = () => {
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let validationErrors = {};
    if (!formData.email) {
      validationErrors.email = "Email là bắt buộc.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email không hợp lệ.";
    }
    if (!formData.password) {
      validationErrors.password = "Mật khẩu là bắt buộc.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate user login (In real scenario, call API to authenticate user)
      console.log("User data:", formData);
      // Redirect to dashboard or homepage after successful login
    }
  };

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Tài khoản Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập email của bạn"
                      required
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Nhập mật khẩu của bạn"
                      required
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Ghi nhớ đăng nhập
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none">
                      Quên mật khẩu?
                    </a>
                  </div>

                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Đăng nhập
                  </button>

                  <p className="text-center mt-3">
                    Bạn chưa có tài khoản? <Link href="/dang-ky">Đăng ký ngay</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
