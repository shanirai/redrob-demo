"use client";
// React , Next js Packages
import React from "react";
import { useRouter } from "next/navigation";
// MUI packages
import { Box, Grid, Typography } from "@mui/material";
// MUI Icons
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
// Custom packages

function BasicInfo() {
  //** useRouter hooks */
  const router = useRouter();

  return (
    <Box>
      <Box
        my={2}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={2}
        px={2.5}
        py={2.5}
      >
        <Typography variant="h5">Basic Information</Typography>
        <Box mt={1.5}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Current Designation
              </Typography>
              <Typography variant="subtitle2" color={"text.primary"} mt={1}>
                Software Developer
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Email
              </Typography>
              <Typography variant="subtitle2" color={"text.primary"} mt={1}>
                shani.rai@mckinelyrice.com
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Phone
              </Typography>
              <Typography variant="subtitle2" color={"text.primary"} mt={1}>
                (+91) 8005903527
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Location
              </Typography>
              <Typography variant="subtitle2" mt={1}>
                Noida, UP
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Social Links
              </Typography>
              <Typography component={"span"} display={"flex"} mt={1}>
                <LinkedInIcon
                  sx={{
                    width: 18,
                    height: 18,
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
                    width: 18,
                    height: 18,
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
                    width: 18,
                    height: 18,
                    mr: 1.5,
                    cursor: "pointer",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                  onClick={() => router.push("https://mckinleyrice.com/")}
                />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default BasicInfo;
