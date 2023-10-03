"use client";
import React from "react";
// MUi Packages
import { Box, Container } from "@mui/material";
// Third party packages
// Custom components
import SummaryCard from "./SummaryCard";
import ExperianceDetails from "./ExperianceDetails";
import EducationDetailsCard from "./EducationDetailsCard";
import BasicInfo from "../common/BasicInfo";
import SkillSet from "./SkillSet";

function CandidateDetails() {
  return (
    <Container maxWidth="lg">
      <Box bgcolor={"#f8f8f8"} borderRadius={"8px"} my={3.5} py={2.5} px={2.5}>
        <SummaryCard />
        <BasicInfo />
        <SkillSet />
        <ExperianceDetails />
        <EducationDetailsCard />
      </Box>
    </Container>
  );
}

export default CandidateDetails;
