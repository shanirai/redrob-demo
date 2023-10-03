"use client";
// React , Next JS packages
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// MUI packages
import { Avatar, Box, Grid, Typography } from "@mui/material";
// Third party packages
import { useSnackbar } from "notistack";
// Mui Icons
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
// Custom Components
import CustomChip from "../common/CustomChip";
import BasicProfile from "./BasicProfile";

function SectionHeading() {
  //**   useRouter  hooks    */
  const router = useRouter();

  //**  useSnackbar hooks  */
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //**  useState hooks   */
  const [active, setActive] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

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
    <Box display={"flex"} mb={1.5}>
      <Box>
        <Avatar
          variant="rounded"
          sx={{
            height: "50px",
            width: "50px",
            bgcolor: "primary.main",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          N
        </Avatar>
      </Box>

      <Box flexGrow={1} ml={1}>
        <Grid container display={"flex"} alignItems={"flex-end"}>
          <Grid item xs={2}>
            <Typography variant="h4" fontWeight={600}>
              Nirmala Gond
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Box display={"flex"}>
              {data.map((item, index) => (
                <CustomChip item={item} key={index} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={5} display={"flex"} justifyContent={"flex-end"}>
            <Box>
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
                  enqueueSnackbar("Jobs Bookmark", {
                    variant: "success",
                  })
                }
              />
            </Box>
          </Grid>
        </Grid>
        <Typography variant="subtitle2">
          Working as Senior Software Developer
        </Typography>
        {/* <BasicProfile /> */}
      </Box>
    </Box>
  );
}

export default SectionHeading;
