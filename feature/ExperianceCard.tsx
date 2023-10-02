"use client";
// React , Next Js packages
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
//  Mui packages
import {
  Avatar,
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
// MUI icons
import StarBorderIcon from "@mui/icons-material/StarBorder";

function ExperianceCard(props: any) {
  //** props -- components */
  const { active } = props;

  return (
    <Box position={"relative"}>
      <Box
        mt={0.5}
        ml={1.5}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={1}
        px={1.5}
        py={1}
        sx={{
          "&:hover": {
            borderLeft: "2px solid",
            borderColor: "Primary.main",
          },
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5">Experience</Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Total Experience 4 years
          </Typography>
        </Stack>
        <Box my={1}>
          <Box display={"flex"} alignItems={"baseline"}>
            {/* <Typography
              variant="h5"
              color={"grey.100"}
              bgcolor={"primary.main"}
              px={1}
              py={0.5}
              borderRadius={"4px"}
              sx={{ "&:hover": { bgcolor: "secondary.main" } }}
            >
              SP
            </Typography> */}
            <Avatar
              variant="rounded"
              sx={{ bgcolor: "primary.main", fontWeight: 600 }}
            >
              SP
            </Avatar>
            <Typography
              variant="h5"
              fontWeight={700}
              ml={1}
              sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
            >
              Spotify Inc.
            </Typography>
            <Typography
              variant="subtitle2"
              bgcolor={"secondary.light"}
              ml={2}
              px={2}
              py={0.6}
              borderRadius={1.5}
              fontWeight={600}
              display={"flex"}
              alignItems={"center"}
            >
              <StarBorderIcon sx={{ fontSize: 14, mr: 0.5 }} /> Forbes 10
              Company
            </Typography>
          </Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              variant="subtitle1"
              color={"primary.main"}
              pt={0.5}
              sx={{ cursor: "pointer", "&:hover": { color: "secondary.main" } }}
            >
              Product Designer
            </Typography>
            <Typography variant="subtitle2" color={"text.primary"} pt={0.5}>
              February 2021 - Current
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color={"primary.main"}
            sx={{
              cursor: "pointer",
              textAlign: "end",
              "&:hover": { color: "secondary.main" },
            }}
          >
            View All
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ExperianceCard;
