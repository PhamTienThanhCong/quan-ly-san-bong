"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SignUpComponent = () => {
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    fetch("https://open.oapi.vn/location/provinces?size=100")
      .then((response) => response.json())
      .then((data) => setProvinces(data.data));
  }, []);
  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  {/* Nhap ten cua ban */}
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Tên của bạn
                    </label>
                    <input type="text" className="form-control" id="name" placeholder="Nhập tên của bạn" required />
                  </div>

                  <div className={`mb-3`}>
                    <label htmlFor={`province`} className={`form-label`}>
                      Tỉnh/Thành phố
                    </label>
                    <select className={`form-select`} id={`province`} required>
                      <option value="">Chọn Tỉnh/Thành phố</option>
                      {provinces.map((province) => (
                        <option key={province.id} value={province.id}>
                          {province.name}
                        </option>
                      ))}
                    </select>

                    {/* Note chọn thành phố để chúng tôi phục vụ bạn tốt hơn */}
                    <div className={`form-text`}>Chọn Tỉnh, thành phố để chúng tôi phục vụ bạn tốt hơn</div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Tài khoản Email
                    </label>
                    <input type="email" className="form-control" id="email" placeholder="Nhập email của bạn" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Nhập mật khẩu của bạn"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Xác nhận mật khẩu
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Xác nhận mật khẩu của bạn"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="acceptTerms" />
                      <label className="form-check-label" htmlFor="acceptTerms">
                        Tôi đồng ý với các điều khoản sử dụng
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Đăng ký
                  </button>

                  {/* Nếu bạn đã có tài khoản */}
                  <p className="text-center mt-3">
                    Bạn đã có tài khoản? <Link href="/dang-nhap">Đăng nhập ngay</Link>
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

export default SignUpComponent;
