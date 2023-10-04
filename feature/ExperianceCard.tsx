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
import CustomChip from "./common/CustomChip";
import CustomizeDialog from "./common/CustomizaDialog";
import RightSidePanel from "./panel/RightSidePanel";

function ExperianceCard(props: any) {
  //** props -- components */
  const { active, candiExpData } = props;

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
    {
      label: "10% Reviews",
      icon: "",
      color: "",
      description: "client and employee review  compared  with your company",
    },
    {
      label: "5% Overall",
      icon: "",
      education: true,
      color: "#87CEEB",
      description:
        "overall comparison  with company leader in same sector in local region",
    },
  ];

  return (
    <Box position={"relative"}>
      {candiExpData?.slice(0, 1).map((candiExp: any, index: any) => (
        <Box
          key={index + 1}
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
              <Typography variant="h6" width={""}>
                Experience
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                ml={1.5}
              >
                <Typography variant="h6" color={"text.primary"}>
                  {candiExp?.job_title}
                </Typography>
                <Typography variant="subtitle2" color={"text.secondary"}>
                  {candiExp?.from} - {candiExp?.to}
                </Typography>
              </Stack>
              <Box ml={1.5} display={"flex"} justifyContent={"space-between"}>
                <Box display={"flex"} alignItems={"center"}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      cursor: "pointer",
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {candiExp?.name}
                  </Typography>
                  {/* custom chip */}

                  {expData.map((item, index) => (
                    <CustomChip item={item} key={index} />
                  ))}
                </Box>
                <Box pt={1}>
                  <RightSidePanel />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
}

export default ExperianceCard;