"use client";
// React , Next js packages
import * as React from "react";
// MUI packages
import { Box } from "@mui/material";
// Mui icons
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function BasicTooltip() {
  return (
    <Tooltip title="Hello shani I ma here ">
      <IconButton>ss</IconButton>
    </Tooltip>
  );
}
