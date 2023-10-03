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

function ExperianceDetails(props: any) {
  //** props -- components */
  const { active } = props;

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
        <Box my={1}>
          <Box display={"flex"} alignItems={"baseline"}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              Tata Consultancy Services
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
              Apr 2023 – Present
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Typography variant="body2" color={"text.secondary"}>
              Full Time |{" "}
            </Typography>
            <Typography variant="body2" color={"text.secondary"} ml={1}>
              Amritsar, Punjab
            </Typography>
          </Stack>
          <Box mt={2}>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
              pb={1}
            >
              <CircleIcon
                sx={{ color: "secondary.light", fontSize: 12, mr: 1 }}
              />
              As a ReactJS Developer I have gained expertise in Web application
              development. I was responsible for integrating azure B2c login and
              various login authentication in the applications so that only
              authorized user can access the application.
            </Typography>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
              pb={1}
            >
              <CircleIcon
                sx={{ color: "secondary.light", fontSize: 12, mr: 1 }}
              />
              Experience with integration of third party media packages.
            </Typography>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
              pb={1}
            >
              <CircleIcon
                sx={{ color: "secondary.light", fontSize: 12, mr: 1 }}
              />
              As a frontend Developer, integrated API’s so that user can perform
              smooth functionality of CRUD operations through UI.
            </Typography>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
              pb={1}
            >
              <CircleIcon
                sx={{ color: "secondary.light", fontSize: 12, mr: 1 }}
              />
              Experience writing with Azure pipelines and performing release for
              different environments.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        {/* second experiance secion code replicate */}
        <Box>
          <Box display={"flex"} alignItems={"baseline"}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              L & G consultancy Software Pvt Ltd,
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
              Jan 2021 – Mar 2023
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Typography variant="body2" color={"text.secondary"}>
              Full Time |{" "}
            </Typography>
            <Typography variant="body2" color={"text.secondary"} ml={1}>
              Amritsar, Punjab
            </Typography>
          </Stack>
          <Box mt={2}>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
              pb={1}
            >
              <CircleIcon
                sx={{ color: "secondary.light", fontSize: 12, mr: 1 }}
              />
              As a ReactJS Developer I have gained expertise in Web application
              development. I was responsible for integrating azure B2c login and
              various login authentication in the applications so that only
              authorized user can access the application.
            </Typography>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
              pb={1}
            >
              <CircleIcon
                sx={{ color: "secondary.light", fontSize: 12, mr: 1 }}
              />
              Experience with integration of third party media packages.
            </Typography>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
              pb={1}
            >
              <CircleIcon
                sx={{ color: "secondary.light", fontSize: 12, mr: 1 }}
              />
              As a frontend Developer, integrated API’s so that user can perform
              smooth functionality of CRUD operations through UI.
            </Typography>
            <Typography
              variant="body2"
              display={"flex"}
              alignItems={"baseline"}
              pb={1}
            >
              <CircleIcon
                sx={{ color: "secondary.light", fontSize: 12, mr: 1 }}
              />
              Experience writing with Azure pipelines and performing release for
              different environments.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ExperianceDetails;
