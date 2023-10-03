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
} from "@mui/material";
// MUI icons
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CircleIcon from "@mui/icons-material/Circle";
// Custom components
import CustomChip from "../common/CustomChip";
import ExperienceCompare from "./ExperienceCompare";

function ExperianceDetails(props: any) {
  //** props -- components */
  const { active } = props;
  const [isShowMore, setIsShowMore] = useState(false);
  const [isShowMore2, setIsShowMore2] = useState(false);
  // exp data
  const expData = [
    {
      label: "Forbes 10 Company",
      icon: "",
      color: "",
    },
    {
      label: "Ranking",
      icon: "",
      color: "",
    },
    {
      label: "Rating",
      icon: "",
      color: "",
    },
  ];

  const data = [
    {
      index: 1,
      points:
        "In a world full of ordinary, we create mobile applications for people with an extraordinary vision. It is easy to lose one's true self in this monotonous world, but since you are here looking for a team, we believe that you too are willing to go the extra mile..",
    },
    {
      index: 2,
      points: "Experience with integration of third party media packages.",
    },
    {
      index: 3,
      points:
        " As a frontend Developer, integrated API’s so that user can perform smooth functionality of CRUD operations through UI.",
    },
    {
      index: 4,
      points:
        " As a frontend Developer, integrated API’s so that user can perform smooth functionality of CRUD operations through UI",
    },
  ];

  const sliceData = data.slice(0, 2);
  let lastlen = data.length;

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
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h5">Experience</Typography>
          <Typography
            variant="subtitle2"
            fontWeight={600}
            color={"text.secondary"}
          >
            4 years Experience
          </Typography>
        </Stack>
        <Grid container sx={{ display: "flex", flexWrap: "nowrap" }}>
          <Grid item xs={8}>
            <Box my={1}>
              <Box display={"flex"} alignItems={"baseline"}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                 Techugo Pvt. Ltd
                </Typography>
                {/* custom chip */}

                {expData.map((item, index) => (
                  <CustomChip item={item} key={index} />
                ))}
              </Box>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={1}
              >
                <Typography variant="subtitle2" color={"text.primary"}>
                Senior Software Developer
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                Aug 2018 – Present
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <Typography variant="body2" color={"text.secondary"} ml={1}>
                Noida, UP
                </Typography>
              </Stack>
              <Box mt={2}>
                {!isShowMore
                  ? sliceData.map((item, index) => {
                      return (
                        <>
                          {
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
                              {item.points}

                              {item.index == 2 ? (
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
                              ) : (
                                ""
                              )}
                            </Typography>
                          }
                        </>
                      );
                    })
                  : data.map((item, index) => {
                      return (
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
                            {item.points}

                            {item.index == lastlen ? (
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
                            ) : (
                              ""
                            )}
                          </span>
                        </Typography>
                      );
                    })}
              </Box>
            </Box>
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "secondary.main", marginLeft: "12px" }}
            flexItem
          />
          <Grid item xs={4}>
           <ExperienceCompare/>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        {/* second experiance secion code replicate */}
        <Box>
          <Grid container sx={{ display: "flex", flexWrap: "nowrap" }}>
            <Grid item xs={8}>
              <Box display={"flex"} alignItems={"baseline"}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                  Ginger Webs Pvt. Ltd.
                </Typography>
                {/* custom chip */}

                {expData.map((item, index) => (
                  <CustomChip item={item} key={index} />
                ))}
              </Box>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={1}
              >
                <Typography variant="subtitle2" color={"text.primary"}>
                  Software Developer
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                Oct 2017 – May 2018
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                <Typography variant="body2" color={"text.secondary"} ml={1}>
                Noida, UP
                </Typography>
              </Stack>
              <Box mt={2}>
              {!isShowMore2
                  ? sliceData.map((item, index) => {
                      return (
                        <>
                          {
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
                              {item.points}

                              {item.index == 2 ? (
                                <Typography
                                  component={"span"}
                                  variant="subtitle2"
                                  onClick={() => setIsShowMore2(!isShowMore2)}
                                  sx={{
                                    color: "red",
                                    marginLeft: "3px",
                                    cursor: "pointer",
                                  }}
                                >
                                  {isShowMore2 ? "...less" : "...more"}
                                </Typography>
                              ) : (
                                ""
                              )}
                            </Typography>
                          }
                        </>
                      );
                    })
                  : data.map((item, index) => {
                      return (
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
                            {item.points}

                            {item.index == lastlen ? (
                              <Typography
                                component={"span"}
                                variant="subtitle2"
                                onClick={() => setIsShowMore2(!isShowMore2)}
                                sx={{
                                  color: "red",
                                  marginLeft: "3px",
                                  cursor: "pointer",
                                }}
                              >
                                {isShowMore2 ? "...less" : "...more"}
                              </Typography>
                            ) : (
                              ""
                            )}
                          </span>
                        </Typography>
                      );
                    })}
              </Box>
            </Grid>
            <Divider
              orientation="vertical"
              sx={{ bgcolor: "secondary.main", marginLeft: "12px" }}
              flexItem
            />
            <Grid item xs={4}>
             <ExperienceCompare/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default ExperianceDetails;
