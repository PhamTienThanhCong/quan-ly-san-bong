/* eslint-disable @next/next/no-img-element */
import "@quanlysanbong/styles/style.css";
import META_DATA from "./metaData";
import Link from "next/link";

export const metadata = {
  title: `${META_DATA.TITLE}`,
  description: META_DATA.DESCRIPTION,
  applicationName: META_DATA.APPLICATION_NAME,
  keywords: META_DATA.KEYWORDS,
  robots: META_DATA.ROBOTS,
  openGraph: {
    title: META_DATA.TITLE,
    description: META_DATA.DESCRIPTION,
    images: META_DATA.IMAGE,
    type: "website",
    url: META_DATA.URL
  }
};

export default function LoginPage() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <form>
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
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe" />
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

                    {/* Nếu bạn chưa có tài khoản */}
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

      <a href="#" className="btn btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
}
