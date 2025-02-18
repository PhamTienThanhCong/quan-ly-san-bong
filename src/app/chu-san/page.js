"use client";

import { Grid, Box, Typography, Avatar, Paper } from "@mui/material";
import PageContainer from "@quanlysanbong/app/chu-san/components/container/PageContainer";
import { useApp } from "../contexts/AppContext";
import { ROLE_MANAGER_TEXT } from "@quanlysanbong/constants/System";
import { formatCurrency } from "@quanlysanbong/utils/Main";

const Dashboard = () => {
  const { currentUser } = useApp();

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={4}>
        <Avatar
          src={currentUser.avatar || "/default-avatar.png"}
          alt={currentUser.name}
          sx={{ width: 80, height: 80, mb: 2 }}
        />
        <Typography variant="h4">Xin chào, {currentUser.name}!</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Vai trò: {ROLE_MANAGER_TEXT[currentUser.role]}
        </Typography>
      </Box>
      <Grid container spacing={3} mt={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h6">Số dư tài khoản</Typography>
            <Typography variant="h4" color="primary">
              {formatCurrency(currentUser.totalPrice)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h6">Số tiền đã rút</Typography>
            <Typography variant="h4" color="secondary">
              {formatCurrency(currentUser.withdrawn)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 3, textAlign: "center" }}>
            <Typography variant="h6">Trạng thái tài khoản</Typography>
            <Typography variant="h4" color={currentUser.active ? "green" : "red"}>
              {currentUser.active ? "Hoạt động" : "Bị khóa"}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Dashboard;
