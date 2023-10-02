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
import ExperianceCard from "../ExperianceCard";
import EducationalDetails from "../EducationalDetails";
import ListOfSkills from "../Skills";
import BasicProfile from "./BasicProfile";
import SectionHeading from "./SectionHeading";

function CandidateList() {
  //**   useRouter  hooks    */
  const router = useRouter();

  //**  useSnackbar hooks  */
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //**  useState hooks   */
  const [active, setActive] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

  // cv
  const cvData =
    " Having 4+ years experience to design and build advanced applications for the Web and Mobile App platform. Understanding & mapping client’s requirements / enhancements to the product, implementing solutions that effectively resolve problems or provide improvement.";

  return (
    <Box>
      <Box
        bgcolor={"#fff"}
        boxShadow={" rgba(99, 99, 99, 0.1) 0px 2px 8px 0px"}
        borderRadius={2}
        mt={3}
        py={2}
      >
        <Box bgcolor={"#f9fafb"} px={2.5} borderRadius={"8px 8px 0 0px"}>
          <SectionHeading />
        </Box>
        <Box px={2.5} pt={0.5} display={"none"}>
          <Typography variant="body2">
            {isShowMore ? cvData : cvData.slice(0, 136)}...
            <Typography
              component={"span"}
              variant="subtitle2"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              {isShowMore ? "Show Less" : "Read More"}
            </Typography>
          </Typography>
        </Box>

        {/* section for roles and about  */}
        <Box px={2.5} py={1} display={"none"}>
          <BasicProfile />
        </Box>
        <ListOfSkills />

        <Box py={2}>
          {/* <Grid container>
            <Grid xs={6}>
              <ExperianceCard />
            </Grid>
            <Grid xs={6}>
            
            </Grid>
          </Grid> */}
          <ExperianceCard />
          <EducationalDetails />
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
