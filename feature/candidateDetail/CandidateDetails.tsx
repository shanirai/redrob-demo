"use client";
import React from "react";
// MUi Packages
import { Box, Container, Typography } from "@mui/material";
// Third party packages
// Custom components
import SummaryCard from "./SummaryCard";
import ExperianceDetails from "./ExperianceDetails";
import EducationDetailsCard from "./EducationDetailsCard";
import BasicInfo from "../common/BasicInfo";
import SkillSet from "./SkillSet";
import CustomizeDialog from "../common/CustomizaDialog";
import SectionHeading from "../secondOption/SectionHeading";
import CandidateData from "../../data/candi.json";

function CandidateDetails(props: any) {
  //** props -- components */
  const { cardId } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filterData = CandidateData.filter((item) => {
    if (item.id === cardId + 1) {
      return item;
    }
  });

  console.log(
    "check filterData of Candidate",
    filterData,
    "What is Index Key ======",
    cardId
  );

  return (
    <Container maxWidth="lg">
      <Box bgcolor={"#f8f8f8"} borderRadius={"8px"} my={3.5} py={2.5} px={2.5}>
        <SectionHeading filterData={filterData} />
        <SummaryCard filterData={filterData} />
        <BasicInfo filterData={filterData} />
        <SkillSet filterData={filterData} />
        <ExperianceDetails filterData={filterData} />
        <EducationDetailsCard />
        <CustomizeDialog />
      </Box>
    </Container>
  );
}

export default CandidateDetails;
