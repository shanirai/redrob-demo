"use client";
// React, Next js Packages
import React from "react";
// MUI packages
import { Box, Typography } from "@mui/material";
// MUI icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function CustomChip(props: any) {
  //** props --- components */
  const { item, key } = props;
  return (
    <Box key={key}>
      <Typography
        variant="caption"
        bgcolor={"secondary.light"}
        ml={1}
        px={1.5}
        py={0.5}
        borderRadius={1.5}
        fontWeight={600}
        display={"flex"}
        alignItems={"center"}
      >
        <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} />{" "}
        {item?.label ? item?.label : "Forbes 10 Company"}
      </Typography>
    </Box>
  );
}

export default CustomChip;
