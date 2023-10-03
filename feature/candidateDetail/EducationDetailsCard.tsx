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
  Tooltip,
  Zoom,
} from "@mui/material";
// MUI icons
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CircleIcon from "@mui/icons-material/Circle";
// Custom components
import CustomChip from "../common/CustomChip";

function EducationDetailsCard(props: any) {
  //** props -- components */
  const { active } = props;

  // dummy data for tooltip
  const data =
    "Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India.";

  // exp data
  const eduData = [
    {
      label: "Course Ranking",
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
        my={2}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={2}
        px={2.5}
        py={2.5}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5">Education</Typography>
        </Stack>
        <Box my={1}>
          <Box display={"flex"} alignItems={"baseline"}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              Guru Nanak Dev University
            </Typography>
            {/* custom chip */}

            {eduData.map((item, index) => (
              <CustomChip item={item} key={index} />
            ))}
            <Tooltip
              title={<Typography variant="body2">{data}</Typography>}
              placement="right"
              TransitionComponent={Zoom}
              arrow={true}
            >
              <Typography
                variant="caption"
                bgcolor={"secondary.light"}
                ml={1}
                px={2}
                py={0.5}
                borderRadius={1.5}
                fontWeight={600}
                display={"flex"}
                alignItems={"center"}
              >
                <StarBorderIcon sx={{ fontSize: 12, mr: 0.5 }} /> NIRF Rating
                Top 10
              </Typography>
            </Tooltip>
          </Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={1}
          >
            <Typography variant="subtitle2" color={"text.primary"}>
              Bachelor of Technology (CSE)
            </Typography>
            <Typography variant="subtitle2" color={"text.secondary"}>
              Apr 2016 – Mar 2020
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Typography variant="body2" color={"text.secondary"}>
              Full Time |{" "}
            </Typography>
            <Typography variant="body2" color={"text.secondary"} ml={1}>
              Amritsar, Punjab, India
            </Typography>
          </Stack>
          <Box mt={2}>
            <Typography variant="subtitle1">About</Typography>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
            >
              Guru Nanak Dev is a university near the village of Kot Khalsa. It
              offers higher studies degree courses online. Guru Nanak Dev
              University's campus is spread over 500 acres
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
      </Box>
    </Box>
  );
}

export default EducationDetailsCard;
