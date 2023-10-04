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
import PublicIcon from "@mui/icons-material/Public";
// Custom packages

function BasicInfo(props: any) {
  //** useRouter hooks */
  const router = useRouter();

  //** props -- components  */
  const { filterData } = props;

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
                {filterData[0]?.candidate_position}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Email
              </Typography>
              <Typography variant="subtitle2" color={"text.primary"} mt={1}>
                {filterData[0]?.candidate_email}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Phone
              </Typography>
              <Typography variant="subtitle2" color={"text.primary"} mt={1}>
                {filterData[0]?.candidate_phone}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Location
              </Typography>
              <Typography variant="subtitle2" mt={1}>
                {filterData[0]?.candidate_current_location}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="subtitle2" color={"text.secondary"}>
                Social Links
              </Typography>

              <Typography component={"span"} display={"flex"} mt={1}>
                {filterData[0]?.candidate_linkedin === null ? null : (
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
                      router.push(filterData[0]?.candidate_linkedin)
                    }
                  />
                )}
                {filterData[0]?.candidate_github === null ? null : (
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
                    onClick={() => router.push(filterData[0]?.candidate_github)}
                  />
                )}

                {filterData[0]?.candidate_portfolio === null ? null : (
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
                    onClick={() =>
                      router.push(filterData[0]?.candidate_portfolio)
                    }
                  />
                )}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default BasicInfo;
