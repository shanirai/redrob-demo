"use client";
import React from "react";
// MUi Packages
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import CallIcon from "@mui/icons-material/Call";
import OtherInfo from "./OtherInfo";
import Comparison from "./Comparison";
import CustomChip from "../common/CustomChip";
// Third party packages
// Custom components

// exp data
const expData = [
  {
    label: "Forbes 10 Company",
    icon: "",
    color: "",
    description: "",
  },
  {
    label: "Ranking",
    icon: "",
    color: "",
    description: "",
  },
  {
    label: "Rating",
    icon: "",
    color: "",
    description: "",
  },
];

const perks = [
  "Health Insurance",
  "Social Security",
  "Acheivement Award",
  "Paid Vacation",
];

const getIcon = (val: any) => {
  if (val == "up") {
    return <ArrowCircleUpIcon color="success" />;
  }
  return <ArrowCircleDownIcon color="error" />;
};

const Company = (props: any) => {
  const {
    name,
    description,
    website_link,
    size,
    industry_sector,
    location,
    specialties,
    overall,
    s_overall_per,
    s_culture_per,
    t_overall_per,
  } = props?.data;

  const [showMore, setShowMore] = React.useState(false);

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        alignItems={"center"}
        mb={2}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={"left"}
          width={"100%"}
        >
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Typography
              variant="h4"
              color={"#45b3e0"}
              textAlign={"center"}
              mb={2}
            >
              {props.left && "Candidate's Company"}
              {props.right &&
                props.isAIRec == "yes" &&
                "AI Recommended Top Institute In The Sector"}
              {props.right && props.isAIRec == "no" && "Your Company"}
            </Typography>
          </Box>

          <Typography variant="h4" fontWeight={600}>
            {name}
          </Typography>
          <Link
            href={website_link}
            target="_blank"
            rel="noreferrer"
            px={0}
            mx={0}
            fontSize={12}
            mt={1.5}
          >
            {website_link}
          </Link>
        </Box>
      </Box>
      {/* <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {expData.map((item, index) => (
          <CustomChip item={item} key={index} ml={0} />
        ))}
      </Stack> */}
      {/* overall chip */}
      {/* <Comparison /> */}
      <Box pt={0.5} mt={2}>
        <Typography variant="body2">
          {!showMore ? description.slice(0, 100) : description}
          <span
            onClick={() => {
              setShowMore(!showMore);
            }}
            style={{ fontWeight: 600 }}
          >
            {!showMore ? "...Show more" : "  ...Show less"}
          </span>
        </Typography>
      </Box>
      <Box
        pt={2}
        sx={{
          alignItems: "flex-start",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <OtherInfo
          label="Size"
          value={size}
          icon={size == "500+" ? getIcon("up") : getIcon("down")}
        />
        <OtherInfo label="Type" value={industry_sector} icon={getIcon("up")} />
        <OtherInfo
          label="Revenue"
          value={"$7000"}
          icon={overall >= 50 ? getIcon("up") : getIcon("down")}
        />
        <OtherInfo label="Location" value={location} />
        <OtherInfo
          label="Technology"
          value={"Android, Web, Finance"}
          icon={getIcon("up")}
        />
        <OtherInfo label="Global Presence" value={"UK, USA, Germany,India"} />
        <OtherInfo label="Specialties" value={specialties} />
      </Box>
      {/* <Typography variant="h5" fontWeight={600} mt={2} mb={1}>
        Perks & Benefits
      </Typography>
      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {perks.map((item, index) => {
          return <Chip label={item} key={index} />;
        })}
      </Stack> */}

      {/* blue/overall chip */}
      {props.left && props.isAIRec == "yes" && (
        <Stack direction={"row"} spacing={1} mt={2} ml={0}>
          <Tooltip
            title={
              <Typography variant="body2">
                {`it is apparent that this candidate's company meets a high
                    standard and is comparable to the leading companies in the
                    field`}
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
              <ArrowUpwardIcon sx={{ fontSize: 10, mr: 0.5 }} /> {t_overall_per}
              % Overall
            </Typography>
          </Tooltip>
        </Stack>
      )}

      {/* green chip */}
      {props.left && props.isAIRec == "no" && (
        <Stack direction={"row"} spacing={1} mt={2} ml={0}>
          <Tooltip
            title={
              <Typography variant="body2">
                {` After evaluating candidates' companies alongside yours, and considering pertinent company data, 
                           it's apparent that this candidate exhibits greater performance potential`}
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
              <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} /> {s_overall_per}
              % Potential
            </Typography>
          </Tooltip>

          <Tooltip
            title={
              <Typography variant="body2">
                {` It's evident that this candidate is a better
                            cultural fit. Candidate is likely to understand and
                            align with your company's standards and values`}
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
              <ArrowUpwardIcon sx={{ fontSize: 14, mr: 0.5 }} />
              {s_culture_per}% Cultural Fit
            </Typography>
          </Tooltip>
        </Stack>
      )}
    </>
  );
};

function CompanyDetails(props: any) {
  const { leftCompanyData, rightCompanyData, isAIRec } = props;

  return (
    <Container maxWidth="lg">
      <Box bgcolor={"#fff"} borderRadius={"8px"} my={3.5} py={2.5}>
        <Grid rowSpacing={1} direction={"row"} display={"flex"}>
          <Grid item xs={6} px={2} flexWrap={"wrap"} width={"50%"}>
            {leftCompanyData && (
              <Company data={leftCompanyData} left isAIRec={isAIRec} />
            )}
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "primary.main", mt: 2 }}
            flexItem
          />
          <Grid item xs={6} px={2} width={"50%"}>
            {rightCompanyData && (
              <Company data={rightCompanyData} right isAIRec={isAIRec} />
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CompanyDetails;
