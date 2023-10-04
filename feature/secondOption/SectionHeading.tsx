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
import GradeIcon from "@mui/icons-material/Grade";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import BasicProfile from "./BasicProfile";

function SectionHeading(props: any) {
  //** props -- components */
  const { filterData } = props;

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
      icon: <ArrowCircleUpIcon sx={{ fontSize: 14, mr: 0.5 }} />,
      color: "",
      description:
        "Showcases profile relevance percentage compared with the Job Description",
    },

    {
      label: "A+(96-100)",
      icon: <GradeIcon sx={{ fontSize: 14, mr: 0.5 }} />,
      color: "",
      description: "Compared with other candidates",
    },
    {
      label: "Recruiter Choice",
      icon: <GppGoodOutlinedIcon sx={{ fontSize: 14, mr: 0.5 }} />,
      color: "",
      description:
        "Many recruiters have bookmarked this candidate and selected them for interviews.",
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
          {filterData[0]?.candidate_name.charAt(0)}
        </Avatar>
      </Box>
      <Box flexGrow={1} ml={1}>
        <Grid container display={"flex"} alignItems={"center"}>
          <Grid item xs={2}>
            <Typography variant="h4" fontWeight={600}>
              {filterData[0]?.candidate_name}
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
        <Box display={"flex"}>
          <Typography variant="subtitle2">
            Working as {filterData[0]?.candidate_position}
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            display={"flex"}
            alignItems={"center"}
            ml={2}
          >
            <AccessAlarmsIcon
              sx={{ color: "text.secondary", fontSize: 14, mr: 0.5 }}
            />{" "}
            {filterData[0]?.updated_at}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionHeading;
