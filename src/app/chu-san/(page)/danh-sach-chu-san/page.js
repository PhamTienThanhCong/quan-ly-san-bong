"use client";

import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
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
import { convertDateTime } from "@quanlysanbong/utils/Main";
import { ROLE_MANAGER } from "@quanlysanbong/constants/System";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await SendRequest("GET", "/api/users", {
        role: ROLE_MANAGER.SALE
      });
      if (res.payload) {
        setUsers(res.payload);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleReload = () => {
    fetchData();
  };

  return (
    <PageContainer title="Danh sách chủ sân" description="Danh sách tất cả chủ sân trong hệ thống">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Danh sách chủ sân</Typography>
        <Button variant="contained" color="primary" onClick={handleReload}>
          Tải lại
        </Button>
      </Box>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Điện thoại</TableCell>
                <TableCell>Tên</TableCell>
                <TableCell>Địa chỉ</TableCell>
                <TableCell>Ngân hàng</TableCell>
                <TableCell>Số tài khoản</TableCell>
                <TableCell>Ngày đăng ký</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>
                    <img src={user.avatar || "/img/avatar.jpg"} alt={user.name} width="50" height="50" />
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.bank_info}</TableCell>
                  <TableCell>{user.bank_info_number}</TableCell>
                  <TableCell>{convertDateTime(user.created_at)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </PageContainer>
  );
};

export default UserListPage;
