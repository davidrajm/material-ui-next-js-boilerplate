import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import MainLayout from "@/layouts/MainLayout";
import Dashboard from "@/components/Dashboard";

export default function Index() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}
