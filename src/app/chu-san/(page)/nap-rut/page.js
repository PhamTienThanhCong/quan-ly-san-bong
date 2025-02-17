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
  Paper,
  Modal,
  TextField
} from "@mui/material";
import SendRequest from "@quanlysanbong/utils/SendRequest";
import PageContainer from "../../components/container/PageContainer";
import { useApp } from "@quanlysanbong/app/contexts/AppContext";
import { formatCurrency } from "@quanlysanbong/utils/Main";
import toast from "react-hot-toast";
import { ROLE_MANAGER } from "@quanlysanbong/constants/System";

const WithdrawalHistoryPage = () => {
  const { currentUser } = useApp();
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [banks, setBanks] = useState([]);

  useEffect(() => {
    fetch("https://api.vietqr.io/v2/banks")
      .then((response) => response.json())
      .then((data) => {
        if (data.code === "00") {
          setBanks(data.data);
        }
      })
      .catch((error) => console.error("Error fetching banks:", error));
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await SendRequest("GET", "/api/withdrawn", {
        ownerId: currentUser.role === ROLE_MANAGER.SALE ? currentUser._id : ""
      });
      if (res.payload) {
        setWithdrawals(res.payload);
      }
    } catch (error) {
      console.error("Error fetching withdrawal history:", error);
    } finally {
      setLoading(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(currentUser).length === 0) return;
    fetchData();
  }, [currentUser, fetchData]);

  const handleWithdraw = async () => {
    const balance = currentUser.totalPrice - (currentUser.withdrawn || 0);
    const amount = parseFloat(withdrawAmount);

    if (isNaN(amount) || amount <= 0) {
      toast.error("Số tiền rút không hợp lệ");
      return;
    }
    if (amount < 50000) {
      toast.error("Số tiền rút không được nhỏ hơn 50,000 VND");
      return;
    }
    if (amount > balance) {
      toast.error("Số tiền rút không được lớn hơn số dư hiện tại");
      return;
    }

    try {
      await SendRequest("POST", "/api/withdrawn", {
        ownerId: currentUser._id,
        bank_info: currentUser.bank_info,
        bank_info_number: currentUser.bank_info_number,
        amount
      });
      toast.success("Yêu cầu rút tiền thành công");
      setWithdrawAmount("");
      setOpenModal(false);
      fetchData();
    } catch (error) {
      toast.error("Yêu cầu rút tiền thất bại");
    }
  };

  return (
    <PageContainer title="Lịch sử nạp rút" description="Chi tiết lịch sử nạp rút">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Lịch sử nạp rút</Typography>
        {currentUser.role === ROLE_MANAGER.SALE && (
          <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
            Rút tiền
          </Button>
        )}
      </Box>
      {currentUser.role === ROLE_MANAGER.SALE && (
        <Box display="flex" justifyContent="space-between" mb={3}>
          <Typography variant="h6">Tổng số tiền: {formatCurrency(currentUser.totalPrice || 0)}</Typography>
          <Typography variant="h6">
            Số dư hiện tại: {formatCurrency(currentUser.totalPrice - (currentUser.withdrawn || 0))}
          </Typography>
          <Typography variant="h6">Số tiền đã rút: {formatCurrency(currentUser.withdrawn || 0)}</Typography>
        </Box>
      )}
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ngày</TableCell>
                {currentUser.role === ROLE_MANAGER.ADMIN && <TableCell>Người rút</TableCell>}
                <TableCell>Số tiền</TableCell>
                <TableCell>Ngân hàng</TableCell>
                <TableCell>Số tài khoản</TableCell>
                <TableCell>Trạng thái</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {withdrawals.map((withdrawal) => (
                <TableRow key={withdrawal._id}>
                  <TableCell>{new Date(withdrawal.created_at).toLocaleString()}</TableCell>
                  {currentUser.role === ROLE_MANAGER.ADMIN && (
                    <TableCell>
                      <Typography fontSize={14}>{withdrawal?.owner?.name}</Typography>
                      <br />
                      {withdrawal?.owner?.email}
                    </TableCell>
                  )}
                  <TableCell>{formatCurrency(withdrawal.amount)}</TableCell>
                  <TableCell>{banks.find((bank) => bank.bin == withdrawal.bank_info)?.name}</TableCell>
                  <TableCell>{withdrawal.bank_info_number}</TableCell>
                  <TableCell style={{ color: withdrawal.status === "PENDING" ? "orange" : "green" }}>
                    {withdrawal.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24
          }}
        >
          <Typography variant="h6" gutterBottom>
            Nhập số tiền muốn rút
          </Typography>
          <TextField
            fullWidth
            label="Số tiền"
            type="number"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
            margin="normal"
          />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="primary" onClick={handleWithdraw}>
              Xác nhận
            </Button>
            <Button variant="outlined" onClick={() => setOpenModal(false)}>
              Hủy
            </Button>
          </Box>
        </Box>
      </Modal>
    </PageContainer>
  );
};

export default WithdrawalHistoryPage;
