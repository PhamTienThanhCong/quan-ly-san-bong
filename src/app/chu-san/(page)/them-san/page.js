"use client";
import { useState } from "react";
import {
  TextField,
  Grid,
  Box,
  Button,
  MenuItem,
  Typography,
  Select,
  InputLabel,
  FormControl,
  Paper,
  IconButton
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AddCircleOutline, Delete } from "@mui/icons-material";
import PageContainer from "@quanlysanbong/app/chu-san/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import dayjs from "dayjs";
import ImagePreview from "@quanlysanbong/app/chu-san/components/ImagePreview";
import SearchAddressComponent from "../../components/SearchAddressComponent";
import SelectStadiumComponent from "../../components/SelectStadiumComponent";
import toast from "react-hot-toast";
import SendRequest, { loadingUi } from "@quanlysanbong/utils/SendRequest";
import { useApp } from "@quanlysanbong/app/contexts/AppContext";

const fieldSizes = {
  5: {
    isAvailable: false,
    name: "Sân Bóng Đá",
    price: 0,
    count: 0,
    timeMatch: 0,
    timeDetail: []
  },
  7: {
    isAvailable: false,
    name: "Sân Pickleball",
    price: 0,
    count: 0,
    timeMatch: 0,
    timeDetail: []
  },
  11: {
    isAvailable: false,
    name: "Sân cầu lông",
    price: 0,
    count: 0,
    timeMatch: 0,
    timeDetail: []
  }
};

const CreateStadiumPage = () => {
  const { currentUser } = useApp();

  const [stadiumName, setStadiumName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [openingTime, setOpeningTime] = useState(dayjs("2022-04-17T06:00", "HH:mm"));
  const [closingTime, setClosingTime] = useState(dayjs("2022-04-17T22:30", "HH:mm"));
  const [location, setLocation] = useState("");
  const [locationDetail, setLocationDetail] = useState("");
  const [fields, setFields] = useState(fieldSizes);

  const handleImageUpload = (event) => {
    const fileList = Array.from(event.target.files);
    setImages([...images, ...fileList]);
  };

  const handleSubmit = async () => {
    try {
      // Kiểm tra giá & số lượng hợp lệ
      for (const [key, value] of Object.entries(fields)) {
        if (value.isAvailable && (value.price <= 0 || value.count <= 0)) {
          toast.error("Giá và số lượng sân phải lớn hơn 0");
          return;
        }
      }
      loadingUi(true);
      // Upload tất cả ảnh song song bằng Promise.all
      const uploadImages = images.map(async (image) => {
        const formData = new FormData();
        formData.append("file", image);

        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData
        });

        if (!response.ok) throw new Error("Lỗi khi tải ảnh lên");

        const data = await response.json();
        return data.url;
      });

      // Chờ tất cả ảnh upload xong
      // eslint-disable-next-line no-undef
      const imgs = await Promise.all(uploadImages);

      // Chuẩn bị dữ liệu gửi lên server
      const data = {
        stadiumName,
        description,
        location,
        locationDetail,
        openingTime: openingTime.format("HH:mm"),
        closingTime: closingTime.format("HH:mm"),
        images: imgs,
        fields
      };

      // Gửi request thêm sân
      const res = await SendRequest("POST", "/api/stadiums", data);

      toast.success("Thêm sân thành công");
      // reset form
      setStadiumName("");
      setDescription("");
      setImages([]);
      setLocation("");
      setLocationDetail("");
      setFields(fieldSizes);
    } catch (error) {
      console.error("Lỗi trong quá trình xử lý:", error);
      toast.error("Đã xảy ra lỗi, vui lòng thử lại!");
      loadingUi(false);
    }
  };

  return (
    <PageContainer title="Thêm sân" description="Trang thêm sân mới vào hệ thống">
      <DashboardCard
        title="Thêm sân mới"
        subtitle="Vui lòng điền thông tin sân vào form dưới đây, Chúng tôi sẽ giúp bạn thu cọc 30% giá trị sân"
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Tên sân"
              fullWidth
              variant="outlined"
              value={stadiumName}
              onChange={(e) => setStadiumName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <SearchAddressComponent className={""} onSearch={setLocation} oldSearch={currentUser?.address || ""} />

            <TextField
              label="Địa chỉ sân"
              fullWidth
              sx={{ marginTop: 3 }}
              variant="outlined"
              value={locationDetail}
              onChange={(e) => setLocationDetail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Mô tả sân"
              fullWidth
              multiline
              rows={3}
              variant="outlined"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1">Ảnh mô tả sân</Typography>
            <input type="file" multiple accept="image/*" onChange={handleImageUpload} />
            <ImagePreview images={images} setImages={setImages} />
          </Grid>

          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker label="Giờ mở cửa" value={openingTime} onChange={setOpeningTime} />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker label="Giờ đóng cửa" value={closingTime} onChange={setClosingTime} />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Loại sân và giá thuê</Typography>
          </Grid>

          <SelectStadiumComponent
            fields={fields}
            setFields={setFields}
            openingTime={openingTime}
            closingTime={closingTime}
          />

          <Button variant="contained" sx={{ marginTop: 2, marginLeft: 3 }} onClick={handleSubmit}>
            Thêm sân
          </Button>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default CreateStadiumPage;
