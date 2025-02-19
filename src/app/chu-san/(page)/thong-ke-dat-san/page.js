"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import SendRequest from "@quanlysanbong/utils/SendRequest";
import PageContainer from "../../components/container/PageContainer";
import { useApp } from "@quanlysanbong/app/contexts/AppContext";
import { convertDate, convertDateTime } from "@quanlysanbong/utils/Main";
import { ROLE_MANAGER } from "@quanlysanbong/constants/System";

const BookingHistoryPage = () => {
  const { currentUser } = useApp();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await SendRequest("GET", "/api/orders", {
        ownerId: currentUser.role === ROLE_MANAGER.SALE ? currentUser._id : ""
      });
      if (res.payload) {
        setBookings(res.payload);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) return;
    fetchData();
  }, [currentUser, fetchData]);

  const handleReload = () => {
    fetchData();
  };

  return (
    <PageContainer title="Lịch sử đặt sân" description="Danh sách các sân bạn đã đặt">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Lịch sử đặt sân</Typography>
        <Button variant="contained" color="primary" onClick={handleReload}>
          Tải lại
        </Button>
      </Box>

      {/* Code here */}
    </PageContainer>
  );
};

export default BookingHistoryPage;
