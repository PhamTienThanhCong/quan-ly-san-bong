# Web Quản lý sân bóng

## Tổng Quan
Ứng dụng này được thiết kế để hỗ trợ việc đặt sân thể thao trực tuyến, phục vụ ba nhóm người dùng chính: **Người tham gia (Người chơi)**, **Chủ sân**, và **Admin**. Mỗi nhóm người dùng có các chức năng riêng biệt để tìm kiếm, đặt sân, quản lý sân, và quản trị hệ thống.

## Luồng Chức Năng

### 1. Người Tham Gia (Người Chơi)
| # | Chức Năng/Màn Hình | Tính Năng | Chi Tiết Chức Năng/Màn Hình |
|---|---------------------|-----------|-----------------------------|
| 1 | Sign up            |           |                             |
|   | Sign in            |           |                             |
|   | Tìm kiếm sân tập   |           | Gõ được tìm kiếm tên sân, bộ lọc: bộ môn lựa chọn, khu vực, thời gian trống |
|   | Xem sân            |           | Hiển thị thông tin hình ảnh, giá sân, phím ấn đặt sân |
|   | Đặt sân            |           | Hiển thị khung giờ sân đã được khách trước đặt<br>Cho phép người tham gia đặt sân theo cách chọn ngày + điền thời gian<br>Phím ấn xác nhận |
|   | Thanh toán         |           | Hiển thị mã đơn đặt + mã QR thanh toán<br>(Yêu cầu khách chuyển khoản theo Tên + số mã đơn) |
|   | Gửi khiếu nại      |           | Điền khiếu nại gửi đến admin |

### 2. Chủ Sân
| # | Chức Năng/Màn Hình | Tính Năng | Chi Tiết Chức Năng/Màn Hình |
|---|---------------------|-----------|-----------------------------|
| 1 | Sign up            |           | *Ở chủ sân sẽ yêu cầu điền thêm thông tin số tài khoản |
|   | Sign in            |           |                             |
|   | Đăng thông tin sân |           | - Điền địa chỉ sân<br>- Upload hình ảnh<br>- Điền thông tin mô tả sân<br>- Điền giá sân theo giờ |
|   | Xem lịch sân được book |       | Hiển thị bảng lịch sân:<br>- Màu xanh: những khung giờ khách đã đặt<br>- Màu trắng: khung giờ trống |
|   | Xem doanh thu      |           | - Hiển thị tổng doanh thu<br>- Lịch sử tiền vào và ra<br>- Lệnh rút tiền |

### 3. Admin
| # | Chức Năng/Màn Hình | Tính Năng | Chi Tiết Chức Năng/Màn Hình |
|---|---------------------|-----------|-----------------------------|
| 1 | Sign up            |           |                             |
|   | Sign in            |           |                             |
|   | Xem toàn bộ đơn đặt sân |      | Hiển thị các đơn đặt sân trong ngày/tháng/năm |
|   | Xem khiếu nại      |           | Hiển thị các khiếu nại từ khách hàng<br>Điền phản hồi khiếu nại |
|   | Xem thông tin user |           | Hiển thị toàn bộ thông tin user đăng ký trong ngày/tháng/năm |
|   | Xem thông tin chủ sân |        | Hiển thị toàn bộ thông tin chủ sân đăng ký trong ngày/tháng/năm |
|   | Hiển thị yêu cầu rút tiền từ chủ sân | | - Hiển thị thông báo yêu cầu rút tiền<br>- Nút xác nhận |

## Mô Tả Dự Án

### Tên Dự Án
Ứng dụng đặt sân thể thao trực tuyến

### Mục Tiêu Dự Án
Xây dựng một nền tảng trực tuyến giúp người chơi dễ dàng tìm kiếm, xem thông tin và đặt sân thể thao; hỗ trợ chủ sân quản lý lịch đặt sân, doanh thu và gửi yêu cầu rút tiền; đồng thời cung cấp cho admin công cụ quản lý đơn đặt sân, khiếu nại, thông tin người dùng và chủ sân.

### Phạm Vi Dự Án
- **Người tham gia (Người chơi):** Đăng ký, đăng nhập, tìm kiếm sân, xem sân, đặt sân, thanh toán, gửi khiếu nại.
- **Chủ sân:** Đăng ký (yêu cầu số tài khoản), đăng nhập, đăng thông tin sân, xem lịch sân, quản lý doanh thu.
- **Admin:** Đăng ký, đăng nhập, quản lý đơn đặt sân, xử lý khiếu nại, xem thông tin user/chủ sân, xử lý yêu cầu rút tiền.

### Đối Tượng Người Dùng
- **Người chơi:** Những người muốn tìm kiếm và đặt sân thể thao.
- **Chủ sân:** Những người sở hữu sân thể thao và muốn quản lý lịch đặt sân, doanh thu.
- **Admin:** Quản trị viên hệ thống, chịu trách nhiệm quản lý toàn bộ hoạt động của ứng dụng.

### Công Nghệ Sử Dụng
- **Frontend:** HTML, CSS, JavaScript (React hoặc Vue.js).
- **Backend:** Node.js hoặc Python (Django/Flask).
- **Cơ sở dữ liệu:** MySQL hoặc MongoDB.
- **Thanh toán:** Tích hợp cổng thanh toán (Momo, ZaloPay).

### Lợi Ích Dự Án
- **Người chơi:** Tiết kiệm thời gian, thanh toán tiện lợi, có kênh khiếu nại.
- **Chủ sân:** Quản lý lịch sân và doanh thu dễ dàng, rút tiền nhanh chóng.
- **Admin:** Quản lý hệ thống hiệu quả, xử lý khiếu nại và rút tiền minh bạch.

### Thời Gian Dự Kiến
- **Giai đoạn 1 (2 tháng):** Phân tích yêu cầu, thiết kế giao diện và cơ sở dữ liệu.
- **Giai đoạn 2 (3 tháng):** Phát triển các chức năng chính.
- **Giai đoạn 3 (2 tháng):** Hoàn thiện, kiểm thử và triển khai.

### Ngân Sách Dự Kiến
Ước tính: 500 triệu - 1 tỷ VNĐ (chưa bao gồm chi phí vận hành và bảo trì).

### Rủi Ro Tiềm Ẩn
- Khó khăn trong tích hợp cổng thanh toán.
- Lỗi upload hình ảnh hoặc thông tin không hợp lệ.
- Quá tải hệ thống khi lượng người dùng tăng đột biến.

### Kế Hoạch Giảm Thiểu Rủi Ro
- Sử dụng API thanh toán đã được kiểm chứng.
- Kiểm tra dữ liệu đầu vào chặt chẽ.
- Thiết kế hệ thống có khả năng mở rộng (cloud hosting, load balancing).

## Nguồn Dữ Liệu
Dữ liệu được lấy từ bảng tính Google Sheets: [Link to Spreadsheet](https://docs.google.com/spreadsheets/d/1Ya2je8z8CwNMeEeeoCZOADEPGvaVSvv1/edit?gid=315555430#gid=315555430)


**Lưu ý:** Liên kết Google Sheets đã được thêm vào README để tham chiếu nguồn dữ liệu. Nếu bạn cần điều chỉnh thêm, hãy cho tôi biết!