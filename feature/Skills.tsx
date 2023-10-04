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

function ListOfSkills() {
  // dummy data for tooltip
  const data =
    "Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India.";

  const skillsData = [
    "Java",
    "PHP",
    "AWS",
    "Node JS",
    "Python",
    "Javascript",
    "React JS",
    "Angular JS",
  ];

  return (
    <Box>
      <Box
        mt={0.5}
        mx={1.5}
        // border={"1px solid "}
        // borderColor={"secondary.light"}
        // borderRadius={1}
        px={1}
        pt={1}
      >
        <Box my={0.5} display={"flex"}>
          <Typography variant="h6" mr={6.5}>
            Skills
          </Typography>
          {/* {skillsData.map((item, index) => (
            <Chip
              label={item}
              size="small"
              sx={{
                mr: 0.5,
                "&:hover": { bgcolor: "primary.main" },
              }}
              key={index}
            />
          ))} */}
          <Typography variant="h6">
            {`2`} Match out {`12`} Skills
          </Typography>
          <Typography component={"span"} variant="subtitle2" ml={1}>
            Python , Java
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ListOfSkills;
