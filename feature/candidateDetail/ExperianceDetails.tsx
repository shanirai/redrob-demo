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
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// Custom components
import CustomChip from "../common/CustomChip";
import ExperienceCompare from "./ExperienceCompare";

function ExperianceDetails(props: any) {
  //** props -- components */
  const { active, filterData } = props;
  const [isShowMore, setIsShowMore] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);
  // exp data
  const expData = [
    {
      label: "10% Culture",
      icon: "",
      color: "",
      description:
        "Signifies a positive alignment with the cultural aspects of your company.",
    },
    {
      label: "20% Overall",
      icon: "",
      color: "",
      description:
        "Indicates a favorable comparison with your company in general",
    },
  ];

  return (
    <Box position={"relative"}>
      <Box
        my={2}
        border={"1px solid "}
        borderColor={"secondary.light"}
        borderRadius={2}
        px={2.5}
        py={2.5}
      >
        <Stack direction={"row"} justifyContent={"space-between"} width={"66%"}>
          <Typography variant="h5">Experience</Typography>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color={"text.secondary"}
          >
            4 years Experience
          </Typography>
        </Stack>
        {filterData[0]?.experiance?.map((filterExpData: any, index: any) => (
          <Box key={index}>
            <Grid container sx={{ display: "flex", flexWrap: "nowrap" }}>
              <Grid item xs={8}>
                <Box my={1}>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" color={"text.primary"}>
                      {filterExpData?.job_title}
                    </Typography>
                    <Typography variant="subtitle2" color={"text.secondary"}>
                      {filterExpData?.from} - {filterExpData?.to}
                    </Typography>
                  </Stack>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={500}
                      sx={{ cursor: "pointer" }}
                    >
                      {filterExpData?.name}
                    </Typography>
                    {/* custom chip */}

                    {/* {expData.map((item, index) => (
                      <CustomChip item={item} key={index} />
                    ))} */}

                    <Stack direction={"row"} spacing={1} ml={1}>
                      <Tooltip
                        title={
                          <Typography variant="body2">
                            After evaluating candidates' companies alongside
                            yours, and considering pertinent company data, it's
                            apparent that this candidate exhibits greater
                            performance potential
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
                          <ArrowUpwardIcon sx={{ fontSize: 10, mr: 0.5 }} />{" "}
                          {filterExpData.s_overall_per}% Potential
                        </Typography>
                      </Tooltip>

                      <Tooltip
                        title={
                          <Typography variant="body2">
                            It's evident that this candidate is a better
                            cultural fit. Candidate is likely to understand and
                            align with your company's standards and values
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
                          {filterExpData.s_culture_per}% Cultural Fit
                        </Typography>
                      </Tooltip>
                    </Stack>
                  </Box>
                  {/* <Stack direction={"row"} mt={1}>
                  {expData.map((item, index) => (
                      <CustomChip item={item} key={index} />
                    ))}
                  </Stack> */}

                  <Stack direction={"row"}>
                    <Typography variant="body2" color={"text.secondary"} ml={1}>
                      {filterExpData?.location}
                    </Typography>
                  </Stack>
                  <Box mt={2}>
                    {isShowMore ? (
                      <Typography
                        key={index}
                        variant="body2"
                        display={"flex"}
                        alignItems={"baseline"}
                        pb={1}
                      >
                        <CircleIcon
                          sx={{
                            color: "secondary.light",
                            fontSize: 12,
                            mr: 1,
                          }}
                        />
                        <span>
                          {filterExpData?.description}
                          <Typography
                            component={"span"}
                            variant="subtitle2"
                            onClick={() => setIsShowMore(!isShowMore)}
                            sx={{
                              color: "red",
                              marginLeft: "3px",
                              cursor: "pointer",
                            }}
                          >
                            {isShowMore ? "...less" : "...more"}
                          </Typography>
                        </span>
                      </Typography>
                    ) : (
                      <Typography
                        key={index}
                        variant="body2"
                        display={"flex"}
                        alignItems={"baseline"}
                        pb={1}
                      >
                        <CircleIcon
                          sx={{
                            color: "secondary.light",
                            fontSize: 12,
                            mr: 1,
                          }}
                        />
                        <span>
                          {filterExpData?.description.slice(0, 136)}
                          <Typography
                            component={"span"}
                            variant="subtitle2"
                            onClick={() => setIsShowMore(!isShowMore)}
                            sx={{
                              color: "red",
                              marginLeft: "3px",
                              cursor: "pointer",
                            }}
                          >
                            {isShowMore ? "...less" : "...more"}
                          </Typography>
                        </span>
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Grid>
              <Divider
                orientation="vertical"
                sx={{ bgcolor: "text.secondary", ml: 1.5 }}
                flexItem
              />
              <Grid item xs={4}>
                <ExperienceCompare />
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ExperianceDetails;
