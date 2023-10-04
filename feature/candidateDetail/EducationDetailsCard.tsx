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
// Custom components
import CustomChip from "../common/CustomChip";
import EducationCompare from "./EducationCompare";

function EducationDetailsCard(props: any) {
  //** props -- components */
  const { active } = props;
  const [isShowMore, setIsShowMore] = useState(false);
  // dummy data for tooltip
  const data =
    "Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India.";

  // exp data
  const eduData = [
    {
      label: "20% Overall",
      icon: "",
      color: "",
      description:"Overall comparison  with  top institute  in local region"
    },
    {
      label: "10% Ranking",
      icon: "",
      color: "",
      description:"government ranking and service comparison  with  top institute  in local region"
    },
  ];

  const about =
    "Established in 1998 Babu Banarasi Das National Institute of Technology and Management is a known reputed Institute, located in Lucknow, Uttar Pradesh. Babu Banarasi Das National Institute of Technology and Management offers 23 diverse courses for Degree in Full Time mode. Babu Banarasi Das National Institute of Technology and Management offers a range of 20 UG courses. These courses are aimed to provide students with the necessary skills and knowledge in their field of interest. Candidate can pursue in multiple range of courses like B.E. / B.Tech, MBA/PGDM, M.E./M.Tech, MCA, BBA, BCA, B.Pharma with the stream of Engineering, Business & Management Studies, IT & Software and Medicine & Health Sciences. From introductory courses to more advanced topics, there are a variety of courses to choose from. Institute provides opportunity to students to gain proficiency & expertise in the specialization of Civil Engineering, Electrical Engineering, Mechanical Engineering, Computer Science Engineering, Electronics & Communication Engineering, Aeronautical Engineering, Chemical Engineering, Information Technology. Courses offered by institute are well recognized and acknowlegded by approving body like AICTE.";

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
          <Typography variant="h5">Education</Typography>
        </Stack>
        <Grid container sx={{ display: "flex", flexWrap: "nowrap" }}>
          {/* //left column */}
          <Grid item xs={8}>
            <Box my={1}>
              <Box display={"flex"} alignItems={"baseline"}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{ cursor: "pointer" }}
                >
                 B.B.D.N.I.T.M
                </Typography>
                {/* custom chip */}

                {eduData.map((item, index) => (
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
                Bachelor of Technology
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                 2012 – 2016
                </Typography>
              </Stack>
              <Stack direction={"row"}>
                {/* <Typography variant="body2" color={"text.secondary"} ml={1}>
                  Amritsar, Punjab, India
                </Typography> */}
              </Stack>
              <Box mt={2}>
                <Typography variant="subtitle1">About</Typography>

                {/* //show more and less feature */}
                <Typography
                  variant="body2"
                  display={"flex"}
                  alignItems={"baseline"}
                >
                  <span>
                    {isShowMore ? about : about.slice(0, 136)}
                    <Typography
                      component={"span"}
                      variant="subtitle2"
                      sx={{
                        color: "red",
                        marginLeft: "3px",
                        cursor: "pointer",
                      }}
                      onClick={() => setIsShowMore(!isShowMore)}
                    >
                      {isShowMore ? "...less" : "...more"}
                    </Typography>
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* //vertical line to differentiate left and right column */}
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "secondary.main", marginLeft: "12px" }}
            flexItem
          />
          {/* //Right column */}
          <Grid item xs={4}>
            <EducationCompare />
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
      </Box>
    </Box>
  );
}

export default EducationDetailsCard;
