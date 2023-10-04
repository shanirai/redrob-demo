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
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PublicIcon from "@mui/icons-material/Public";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function BasicDetails() {
  //**   useRouter  hooks    */
  const router = useRouter();

  return (
    <Box pl={2.5}>
      <Box>
        {/* <Stack direction={"column"}>
          <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
            Current Designation
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Product Designer
          </Typography>
        </Stack> */}
        <Stack direction={"column"} display="none">
          <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
            Experience
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            5 Years
          </Typography>
        </Stack>
        <Stack direction={"column"} mb={0.5}>
          <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
            Email
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            display={"flex"}
            flexWrap={"nowrap"}
            sx={{ wordBreak: "break-word" }}
          >
            <a
              href="mailto: crystilia.jones@spotify.com"
              style={{ textDecoration: "none", color: "#05264e" }}
            >
              crystilia.jones@spotify.com
            </a>
          </Typography>
        </Stack>
        <Stack direction={"column"} mb={0.5}>
          <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
            Phone
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            display={"flex"}
            flexWrap={"nowrap"}
            sx={{ wordBreak: "break-word" }}
          >
            <a
              href="tel: 8005903527"
              style={{ textDecoration: "none", color: "#05264e" }}
            >
              8005903527
            </a>
          </Typography>
        </Stack>
        <Stack direction={"column"}>
          <Typography variant="body2" fontWeight={500} color={"text.secondary"}>
            Location
          </Typography>
          <Typography variant="subtitle2" fontWeight={600}>
            Pune , India
          </Typography>
        </Stack>
      </Box>

      <Box display={"flex"} justifyContent={"center"} pt={1.25}>
        {/* Buttons for action */}

        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "#E75252",
            fontSize: 12,

            height: 32,
            py: 1.5,
            mr: 2,
            width: "40%",
            "&:hover": {
              bgcolor: "#E75252",
            },
          }}
        >
          Rejected
        </Button>
        <Button
          variant="contained"
          size="small"
          sx={{
            bgcolor: "primary.main",
            fontSize: 12,
            width: "40%",
            height: 32,
            py: 1.5,
          }}
        >
          Hired
        </Button>
      </Box>
    </Box>
  );
}

export default BasicDetails;
