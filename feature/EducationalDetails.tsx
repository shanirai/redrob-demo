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
import CustomChip from "./common/CustomChip";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function EducationalDetails(props: any) {
  //** props -- components  */
  const { candiEduData } = props;

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
                <Box display={"flex"} alignItems={"center"}>
                  <Typography variant="subtitle2">
                    {candiEdu?.institute_name}
                  </Typography>
                  {eduData.map((item, index) => (
                    <CustomChip item={item} key={index} />
                  ))}

                  {/* <Tooltip
                    title={<Typography variant="body2">{data}</Typography>}
                    placement="right"
                    TransitionComponent={Zoom}
                    arrow={true}
                  >
                    <Typography
                      variant="caption"
                      bgcolor={"secondary.light"}
                      ml={1}
                      px={2}
                      py={0.5}
                      borderRadius={1.5}
                      fontWeight={600}
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <StarBorderIcon sx={{ fontSize: 12, mr: 0.5 }} /> NIRF
                      Rating Top 10
                    </Typography>
                  </Tooltip> */}
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
