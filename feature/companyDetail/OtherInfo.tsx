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
  const { label, value, icon } = props;
  const [showMore, setShowMore] = useState(false);

  // console.log("icon tech rev", label, icon, tech, revenue);

  const displayvalue = () => {
    return (
      <span>
        {!showMore ? value.slice(0, 25) : value}
        <span
          onClick={() => {
            setShowMore(!showMore);
          }}
          style={{ fontWeight: 600 }}
        >
          {!showMore ? "...Show more" : "  ...Show less"}
        </span>
      </span>
    );
  };

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
      </Typography>
      <Typography
        variant="caption"
        width="70%"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <span style={{ marginRight: 8, fontWeight: 600 }}>:</span>
        {value.length > 25 ? displayvalue() : value}
        <span style={{ marginLeft: 4 }}>{icon && icon}</span>
      </Typography>
    </Box>
  );
}

export default OtherInfo;
