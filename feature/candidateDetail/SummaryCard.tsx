"use client";
import React from "react";
// MUi Packages
import { Box, Typography } from "@mui/material";
// Third party packages
// Custom components

function SummaryCard() {
  return (
    <Box
      bgcolor={"#F8F8F8"}
      border={"1px solid #ECECEC"}
      borderRadius={2}
      px={2.5}
      py={2.5}
    >
      <Typography variant="h5">AI Summary</Typography>
      <Box bgcolor={"#ECECEC"} px={2} py={2} borderRadius={2} mt={1.5}>
        <Typography variant="body1">
          Overall 4+ years of hands on experience in building web applications
          using ReactJs and also having hands on experience in mobile
          application development in React Native
        </Typography>
      </Box>
    </Box>
  );
}

export default SummaryCard;
