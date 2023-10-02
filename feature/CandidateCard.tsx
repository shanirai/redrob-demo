"use client";
// React , Next Js packages
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
//  Mui packages
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
// MUI icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PublicIcon from "@mui/icons-material/Public";
import CircleIcon from "@mui/icons-material/Circle";

// React Icons

function CandidateCard() {
  //**   useRouter  hooks    */
  const router = useRouter();

  //***   useState hooks   */
  const [isShowMore, setIsShowMore] = useState(false);

  const text =
    "Having 4+ years experience to design and build advanced applications for the Web and Mobile App platform. Understanding & mapping client’s requirements / enhancements to the product, implementing solutions that effectively resolve problems or provide improvement.";

  return (
    <Box>
      <Box
        bgcolor={"#fff"}
        boxShadow={" rgba(99, 99, 99, 0.1) 0px 2px 8px 0px"}
        my={3}
        borderRadius={2}
        pb={2.5}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"baseline"}
          bgcolor={"#f9fafb"}
          px={2.5}
          py={2.5}
          borderRadius={"8px 8px 0 0px"}
        >
          <Box display={"flex"}>
            <Avatar
              alt="Crstal"
              src="/static/images/avatar/1.jpg"
              sx={{
                height: "50px",
                width: "50px",
                fontSize: 20,
                bgcolor: "primary.main",
              }}
            />
            <Box flexDirection={"column"} ml={1}>
              <Typography variant="h3" fontWeight={600}>
                Crystals Jones
              </Typography>
              <Stack direction={"row"}>
                <Typography variant="subtitle2" color={"primary.main"}>
                  Creative Designer
                </Typography>
                <Typography
                  variant="subtitle2"
                  ml={1}
                  color={"grey.600"}
                  display={"flex"}
                >
                  <BusinessCenterIcon sx={{ color: "grey.600", mr: 0.5 }} /> 4
                  Years
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"grey.600"}
                  display={"flex"}
                  ml={1}
                >
                  <LocationOnIcon sx={{ color: "grey.600", mr: 0.5 }} /> Pune,
                  India
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"grey.600"}
                  display={"flex"}
                  ml={1}
                >
                  <HomeWorkIcon sx={{ color: "grey.600", mr: 0.5 }} /> Hybrid
                  Work
                </Typography>
                <Typography
                  variant="subtitle2"
                  color={"grey.600"}
                  display={"flex"}
                  ml={1}
                >
                  <AccessAlarmsIcon sx={{ color: "grey.600", mr: 0.5 }} /> 4
                  Days Ago
                </Typography>
              </Stack>

              <Typography variant="body1" mt={0.5} fontWeight={500}>
                I have 4 years work Experience At US Based Company.
              </Typography>
              <Typography variant="subtitle1" mt={1.5}>
                Career Objective
              </Typography>

              <Typography
                variant="body1"
                marginTop={1}
                component={"span"}
                display={"flex"}
                alignItems={"baseline"}
              >
                <CircleIcon
                  sx={{ color: "secondary.main", fontSize: 14, mr: 1 }}
                />
                {!isShowMore ? text : `${text.slice(0, 100)}...`}
              </Typography>
              <Typography
                onClick={() => setIsShowMore(!isShowMore)}
                variant="subtitle1"
                ml={2.5}
              >
                {isShowMore ? "Show More" : "Show Less"}
              </Typography>
            </Box>
          </Box>
          <Stack direction={"row"} justifyContent={"flex-end"}>
            <LinkedInIcon
              sx={{
                width: 25,
                height: 25,
                mr: 1.5,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() =>
                router.push("https://www.linkedin.com/company/mckinley")
              }
            />
            <GitHubIcon
              sx={{
                width: 25,
                height: 25,
                mr: 1.5,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() =>
                router.push("https://github.com/mckinley-rice-india/")
              }
            />
            <PublicIcon
              sx={{
                width: 25,
                height: 25,
                mr: 1.5,
                cursor: "pointer",
                "&:hover": {
                  color: "primary.main",
                },
              }}
              onClick={() => router.push("https://mckinleyrice.com/")}
            />
          </Stack>
        </Box>

        {/* Buttons for action */}
        <Box display={"flex"} justifyContent={"flex-end"} px={2.5}>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#f73378",
              mr: 2,
              "&:hover": {
                bgcolor: "red",
              },
            }}
          >
            Rejected
          </Button>
          <Button variant="contained" size="large">
            Hired
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CandidateCard;
