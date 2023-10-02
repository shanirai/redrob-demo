"use client";
// React , Next Js packages
import React, { useState, useEffect } from "react";
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

// Third party packages
import { useSnackbar } from "notistack";
import CustomChip from "../common/CustomChip";
import BasicTabs from "./CustomTab";

function CandidateList() {
  //**   useRouter  hooks    */
  const router = useRouter();

  //**  useSnackbar hooks  */
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //**  useState hooks   */
  const [active, setActive] = useState(false);

  //**  data    */
  const data = [
    {
      label: "60% Relevance",
      icon: "",
      color: "",
    },
    {
      label: "Recruiter Choice",
      icon: "",
      color: "",
    },
    {
      label: "A+(96-100)",
      icon: "",
      color: "",
    },
  ];
  return (
    <Box>
      <Box
        bgcolor={"#fff"}
        boxShadow={" rgba(99, 99, 99, 0.1) 0px 2px 8px 0px"}
        borderRadius={2}
        mt={3}
        py={2}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"baseline"}
          bgcolor={"#f9fafb"}
          px={2.5}
          borderRadius={"8px 8px 0 0px"}
        >
          <Box display={"flex"}>
            <Box>
              <Typography
                variant="h4"
                color={"grey.100"}
                bgcolor={"primary.main"}
                px={1}
                py={1}
                borderRadius={"4px"}
                sx={{ "&:hover": { bgcolor: "secondary.main" } }}
              >
                CJ
              </Typography>
            </Box>
            <Box flexDirection={"column"} ml={1}>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="h4" fontWeight={600} mr={2.5}>
                  Crystals Jones
                </Typography>

                {/* custom chip*/}

                {data.map((item, index) => (
                  <CustomChip item={item} key={index} />
                ))}
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight={600} mt={0.5}>
                  Working as{" "}
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    fontWeight={600}
                    color={"text.primary"}
                  >{`Product Designer`}</Typography>{" "}
                  in {`Spotify Inc. `}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <FileDownloadIcon
              sx={{
                width: 25,
                height: 25,
                mr: 1.5,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            />
            <BookmarkIcon
              sx={{
                width: 25,
                height: 25,
                mr: 1.5,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() =>
                enqueueSnackbar("Jobs Bookmark", { variant: "success" })
              }
            />
          </Stack>
        </Box>
        <Box px={2.5} pt={0.5}>
          <Typography variant="body2">
            Having 4+ years experience to design and build advanced applications
            for the Web and Mobile App platform. Understanding & mapping
            client’s requirements / enhancements to the product, implementing
            solutions that effectively resolve problems or provide improvement.
          </Typography>
        </Box>

        {/* section for roles and about  */}

        <Box py={2}>
          <BasicTabs />
        </Box>

        {/* Buttons for action */}
        <Box display={"flex"} justifyContent={"flex-end"} px={2.5}>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#E75252",

              mr: 2,
              "&:hover": {
                bgcolor: "#E75252",
              },
            }}
          >
            Rejected
          </Button>
          <Button variant="contained" size="small">
            Hired
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CandidateList;
