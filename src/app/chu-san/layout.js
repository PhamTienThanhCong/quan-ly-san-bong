"use client";

import RootAdminLayout from "./LayoutComponent";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "react-hot-toast";
import { baselightTheme } from "./layout/theme/DefaultColors";

const AdminLayout = ({ children }) => {
  return (
    <ThemeProvider theme={baselightTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <RootAdminLayout>{children}</RootAdminLayout>;
      <Toaster />
    </ThemeProvider>
  );
};

export default AdminLayout;
