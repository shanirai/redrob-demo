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
  Tooltip,
  Zoom,
} from "@mui/material";
// MUI icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CustomChip from "./common/CustomChip";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import RightSidePanel from "./panel/RightSidePanel";

function EducationalDetails(props: any) {
  //** props -- components  */
  const { candiEduData, cardId } = props;

  // dummy data for tooltip
  const data =
    "Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India.";

  // exp data
  const eduData = [
    {
      label: "10% Overall",
      icon: "",
      color: "",
      description: "Overall comparison  with  top institute  in local region",
    },
    {
      label: "20% Ranking",
      icon: "",
      color: "",
      description:
        "government ranking and service comparison  with  top institute  in local region",
    },
  ];

  return (
    <Box>
      {candiEduData?.slice(0, 1).map((candiEdu: any, index: any) => (
        <Box
          mt={0.5}
          mx={1.5}
          // border={"1px solid "}
          // borderColor={"secondary.light"}
          // borderRadius={1}
          px={1}
          py={1}
        >
          <Grid container>
            <Grid item xs={1}>
              <Typography variant="h6">Education</Typography>
            </Grid>

            <Grid item xs={11} key={index}>
              <Box flexDirection={"column"} display={"flex"} ml={1.5}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography variant="h6">
                    {candiEdu?.degree}
                    {`(${candiEdu?.stream})`}
                  </Typography>

                  <Typography variant="subtitle2" color={"text.secondary"}>
                    {`From ${candiEdu?.from}`} - {`to ${candiEdu?.to}`}
                  </Typography>
                </Stack>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mt={0.5}
                >
                  <Box display={"flex"}>
                    <Typography variant="subtitle2">
                      {candiEdu?.institute_name}
                    </Typography>
                    {/* {eduData.map((item, index) => (
                      <CustomChip item={item} key={index} />
                    ))} */}
                    <Stack direction={"row"} spacing={1} ml={1}>
                      <Tooltip
                        title={
                          <Typography variant="body2">
                            learning from accredited institutions in India can
                            play a crucial role in shaping a candidate's
                            character, behavior, and outlook in the workplace.
                          </Typography>
                        }
                        placement="right"
                        TransitionComponent={Zoom}
                        arrow={true}
                      >
                        <Typography
                          variant="caption"
                          bgcolor={"secondary.light"}
                          ml={1}
                          px={1.5}
                          py={0.5}
                          borderRadius={1.5}
                          fontSize={10}
                          fontWeight={500}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <GradeIcon sx={{ fontSize: 10, mr: 0.5 }} />{" "}
                          {candiEdu?.t_accreditation_tag}
                        </Typography>
                      </Tooltip>

                      <Tooltip
                        title={
                          <Typography variant="body2">
                            Learning from top-ranking institutions in India can
                            cultivate traits like diligence, global awareness,
                            competitiveness, ethical values, and a drive for
                            excellence
                          </Typography>
                        }
                        placement="right"
                        TransitionComponent={Zoom}
                        arrow={true}
                      >
                        <Typography
                          variant="caption"
                          bgcolor={"secondary.light"}
                          ml={1}
                          px={1.5}
                          py={0.5}
                          borderRadius={1.5}
                          fontSize={10}
                          fontWeight={500}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <ArrowUpwardIcon sx={{ fontSize: 10, mr: 0.5 }} />
                          {candiEdu?.t_ranking_per}% Ranking
                        </Typography>
                      </Tooltip>
                      <Tooltip
                        title={
                          <Typography variant="body2">
                            After assessing the candidate's educational
                            institution in comparison to a leading educational
                            institute, using relevant data, it's evident that
                            this candidate's institute meets a high standard and
                            is comparable to the top institution
                          </Typography>
                        }
                        placement="right"
                        TransitionComponent={Zoom}
                        arrow={true}
                      >
                        <Typography
                          variant="caption"
                          bgcolor={"#87CEEB"}
                          ml={1}
                          px={1.5}
                          py={0.5}
                          borderRadius={1.5}
                          fontSize={10}
                          fontWeight={500}
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <ArrowUpwardIcon sx={{ fontSize: 10, mr: 0.5 }} />{" "}
                          {candiEdu.t_overall_per}% Overall
                        </Typography>
                      </Tooltip>
                    </Stack>
                  </Box>
                  <Box pt={1} justifyContent={"flex-end"}>
                    <RightSidePanel cardId={cardId} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default EducationalDetails;
