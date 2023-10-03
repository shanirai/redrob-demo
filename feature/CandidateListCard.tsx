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
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PublicIcon from "@mui/icons-material/Public";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ExperianceCard from "./ExperianceCard";
import EducationCard from "./EducationalDetails";
import ListOfSkills from "./Skills";
import BasicDetails from "./common/BasicDetails";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

// Third party packages
import { useSnackbar } from "notistack";
import CustomChip from "./common/CustomChip";

import GradeIcon from '@mui/icons-material/Grade'
import GppGoodIcon from '@mui/icons-material/GppGood';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'



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
      icon: <ArrowCircleUpIcon  sx={{ fontSize: 14, mr: 0.5 }}/>,
      color: "",
    },
    {
      label: "Recruiter Choice",
      icon: <GppGoodIcon  sx={{ fontSize: 14, mr: 0.5 }}/>,
      color: "",
    },
    {
      label: "A+(96-100)",
      icon: <GradeIcon  sx={{ fontSize: 14, mr: 0.5 }}/>,
      color: "",
    },
  ];

  return (
    <Box>
      <Box
        bgcolor={"#fff"}
        boxShadow={" rgba(99, 99, 99, 0.1) 0px 2px 8px 0px"}
        borderRadius={2}
        mt={3}
        py={2}
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
              {/* <Typography
                variant="h4"
                color={"grey.100"}
                bgcolor={"primary.main"}
                px={1}
                py={1}
                borderRadius={"4px"}
                sx={{ "&:hover": { bgcolor: "secondary.main" } }}
              >
                CJ
              </Typography> */}
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
                CJ
              </Avatar>
            </Box>
            <Box flexDirection={"column"} ml={1}>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="h4" fontWeight={600} mr={2.5}>
                  Crystals Jones
                </Typography>

                {/* custom chip*/}

                {data.map((item, index) => (
                  <CustomChip item={item} key={index} />
                ))}
              </Box>
              <Box>
                <Typography variant="subtitle2" fontWeight={600} mt={0.5}>
                  Working as{" "}
                  <Typography
                    component={"span"}
                    variant="subtitle2"
                    fontWeight={600}
                    color={"text.primary"}
                  >{`Product Designer`}</Typography>{" "}
                  in {`Spotify Inc. `}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Stack direction={"row"} justifyContent={"flex-end"}>
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
            {isShowMore ? cvData : cvData.slice(0, 136)}...
            <Typography
              component={"span"}
              variant="subtitle2"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              {isShowMore ? "Show Less" : "Read More"}
            </Typography>
          </Typography>
        </Box>

        {/* section for roles and about  */}

        <Box py={1}>
          <Grid container rowSpacing={1}>
            <Grid item xs={9.3} onMouseOver={() => setActive(true)}>
              {/* Work experience card  */}

              <ExperianceCard active={active} />

              {/* education card */}

              <EducationCard />

              {/* Skills */}

              <ListOfSkills />
            </Grid>
            <Divider
              orientation="vertical"
              sx={{ bgcolor: "secondary.main", mt: 2 }}
              flexItem
            />
            <Grid item xs={2.5}>
              <BasicDetails />
            </Grid>
          </Grid>
        </Box>

        {/* Buttons for action */}
        <Box display={"flex"} justifyContent={"flex-end"} px={2.5}>
          {/* <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#E75252",

              mr: 2,
              "&:hover": {
                bgcolor: "#E75252",
              },
            }}
          >
            Rejected
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
}

export default CandidateListCard;
