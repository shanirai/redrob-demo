"use client";
import React from "react";
// MUi Packages
import { Box, Container, Link, Typography } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
// Third party packages
// Custom components

function Comparison() {
  const info = [
    {
      label: "Size",
      value: "up",
    },
    {
      label: "Culture",
      value: "down",
    },
    {
      label: "Technology Stack",
      value: "up",
    },
    {
      label: "Reviews",
      value: "up",
    },
  ];
  return (
    <Box display={"flex"} flexDirection={"row"} gap={1}>
      {info.map((item) => {
        return (
          <Box
            key={item.label}
            bgcolor={"primary.light"}
            borderRadius={"8px"}
            // boxShadow={"0px 1px 4px 0px blue"}
            px={3}
            py={1}
            mr={0.5}
            width={"100%"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" fontWeight={600} textAlign={"center"}>
              {item.label}
            </Typography>
            {item.value === "up" ? (
              <ArrowCircleUpIcon />
            ) : (
              <ArrowCircleDownIcon color="error" />
            )}
          </Box>
        );
      })}
    </Box>
  );
}

export default Comparison;
