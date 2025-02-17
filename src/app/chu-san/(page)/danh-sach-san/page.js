"use client";

import { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  CircularProgress,
  Pagination,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";
import SendRequest from "@quanlysanbong/utils/SendRequest";
import PageContainer from "../../components/container/PageContainer";
import Link from "next/link";

const StadiumListPage = () => {
  const [stadiums, setStadiums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await SendRequest("GET", "/api/stadiums");
      if (res.payload) {
        setStadiums(res.payload);
      }
    } catch (error) {
      console.error("Error fetching stadiums:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReload = () => {
    fetchData();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = stadiums.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(stadiums.length / itemsPerPage);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <PageContainer title="Danh sách sân bóng" description="Danh sách các sân bóng hiện có">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Danh sách sân bóng</Typography>
        <Button variant="contained" color="primary" onClick={handleReload}>
          Tải lại
        </Button>
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {currentItems.map((stadium) => (
            <Grid item xs={12} md={6} lg={4} key={stadium._id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={stadium.images[0] || "/default-stadium.jpg"}
                  alt={stadium.stadiumName}
                />
                <CardContent>
                  <Typography variant="h6" marginBottom={1}>
                    {stadium.stadiumName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {stadium.locationDetail}, {stadium.location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" marginTop={1}>
                    Giờ mở cửa: {stadium.openingTime} - {stadium.closingTime}
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    <strong>Loại sân khả dụng:</strong>
                  </Typography>
                  <ul style={{ marginBottom: 0 }}>
                    {Object.values(stadium.fields)
                      .filter((field) => field.isAvailable)
                      .map((field, index) => (
                        <li key={index}>
                          <Typography variant="body2" color="textSecondary" marginTop={1}>
                            {field.name} - {field.price} VND
                          </Typography>
                        </li>
                      ))}
                  </ul>

                  {/* Xem, sửa, đặt sân */}
                  <Box display="flex" gap={1} mt={2}>
                    <Link href={`/san-bong/${stadium._id}`}>
                      <Button variant="contained" color="primary">
                        Xem
                      </Button>
                    </Link>
                    {/* <Button variant="contained" color="primary">
                      Sửa
                    </Button> */}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={totalPages} page={currentPage} onChange={handleChangePage} color="primary" />
      </Box>
    </PageContainer>
  );
};

export default StadiumListPage;
