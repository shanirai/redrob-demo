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

function EducationalDetails() {
  // dummy data for tooltip
  const data =
    "Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India.";

  return (
    <Box>
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
          <Typography variant="h5">Education</Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Total Experience 4 years
          </Typography>
        </Stack>
        <Box my={1} display={"flex"}>
          <Avatar
            sx={{
              height: "50px",
              width: "50px",
              fontSize: 18,
              bgcolor: "primary.main",
              color: "grey.100",
              fontWeight: 600,
            }}
            variant="rounded"
          >
            IIT
          </Avatar>
          <Box
            display={"flex"}
            flexDirection={"column"}
            ml={1}
            position={"relative"}
          >
            <Typography variant="h5">
              Indian Institute of Technology Delhi
            </Typography>
            <Stack direction={"row"}>
              <Typography
                variant="subtitle2"
                color={"primary.main"}
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: "secondary.main" },
                }}
              >
                Master of Computer Application
              </Typography>
              <Typography
                variant="subtitle2"
                position={"absolute"}
                right={"-465px"}
              >
                {" "}
                February 2021 - January 2023
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Tooltip
              title={<Typography variant="body2">{data}</Typography>}
              placement="right"
              TransitionComponent={Zoom}
              arrow={true}
            >
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
                <StarBorderIcon sx={{ fontSize: 14, mr: 0.5 }} /> NIRF Rating
                Top 10
              </Typography>
            </Tooltip>
          </Box>
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

export default EducationalDetails;
