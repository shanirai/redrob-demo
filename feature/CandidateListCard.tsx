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
// Custom components
import CustomChip from "./common/CustomChip";
import CandidateData from "../data/candi.json";

import GradeIcon from "@mui/icons-material/Grade";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function CandidateListCard(props: any) {
  //**  props -- components  */
  const { handleActive } = props;

  //**   useRouter  hooks    */
  const router = useRouter();
  //***   useState hooks   */
  const [isShowMore, setIsShowMore] = useState(false);

  //**  useSnackbar hooks  */
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //**  useState hooks   */
  const [active, setActive] = useState(false);

  // cv
  const cvData =
    " Having 4+ years experience to design and build advanced applications for the Web and Mobile App platform. Understanding & mapping client’s requirements / enhancements to the product, implementing solutions that effectively resolve problems or provide improvement.";

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
    <Box>
      {CandidateData.map((candiData, index) => (
        <Box
          bgcolor={"#fff"}
          boxShadow={" rgba(99, 99, 99, 0.1) 0px 2px 8px 0px"}
          borderRadius={2}
          mt={3}
          py={2}
          key={index}
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
                  {candiData.candidate_name.charAt(0)}
                </Avatar>
              </Box>
              <Box flexDirection={"column"} ml={1}>
                <Box display={"flex"} alignItems={"center"}>
                  <Typography variant="h4" fontWeight={600} mr={2.5}>
                    {candiData.candidate_name}
                  </Typography>

                  {/* custom chip*/}

                  {data.map((item, index) => (
                    <CustomChip item={item} key={index} />
                  ))}
                </Box>
                <Box display={"flex"}>
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    mt={0.5}
                    mr={1}
                  >
                    Working as {candiData.candidate_position}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    mt={0.5}
                    display={"flex"}
                    alignItems={"center"}
                    ml={2}
                  >
                    <AccessAlarmsIcon
                      sx={{ color: "text.secondary", fontSize: 14, mr: 0.5 }}
                    />{" "}
                    {candiData.updated_at}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Stack direction={"row"} justifyContent={"flex-end"} pt={1.5}>
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
              {isShowMore
                ? candiData.candidate_summary
                : candiData.candidate_summary.slice(0, 136)}
              ...
              <Typography
                component={"span"}
                variant="body2"
                onClick={() => setIsShowMore(!isShowMore)}
              >
                {isShowMore ? "Show Less" : "Read More"}
              </Typography>
            </Typography>
          </Box>

          {/* section for roles and about  */}

          <Box py={1}>
            <Grid container rowSpacing={1}>
              <Grid item xs={9.4} onMouseOver={() => setActive(true)}>
                {/* Work experience card  */}

                <ExperianceCard
                  candiExpData={candiData?.experiance}
                  active={active}
                  cardId={index}
                />

                {/* education card */}

                <EducationCard candiEduData={candiData?.education} />

                {/* Skills */}

                <ListOfSkills />
              </Grid>
              <Divider
                orientation="vertical"
                sx={{ bgcolor: "text.secondary", mt: 2 }}
                flexItem
              />
              <Grid item xs={2.5}>
                <BasicDetails />
              </Grid>
            </Grid>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default CandidateListCard;
