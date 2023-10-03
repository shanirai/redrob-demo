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
import CustomChip from "./common/CustomChip";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function EducationalDetails() {
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
    <Box>
      <Box
        mt={0.5}
        mx={1.5}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={1}
        px={1}
        py={1}
      >
        <Grid container columnGap={1}>
          <Grid item xs={1}>
            <Typography variant="h6">Education</Typography>
          </Grid>
          <Grid item xs={10}>
            <Box flexDirection={"column"} display={"flex"} ml={1.5}>
              <Box display={"flex"}>
                <Typography variant="h6" fontWeight={600}>
                  Indian Institute of Technology Delhi
                </Typography>
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
                    <StarBorderIcon sx={{ fontSize: 12, mr: 0.5 }} /> NIRF
                    Rating Top 10
                  </Typography>
                </Tooltip>
              </Box>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant="subtitle2">
                  Master of Computer Application
                </Typography>

                <Typography variant="subtitle2" color={"text.secondary"}>
                  February 2021 - January 2023
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default EducationalDetails;
