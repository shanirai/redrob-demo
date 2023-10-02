"use client";
// React , Next js Packages
import React from "react";
import { useRouter } from "next/navigation";
// MUI packages
import { Box, Grid, Typography } from "@mui/material";
// MUi icons
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PublicIcon from "@mui/icons-material/Public";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function BasicProfile() {
  //**  useRouter hooks */
  const router = useRouter();

  return (
    <Box display={"flex"} alignItems={"flex-end"}>
      {/* <Grid container>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Current Designation</Typography>
          <Typography variant="subtitle2">Product Designer</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="subtitle2">Email</Typography>
          <Typography variant="subtitle2">shani.rai@mckinelyrice.co</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Phone</Typography>
          <Typography variant="subtitle2"> (+91)8005903527</Typography>
        </Grid>

        <Grid item xs={1}>
          <Typography variant="subtitle2">Experiance</Typography>
          <Typography variant="subtitle2">4 Years</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Social Links</Typography>
          <Typography variant="subtitle2">Product Designer</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="subtitle2">Location</Typography>
          <Typography variant="subtitle2">Pune,India</Typography>
        </Grid>
      </Grid> */}
      <Box>
        <Typography variant="caption" fontWeight={600}>
          Product Designer
        </Typography>
      </Box>
      <Box display={"flex"}>
        <Box ml={1} mr={1.5}>
          <Typography
            variant="caption"
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <LocationOnIcon
              sx={{ mr: 0.4, fontSize: 14, color: "text.secondary" }}
            />
            Pune,India
          </Typography>
        </Box>
        <Box mr={1}>
          <Typography
            variant="caption"
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <EmailIcon
              sx={{ mr: 0.4, fontSize: 14, color: "text.secondary" }}
            />
            hemprasad.badgujar@mckinleyrice.co
          </Typography>
        </Box>
        <Box mr={1}>
          <Typography
            variant="caption"
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
          >
            <PhoneInTalkIcon
              sx={{ mr: 0.4, fontSize: 14, color: "text.secondary" }}
            />
            (+91) 8005903527
          </Typography>
        </Box>

        <Box display={"none"} alignItems={"baseline"}>
          <Typography variant="caption" fontWeight={600}>
            <PeopleAltIcon sx={{ mr: 0.7, width: 20, height: 20 }} />
          </Typography>
          <Typography component={"span"} display={"flex"} mt={1}>
            <LinkedInIcon
              sx={{
                width: 16,
                height: 16,
                mr: 1.5,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() =>
                router.push("https://www.linkedin.com/company/mckinley")
              }
            />
            <GitHubIcon
              sx={{
                width: 16,
                height: 16,
                mr: 1.5,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() =>
                router.push("https://github.com/mckinley-rice-india/")
              }
            />
            <PublicIcon
              sx={{
                width: 16,
                height: 16,
                mr: 1.5,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() => router.push("https://mckinleyrice.com/")}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BasicProfile;
