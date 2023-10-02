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
import ExperianceCard from "./ExperianceCard";
import EducationCard from "./EducationalDetails";
import ListOfSkills from "./Skills";
import BasicDetails from "./common/BasicDetails";
// Third party packages
import { useSnackbar } from "notistack";

function CandidateListCard() {
  //**   useRouter  hooks    */
  const router = useRouter();

  //**  useSnackbar hooks  */
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //**  useState hooks   */
  const [active, setActive] = useState(false);

  return (
    <Box>
      <Box
        bgcolor={"#fff"}
        boxShadow={" rgba(99, 99, 99, 0.1) 0px 2px 8px 0px"}
        my={3}
        borderRadius={2}
        pb={2.5}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"baseline"}
          bgcolor={"#f9fafb"}
          px={2.5}
          pt={2.5}
          borderRadius={"8px 8px 0 0px"}
        >
          <Box display={"flex"}>
            <Box>
              <Typography
                variant="h3"
                color={"grey.100"}
                bgcolor={"primary.main"}
                px={2}
                py={1.5}
                borderRadius={"4px"}
                sx={{ "&:hover": { bgcolor: "secondary.main" } }}
              >
                CJ
              </Typography>
            </Box>
            <Box flexDirection={"column"} ml={1}>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="h3" fontWeight={600} mr={2.5}>
                  Crystals Jones
                </Typography>

                <Chip
                  label="60% Relevance"
                  size="small"
                  sx={{ mr: 1.5, "&:hover": { bgcolor: "primary.main" } }}
                />
                <Chip
                  label="Recruiters Choice"
                  size="small"
                  sx={{ mr: 1.5, "&:hover": { bgcolor: "primary.main" } }}
                />
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight={600} mt={0.5}>
                  Working as{" "}
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    fontWeight={600}
                    color={"primary.main"}
                  >{`Product Designer`}</Typography>{" "}
                  in {`Spotify Inc. `}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Stack direction={"row"} justifyContent={"flex-end"}>
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
        <Box px={2.5} pt={1}>
          <Typography variant="h6">Summary</Typography>
          <Typography variant="body2">
            Having 4+ years experience to design and build advanced applications
            for the Web and Mobile App platform. Understanding & mapping
            client’s requirements / enhancements to the product, implementing
            solutions that effectively resolve problems or provide improvement.
          </Typography>
        </Box>

        {/* section for roles and about  */}

        <Box py={2}>
          <Grid container rowSpacing={2}>
            <Grid item xs={2.5}>
              <BasicDetails />
            </Grid>
            <Divider
              orientation="vertical"
              sx={{ bgcolor: "secondary.main", mt: 2.7 }}
              flexItem
            />
            <Grid item xs={9.3} onMouseOver={() => setActive(true)}>
              {/* Work experience card  */}

              <ExperianceCard active={active} />

              {/* education card */}

              <EducationCard />

              {/* Skills */}

              <ListOfSkills />
            </Grid>
          </Grid>
        </Box>

        {/* Buttons for action */}
        <Box display={"flex"} justifyContent={"flex-end"} px={2.5}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#f73378",

              mr: 2,
              "&:hover": {
                bgcolor: "red",
              },
            }}
          >
            Rejected
          </Button>
          <Button variant="contained" size="large">
            Hired
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CandidateListCard;
