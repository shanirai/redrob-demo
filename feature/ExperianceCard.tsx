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
import CustomChip from "./common/CustomChip";

function ExperianceCard(props: any) {
  //** props -- components */
  const { active } = props;

  // exp data
  const expData = [
    {
      label: "Forbes 10 Company",
      icon: "",
      color: "",
    },
    {
      label: "Ranking",
      icon: "",
      color: "",
    },
    {
      label: "Rating",
      icon: "",
      color: "",
    },
  ];

  return (
    <Box position={"relative"}>
      <Box
        mt={0.5}
        ml={1.5}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={1}
        px={1.5}
        py={0.5}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h6">Experience</Typography>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color={"text.secondary"}
          >
            Total Experience 4 years
          </Typography>
        </Stack>
        <Box my={0.5}>
          <Box display={"flex"} alignItems={"baseline"}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ cursor: "pointer", "&:hover": { color: "primary.main" } }}
            >
              Spotify Inc.
            </Typography>
            {/* custom chip */}

            {expData.map((item, index) => (
              <CustomChip item={item} key={index} />
            ))}
          </Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="subtitle2" color={"text.primary"}>
              Product Designer
            </Typography>
            <Typography variant="subtitle2" color={"text.secondary"}>
              February 2021 - Current
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ExperianceCard;
