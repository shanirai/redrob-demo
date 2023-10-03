"use client";
import React, { useState } from "react";
// MUi Packages
import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
// Third party packages
// Custom components

function OtherInfo(props: any) {
  const { tech, revenue, visible, dollar } = props;
  const { label, value, icon } = props.data;

  console.log("icon tech rev", label, icon, tech, revenue);

  return (
    <Box
      pt={0.5}
      sx={{
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
        width: "100%",
      }}
    >
      <Typography variant="caption" width="30%" sx={{ fontWeight: 600 }}>
        {label}
        {" : "}
      </Typography>
      <Typography
        variant="caption"
        width="70%"
        sx={{ display: "flex", alignItems: "center" }}
      >
        {value}
        {label === "Type" && tech === "down" && (
          <ArrowCircleDownIcon color="error" />
        )}
        {label === "Revenue" && revenue === "up" && (
          <ArrowCircleUpIcon color="success" />
        )}
        {label === "Revenue" && revenue !== "up" && (
          <ArrowCircleUpIcon color="success" />
        )}
        {label === "Technology" && tech === "down" && (
          <ArrowCircleDownIcon color="error" />
        )}
        {label === "Technology" && tech === "up" && (
          <ArrowCircleDownIcon color="error" />
        )}
        {label === "Size" && revenue === "up" && (
          <ArrowCircleUpIcon color="success" />
        )}
      </Typography>
    </Box>
  );
}

export default OtherInfo;
