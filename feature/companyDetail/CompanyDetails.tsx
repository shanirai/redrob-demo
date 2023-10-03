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
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

import CallIcon from "@mui/icons-material/Call";
import OtherInfo from "./OtherInfo";
import Comparison from "./Comparison";
import CustomChip from "../common/CustomChip";
// Third party packages
// Custom components

const about = `HCL Technologies Limited, is an Indian
multinational information technology services and consulting
company headquartered in Noida.`;

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

const info = [
  {
    label: "Size",
    value: "1Lakh+",
    icon: false,
  },
  {
    label: "Type",
    value: "Information Technolgy",
    icon: true,
  },
  {
    label: "Revenue",
    value: "$7000",
    icon: true,
  },
  {
    label: "Location",
    value: "Noida",
    icon: false,
  },
  {
    label: "Technology",
    value: "Android, Web, Finance",
    icon: false,
  },
  {
    label: "Global Presence",
    value: "UK, USA, Germany,India",
    icon: false,
  },
  {
    label: "Specialties",
    value:
      "International Commerce, Artificial Intelligence, B2B, Innovative Product Development",
    icon: false,
  },
];

const perks = [
  "Health Insurance",
  "Social Security",
  "Acheivement Award",
  "Paid Vacation",
];

const Company = (props: any) => {
  const { name, url, tagLine, tech, revenue, dollar } = props;
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={2}
        alignItems={"center"}
        mb={2}
      >
        <Box display={"flex"} flexDirection={"column"} textAlign={"left"}>
          <Typography variant="h4" fontWeight={600}>
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={500}
            color={"text.secondary"}
          >
            {tagLine}
          </Typography>
        </Box>
      </Box>

      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {expData.map((item, index) => (
          <CustomChip item={item} key={index} ml={0} />
        ))}
      </Stack>

      {/* <Comparison /> */}

      <Box pt={0.5} mt={2}>
        <Typography variant="body2">{about}</Typography>
      </Box>

      <Box
        py={2}
        sx={{
          alignItems: "center",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <LanguageIcon />
        <Link href={url} target="_blank" rel="noreferrer" px={1} fontSize={14}>
          {url}
        </Link>
      </Box>

      <Box
        pt={0.5}
        sx={{
          alignItems: "flex-start",
          flexDirection: "column",
          display: "flex",
        }}
      >
        {info.map((item) => {
          return (
            <OtherInfo
              key={item.label}
              data={item}
              icon={item.icon}
              tech={tech}
              revenue={revenue}
              dollar={dollar}
            />
          );
        })}
      </Box>

      {/* <Typography variant="h5" fontWeight={600} mt={2} mb={1}>
        Perks & Benefits
      </Typography>
      <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
        {perks.map((item, index) => {
          return <Chip label={item} key={index} />;
        })}
      </Stack> */}
    </>
  );
};

function CompanyDetails() {
  return (
    <Container maxWidth="lg">
      <Box bgcolor={"#fff"} borderRadius={"8px"} my={3.5} py={2.5}>
        <Grid rowSpacing={1} direction={"row"} display={"flex"}>
          <Grid item xs={6} px={2} flexWrap={"wrap"} width={"50%"}>
            <Company
              name="HCL Technologies"
              url="https://www.hcltech.com"
              tagLine="HCLTech – Supercharging Progress"
              tech="down"
              visible
            />
          </Grid>
          <Divider
            orientation="vertical"
            sx={{ bgcolor: "primary.main", mt: 2 }}
            flexItem
          />
          <Grid item xs={6} px={2} width={"50%"}>
            <Company
              name="Accenture"
              url="https://www.accenture.com/in-en"
              tagLine="Let there be change"
              revenue="up"
              dollar={7700}
              visible
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CompanyDetails;
