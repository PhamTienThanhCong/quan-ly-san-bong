"use client";
import { Grid, Box } from "@mui/material";
import PageContainer from "@quanlysanbong/app/chu-san/components/container/PageContainer";
// components
import SalesOverview from "@quanlysanbong/app/chu-san/components/dashboard/SalesOverview";
import YearlyBreakup from "@quanlysanbong/app/chu-san/components/dashboard/YearlyBreakup";
import RecentNotifies from "@quanlysanbong/app/chu-san/components/dashboard/RecentTransactions";
import ProductPerformance from "@quanlysanbong/app/chu-san/components/dashboard/ProductPerformance";
import MonthlyEarnings from "@quanlysanbong/app/chu-san/components/dashboard/MonthlyEarnings";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5}>
            <RecentNotifies />
          </Grid>
          <Grid item xs={12} lg={7}>
            <ProductPerformance />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
